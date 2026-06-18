/**
 * COD Mobile Random Loadout Generator
 * Clean, data-driven generator engine with in-game logic
 */

/* ---------- helpers ---------- */
function pick(arr) {
	return arr[Math.floor(Math.random() * arr.length)];
}

/** Pick from array, filtering out excluded items. Falls back to unfiltered if all excluded. */
function pickFiltered(arr) {
	const filtered = arr.filter(item => !exclusions.has(item));
	return pick(filtered.length > 0 ? filtered : arr);
}

/** Pick N unique from array, filtering out excluded items. Falls back if needed. */
function pickNFiltered(arr, n) {
	const filtered = arr.filter(item => !exclusions.has(item));
	return pickN(filtered.length > 0 ? filtered : arr, n);
}

function pickN(arr, n) {
	const copy = [...arr];
	const count = Math.min(n, copy.length);
	const result = [];
	for (let i = 0; i < count; i++) {
		const idx = Math.floor(Math.random() * copy.length);
		result.push(copy.splice(idx, 1)[0]);
	}
	return result;
}

function pickCategory(data) {
	const categories = Object.keys(data);
	const cat = pick(categories);
	// Filter excluded weapons from the chosen category
	const available = data[cat].filter(w => !exclusions.has(w));
	// If all weapons in this category are excluded, try another category
	if (available.length === 0) {
		const allAvailable = categories.flatMap(c => data[c].filter(w => !exclusions.has(w)));
		if (allAvailable.length > 0) {
			const weapon = pick(allAvailable);
			const weaponCat = categories.find(c => data[c].includes(weapon));
			return { category: weaponCat, weapon };
		}
		// All excluded — fall back to fully random
		const weapon = pick(data[cat]);
		return { category: cat, weapon };
	}
	return { category: cat, weapon: pick(available) };
}

/**
 * Weighted random integer between min and max (inclusive).
 * `weights` maps each value to its relative probability.
 */
function weightedRandom(weights) {
	const entries = Object.entries(weights);
	const total = entries.reduce((sum, [, w]) => sum + w, 0);
	let roll = Math.random() * total;
	for (const [val, w] of entries) {
		roll -= w;
		if (roll <= 0) return Number(val);
	}
	return Number(entries[entries.length - 1][0]);
}

/* ---------- attachment slot logic ---------- */
const ALL_ATTACHMENT_SLOTS = [
	'Muzzle', 'Barrel', 'Optic', 'Stock', 'Perk',
	'Laser', 'Underbarrel', 'Ammunition', 'Rear Grip'
];

/**
 * Weighted distribution for how many attachment slots to fill (0–5).
 * Skews toward 3–5 (realistic builds) but allows lighter loadouts.
 *   0 slots: ~3%   (bare weapon challenge)
 *   1 slot:  ~5%
 *   2 slots: ~10%
 *   3 slots: ~22%
 *   4 slots: ~28%
 *   5 slots: ~32%  (full build, most common)
 */
const ATTACHMENT_COUNT_WEIGHTS = {
	0: 3,
	1: 5,
	2: 10,
	3: 22,
	4: 28,
	5: 32
};

/**
 * Categories that have NO Gunsmith (0 attachments always).
 */
const NO_GUNSMITH_CATEGORIES = ['Melee', 'Launchers'];

/**
 * Slot restrictions by weapon category.
 * Some weapon types can't equip certain slot categories in-game.
 */
const SLOT_RESTRICTIONS = {
	'Sniper Rifles':   ['Underbarrel'],   // Snipers use bipod only, not foregrips — handled via perk slot
	'Marksman Rifles': ['Underbarrel'],   // Same as snipers (bipod is separate)
	'Shotguns':        ['Rear Grip'],     // Most shotguns lack rear grip slot
	'Pistols':         ['Underbarrel', 'Rear Grip'], // Pistols have limited slots
};

/**
 * Get the available attachment slots for a given weapon category.
 */
function getSlotsForCategory(category) {
	const restricted = SLOT_RESTRICTIONS[category] || [];
	return ALL_ATTACHMENT_SLOTS.filter(slot => !restricted.includes(slot));
}

/**
 * Generate attachments for a weapon.
 * Returns an array of { slot, name, empty } objects.
 * Fills all 5 picked slots — some may be marked as "Empty".
 */
function generateAttachments(category) {
	// No gunsmith for melee/launchers
	if (NO_GUNSMITH_CATEGORIES.includes(category)) {
		return [];
	}

	const availableSlots = getSlotsForCategory(category);

	// Pick how many slots to actually fill (0–5)
	const maxSlots = Math.min(5, availableSlots.length);
	const fillCount = Math.min(weightedRandom(ATTACHMENT_COUNT_WEIGHTS), maxSlots);

	// Pick 5 slot categories (or fewer if not enough available)
	const chosenSlots = pickN(availableSlots, Math.min(5, availableSlots.length));

	// Decide which of the chosen slots get filled vs. left empty
	const filledIndices = new Set();
	const indexPool = [...chosenSlots.keys()];
	const pickedFilled = pickN(indexPool, fillCount);
	pickedFilled.forEach(i => filledIndices.add(i));

	return chosenSlots.map((slot, i) => {
		if (filledIndices.has(i)) {
			return {
				slot,
				name: WEAPON_DATA.attachments[slot]
					? pick(WEAPON_DATA.attachments[slot])
					: slot,
				empty: false
			};
		}
		return { slot, name: 'Empty', empty: true };
	});
}

/* ---------- category type mapping ---------- */
const CATEGORY_TYPE_MAP = {
	'Assault Rifles': 'ar',
	'SMGs': 'smg',
	'LMGs': 'lmg',
	'Sniper Rifles': 'sniper',
	'Shotguns': 'shotgun',
	'Marksman Rifles': 'marksman',
	'Pistols': 'pistol',
	'Launchers': 'launcher',
	'Melee': 'melee'
};

/* ---------- lock state ---------- */
const locks = {
	primary: false,
	secondary: false,
	lethal: false,
	tactical: false,
	operator: false,
	perk1: false,
	perk2: false,
	perk3: false,
	scorestreaks: false,
	brClass: false
};

let currentLoadout = null;

function toggleLock(btn) {
	const key = btn.dataset.lockKey;
	locks[key] = !locks[key];
	const icon = btn.querySelector('i');
	const card = btn.closest('.loadout-card');

	if (locks[key]) {
		icon.className = 'fa-solid fa-lock';
		btn.classList.add('locked');
		if (card) card.classList.add('card-locked');
	} else {
		icon.className = 'fa-solid fa-lock-open';
		btn.classList.remove('locked');
		if (card) card.classList.remove('card-locked');
	}
}

/* ---------- main generator ---------- */
function generateLoadout() {
	const btn = document.getElementById('generate-btn');
	btn.classList.remove('idle');

	const prev = currentLoadout;

	// Pick primary weapon (from any category that has Gunsmith + non-secondary categories)
	let primary, primaryType, primaryAttachments;
	if (locks.primary && prev) {
		primary = prev.primary;
		primaryType = prev.primaryType;
		primaryAttachments = prev.primaryAttachments;
	} else {
		const primaryCategories = {};
		for (const cat of [
			'Assault Rifles', 'SMGs', 'LMGs', 'Sniper Rifles',
			'Shotguns', 'Marksman Rifles'
		]) {
			if (WEAPON_DATA.weapons[cat]) {
				primaryCategories[cat] = WEAPON_DATA.weapons[cat];
			}
		}
		primary = pickCategory(primaryCategories);
		primaryType = CATEGORY_TYPE_MAP[primary.category] || 'ar';
		primaryAttachments = generateAttachments(primary.category);
	}

	// Pick secondary weapon (pistol, launcher, or melee)
	let secondary, secondaryType, secondaryAttachments;
	if (locks.secondary && prev) {
		secondary = prev.secondary;
		secondaryType = prev.secondaryType;
		secondaryAttachments = prev.secondaryAttachments;
	} else {
		const secondaryCategories = {};
		for (const cat of ['Pistols', 'Launchers', 'Melee']) {
			if (WEAPON_DATA.weapons[cat]) {
				secondaryCategories[cat] = WEAPON_DATA.weapons[cat];
			}
		}
		secondary = pickCategory(secondaryCategories);
		secondaryType = CATEGORY_TYPE_MAP[secondary.category] || 'pistol';
		secondaryAttachments = generateAttachments(secondary.category);
	}

	// Equipment
	const lethal = (locks.lethal && prev) ? prev.lethal : pickFiltered(WEAPON_DATA.lethal);
	const tactical = (locks.tactical && prev) ? prev.tactical : pickFiltered(WEAPON_DATA.tactical);

	// Operator skill
	const operator = (locks.operator && prev) ? prev.operator : pickFiltered(WEAPON_DATA.operatorSkills);

	// Perks (one from each slot)
	const perk1 = (locks.perk1 && prev) ? prev.perk1 : pickFiltered(WEAPON_DATA.perks.red);
	const perk2 = (locks.perk2 && prev) ? prev.perk2 : pickFiltered(WEAPON_DATA.perks.green);
	const perk3 = (locks.perk3 && prev) ? prev.perk3 : pickFiltered(WEAPON_DATA.perks.blue);

	// Scorestreaks (pick 3 unique)
	const scorestreaks = (locks.scorestreaks && prev) ? prev.scorestreaks : pickNFiltered(WEAPON_DATA.scorestreaks, 3);

	// BR Class
	const brClass = (locks.brClass && prev) ? prev.brClass : pickFiltered(WEAPON_DATA.brClasses);

	// --- Render to DOM ---
	const loadoutData = {
		primary, primaryType, primaryAttachments,
		secondary, secondaryType, secondaryAttachments,
		lethal, tactical, operator,
		perk1, perk2, perk3,
		scorestreaks, brClass
	};
	currentLoadout = loadoutData;
	renderLoadout(loadoutData);
	saveToHistory(loadoutData);
}

/* ---------- DOM rendering ---------- */
function renderAttachmentHTML(attachments) {
	if (attachments.length === 0) {
		return '<div class="attachment-tag"><span class="attachment-name empty-label">No Gunsmith</span></div>';
	}

	const allEmpty = attachments.every(att => att.empty);
	if (allEmpty) {
		return '<div class="attachment-tag"><span class="attachment-name empty-label">No attachments equipped</span></div>';
	}

	return attachments.map(att => {
		if (att.empty) {
			return `<div class="attachment-tag attachment-empty">
				<span class="attachment-slot">${att.slot}</span>
				<span class="attachment-name empty-label">Empty</span>
			</div>`;
		}
		return `<div class="attachment-tag">
			<span class="attachment-slot">${att.slot}</span>
			<span class="attachment-name">${att.name}</span>
		</div>`;
	}).join('');
}

function renderLoadout(data) {
	// Primary
	const primaryTypeEl = document.getElementById('primary-type');
	primaryTypeEl.textContent = data.primary.category;
	primaryTypeEl.setAttribute('data-type', data.primaryType);
	document.getElementById('primary-name').textContent = data.primary.weapon;
	document.getElementById('primary-attachments').innerHTML =
		renderAttachmentHTML(data.primaryAttachments);

	// Secondary
	const secondaryTypeEl = document.getElementById('secondary-type');
	secondaryTypeEl.textContent = data.secondary.category;
	secondaryTypeEl.setAttribute('data-type', data.secondaryType);
	document.getElementById('secondary-name').textContent = data.secondary.weapon;
	document.getElementById('secondary-attachments').innerHTML =
		renderAttachmentHTML(data.secondaryAttachments);

	// Equipment
	document.getElementById('lethal-name').textContent = data.lethal;
	document.getElementById('tactical-name').textContent = data.tactical;

	// Operator Skill
	document.getElementById('operator-name').textContent = data.operator;

	// Perks
	document.getElementById('perk1-name').textContent = data.perk1;
	document.getElementById('perk2-name').textContent = data.perk2;
	document.getElementById('perk3-name').textContent = data.perk3;

	// Scorestreaks
	const streakEl = document.getElementById('scorestreak-list');
	streakEl.innerHTML = data.scorestreaks.map(s =>
		`<span class="scorestreak-tag">${s}</span>`
	).join('');

	// BR Class
	document.getElementById('br-class-name').textContent = data.brClass;

	// Show results with animation
	const results = document.getElementById('loadout-results');
	results.classList.remove('visible');

	// Force reflow to restart animations
	void results.offsetHeight;

	// Re-run card animations
	results.querySelectorAll('.loadout-card, .loadout-row').forEach(el => {
		el.style.animation = 'none';
		void el.offsetHeight;
		el.style.animation = '';
	});

	results.classList.add('visible');
}

/* ---------- Copy to clipboard ---------- */
async function copyLoadout() {
	const results = document.getElementById('loadout-results');
	if (!results.classList.contains('visible')) return;

	const primary = document.getElementById('primary-name').textContent;
	const primaryType = document.getElementById('primary-type').textContent;
	const primaryAtts = Array.from(
		document.querySelectorAll('#primary-attachments .attachment-tag:not(.attachment-empty)')
	).filter(el => !el.querySelector('.empty-label')).map(el => {
		const slot = el.querySelector('.attachment-slot')?.textContent || '';
		const name = el.querySelector('.attachment-name')?.textContent || '';
		return `  ${slot}: ${name}`;
	}).join('\n');

	const secondary = document.getElementById('secondary-name').textContent;
	const secondaryType = document.getElementById('secondary-type').textContent;
	const secondaryAtts = Array.from(
		document.querySelectorAll('#secondary-attachments .attachment-tag:not(.attachment-empty)')
	).filter(el => !el.querySelector('.empty-label')).map(el => {
		const slot = el.querySelector('.attachment-slot')?.textContent || '';
		const name = el.querySelector('.attachment-name')?.textContent || '';
		return `  ${slot}: ${name}`;
	}).join('\n');

	const lethal = document.getElementById('lethal-name').textContent;
	const tactical = document.getElementById('tactical-name').textContent;
	const operator = document.getElementById('operator-name').textContent;
	const perk1 = document.getElementById('perk1-name').textContent;
	const perk2 = document.getElementById('perk2-name').textContent;
	const perk3 = document.getElementById('perk3-name').textContent;
	const scorestreaks = Array.from(
		document.querySelectorAll('#scorestreak-list .scorestreak-tag')
	).map(el => el.textContent).join(', ');
	const brClass = document.getElementById('br-class-name').textContent;

	const lines = [
		`Primary Weapon (${primaryType}): ${primary}`,
	];
	if (primaryAtts) {
		lines.push(`Attachments:`, primaryAtts);
	} else {
		lines.push(`Attachments: None`);
	}
	lines.push('');
	lines.push(`Secondary Weapon (${secondaryType}): ${secondary}`);
	if (secondaryAtts) {
		lines.push(`Attachments:`, secondaryAtts);
	}
	lines.push(
		'',
		`Lethal: ${lethal}`,
		`Tactical: ${tactical}`,
		`Operator Skill: ${operator}`,
		'',
		`Perk 1 (Red): ${perk1}`,
		`Perk 2 (Green): ${perk2}`,
		`Perk 3 (Blue): ${perk3}`,
		'',
		`Scorestreaks: ${scorestreaks}`,
		`BR Class: ${brClass}`
	);

	const text = lines.join('\n');

	try {
		await navigator.clipboard.writeText(text);
	} catch {
		// Fallback for older browsers / non-HTTPS
		const ta = document.createElement('textarea');
		ta.value = text;
		ta.style.position = 'fixed';
		ta.style.opacity = '0';
		document.body.appendChild(ta);
		ta.select();
		document.execCommand('copy');
		document.body.removeChild(ta);
	}

	// Show toast
	showToast('Copied to clipboard!');

	// Button feedback
	const btn = document.getElementById('copy-btn');
	btn.classList.add('copied');
	setTimeout(() => btn.classList.remove('copied'), 1500);
}

/* ---------- Toast ---------- */
function showToast(message) {
	const toast = document.getElementById('toast');
	if (message) {
		document.getElementById('toast-text').textContent = message;
	}
	toast.classList.add('show');
	clearTimeout(toast._timer);
	toast._timer = setTimeout(() => {
		toast.classList.remove('show');
	}, 2200);
}

/* ---------- Share via URL ---------- */

/** Reverse map: category name → short type code */
const CATEGORY_SHORT_MAP = Object.fromEntries(
	Object.entries(CATEGORY_TYPE_MAP).map(([k, v]) => [k, v])
);
/** Reverse map: short type code → category name */
const SHORT_CATEGORY_MAP = Object.fromEntries(
	Object.entries(CATEGORY_TYPE_MAP).map(([k, v]) => [v, k])
);

/**
 * Encode the current loadout into clean URL query params.
 * Uses short param names and pipe-delimited lists.
 * Attachments use 'Slot:Name' pairs separated by pipes.
 */
function encodeLoadoutToURL(data) {
	if (!data) return null;

	const params = new URLSearchParams();
	params.set('pw', data.primary.weapon);
	params.set('pc', CATEGORY_SHORT_MAP[data.primary.category] || 'ar');
	params.set('sw', data.secondary.weapon);
	params.set('sc', CATEGORY_SHORT_MAP[data.secondary.category] || 'pistol');

	// Encode ALL attachment slots: filled as 'Slot:Name', empty as 'Slot'
	// 'none' = No Gunsmith (launchers/melee), distinguished from all-empty slots
	if (data.primaryAttachments.length === 0) {
		params.set('pa', 'none');
	} else {
		params.set('pa', data.primaryAttachments.map(a =>
			a.empty ? a.slot : `${a.slot}:${a.name}`
		).join('|'));
	}
	if (data.secondaryAttachments.length === 0) {
		params.set('sa', 'none');
	} else {
		params.set('sa', data.secondaryAttachments.map(a =>
			a.empty ? a.slot : `${a.slot}:${a.name}`
		).join('|'));
	}

	params.set('l', data.lethal);
	params.set('t', data.tactical);
	params.set('o', data.operator);
	params.set('pk', [data.perk1, data.perk2, data.perk3].join('|'));
	params.set('ss', data.scorestreaks.join('|'));
	params.set('br', data.brClass);

	return params.toString();
}

/**
 * Decode URL query params back into a renderLoadout data object.
 */
function decodeLoadoutFromURL() {
	const params = new URLSearchParams(location.search);
	if (!params.has('pw')) return null;

	try {
		const primaryCat = SHORT_CATEGORY_MAP[params.get('pc')] || 'Assault Rifles';
		const secondaryCat = SHORT_CATEGORY_MAP[params.get('sc')] || 'Pistols';
		const perks = (params.get('pk') || '').split('|');
		const scorestreaks = (params.get('ss') || '').split('|');

		// Decode attachments: 'none' = No Gunsmith, 'Slot:Name' = filled, 'Slot' = empty
		const decodeAtts = (str) => {
			if (!str || str === 'none') return [];
			return str.split('|').map(pair => {
				if (pair.includes(':')) {
					const [slot, ...rest] = pair.split(':');
					return { slot, name: rest.join(':'), empty: false };
				}
				return { slot: pair, name: 'Empty', empty: true };
			});
		};
		const primaryAttachments = decodeAtts(params.get('pa'));
		const secondaryAttachments = decodeAtts(params.get('sa'));

		return {
			primary: { category: primaryCat, weapon: params.get('pw') },
			primaryType: params.get('pc') || 'ar',
			primaryAttachments,
			secondary: { category: secondaryCat, weapon: params.get('sw') },
			secondaryType: params.get('sc') || 'pistol',
			secondaryAttachments,
			lethal: params.get('l') || '',
			tactical: params.get('t') || '',
			operator: params.get('o') || '',
			perk1: perks[0] || '',
			perk2: perks[1] || '',
			perk3: perks[2] || '',
			scorestreaks,
			brClass: params.get('br') || ''
		};
	} catch {
		return null;
	}
}

/**
 * Share the current loadout as a URL.
 * Uses Web Share API if available, falls back to clipboard.
 */
async function shareLoadout() {
	if (!currentLoadout) return;

	const queryString = encodeLoadoutToURL(currentLoadout);
	if (!queryString) return;

	const url = `${location.origin}${location.pathname}?${queryString}`;

	const shareData = {
		title: 'CODM Random Loadout',
		text: `Check out this loadout: ${currentLoadout.primary.weapon} + ${currentLoadout.secondary.weapon}`,
		url
	};

	try {
		if (navigator.share && navigator.canShare?.(shareData)) {
			await navigator.share(shareData);
			return;
		}
	} catch {
		// User cancelled or share failed — fall through to clipboard
	}

	// Fallback: copy URL to clipboard
	try {
		await navigator.clipboard.writeText(url);
	} catch {
		const ta = document.createElement('textarea');
		ta.value = url;
		ta.style.position = 'fixed';
		ta.style.opacity = '0';
		document.body.appendChild(ta);
		ta.select();
		document.execCommand('copy');
		document.body.removeChild(ta);
	}

	showToast('Share link copied to clipboard!');

	const btn = document.getElementById('share-btn');
	btn.classList.add('copied');
	setTimeout(() => btn.classList.remove('copied'), 1500);
}

/**
 * Check URL on page load for a shared loadout.
 */
function loadFromURL() {
	const loadoutData = decodeLoadoutFromURL();
	if (!loadoutData) return false;

	currentLoadout = loadoutData;
	renderLoadout(loadoutData);
	saveToHistory(loadoutData);

	// Clean the URL without reloading
	history.replaceState(null, '', location.pathname);
	return true;
}

/* ---------- History ---------- */
const HISTORY_KEY = 'codm-loadout-history';
const MAX_HISTORY = 50;

function getHistory() {
	try {
		return JSON.parse(localStorage.getItem(HISTORY_KEY)) || [];
	} catch {
		return [];
	}
}

function saveToHistory(loadoutData) {
	const history = getHistory();

	// Create a summary object for storage
	const entry = {
		id: Date.now(),
		timestamp: new Date().toLocaleString(),
		primary: {
			weapon: loadoutData.primary.weapon,
			category: loadoutData.primary.category,
			type: loadoutData.primaryType,
			attachments: loadoutData.primaryAttachments
		},
		secondary: {
			weapon: loadoutData.secondary.weapon,
			category: loadoutData.secondary.category,
			type: loadoutData.secondaryType,
			attachments: loadoutData.secondaryAttachments
		},
		lethal: loadoutData.lethal,
		tactical: loadoutData.tactical,
		operator: loadoutData.operator,
		perks: [loadoutData.perk1, loadoutData.perk2, loadoutData.perk3],
		scorestreaks: loadoutData.scorestreaks,
		brClass: loadoutData.brClass
	};

	history.unshift(entry);

	// Cap at MAX_HISTORY
	if (history.length > MAX_HISTORY) history.length = MAX_HISTORY;

	try {
		localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
	} catch { /* localStorage full — silently fail */ }

	updateHistoryCount();

	// Re-render history panel if it's currently open
	const panel = document.getElementById('history-panel');
	if (panel.classList.contains('open')) {
		renderHistory();
	}
}

function updateHistoryCount() {
	const history = getHistory();
	const countEl = document.getElementById('history-count');
	countEl.textContent = history.length;
	countEl.style.display = history.length > 0 ? '' : 'none';
}

function toggleHistory() {
	const panel = document.getElementById('history-panel');
	const isOpen = panel.classList.contains('open');

	if (isOpen) {
		panel.classList.remove('open');
	} else {
		renderHistory();
		panel.classList.add('open');
	}
}

function renderHistory() {
	const history = getHistory();
	const listEl = document.getElementById('history-list');
	const emptyEl = document.getElementById('history-empty');

	if (history.length === 0) {
		emptyEl.style.display = '';
		// Remove all items but keep empty state
		listEl.querySelectorAll('.history-item').forEach(el => el.remove());
		return;
	}

	emptyEl.style.display = 'none';

	// Clear existing items
	listEl.querySelectorAll('.history-item').forEach(el => el.remove());

	history.forEach((entry, index) => {
		const filledPrimary = entry.primary.attachments
			? entry.primary.attachments.filter(a => !a.empty).length
			: 0;
		const filledSecondary = entry.secondary.attachments
			? entry.secondary.attachments.filter(a => !a.empty).length
			: 0;

		const item = document.createElement('div');
		item.className = 'history-item';
		item.style.animationDelay = `${index * 0.03}s`;

		item.innerHTML = `
			<div class="history-item-header">
				<span class="history-item-num">#${history.length - index}</span>
				<span class="history-item-time">${entry.timestamp}</span>
			</div>
			<div class="history-item-body">
				<div class="history-weapon">
					<span class="history-weapon-name">${entry.primary.weapon}</span>
					<span class="card-badge" data-type="${entry.primary.type}">${entry.primary.category}</span>
					${filledPrimary > 0 ? `<span class="history-att-count">${filledPrimary}/5</span>` : ''}
				</div>
				<div class="history-weapon history-weapon-secondary">
					<span class="history-weapon-name">${entry.secondary.weapon}</span>
					<span class="card-badge" data-type="${entry.secondary.type}">${entry.secondary.category}</span>
					${filledSecondary > 0 ? `<span class="history-att-count">${filledSecondary}/5</span>` : ''}
				</div>
				<div class="history-meta">
					<span>${entry.perks.join(' · ')}</span>
				</div>
			</div>
		`;

		item.addEventListener('click', () => loadFromHistory(entry));

		listEl.appendChild(item);
	});
}

function clearHistory() {
	try {
		localStorage.removeItem(HISTORY_KEY);
	} catch { /* no-op */ }
	updateHistoryCount();
	renderHistory();
	showToast('History cleared');
}

function loadFromHistory(entry) {
	// Reconstruct the data shape that renderLoadout expects
	const loadoutData = {
		primary: { category: entry.primary.category, weapon: entry.primary.weapon },
		primaryType: entry.primary.type,
		primaryAttachments: entry.primary.attachments || [],
		secondary: { category: entry.secondary.category, weapon: entry.secondary.weapon },
		secondaryType: entry.secondary.type,
		secondaryAttachments: entry.secondary.attachments || [],
		lethal: entry.lethal,
		tactical: entry.tactical,
		operator: entry.operator,
		perk1: entry.perks[0],
		perk2: entry.perks[1],
		perk3: entry.perks[2],
		scorestreaks: entry.scorestreaks,
		brClass: entry.brClass
	};

	currentLoadout = loadoutData;
	renderLoadout(loadoutData);
}

/* ---------- Exclusions ---------- */
const EXCLUSIONS_KEY = 'codm-loadout-exclusions';
let exclusions = new Set();

function loadExclusions() {
	try {
		const data = JSON.parse(localStorage.getItem(EXCLUSIONS_KEY));
		if (Array.isArray(data)) exclusions = new Set(data);
	} catch { /* no-op */ }
}

function saveExclusions() {
	try {
		localStorage.setItem(EXCLUSIONS_KEY, JSON.stringify([...exclusions]));
	} catch { /* no-op */ }
	updateExcludeCount();
}

function updateExcludeCount() {
	const el = document.getElementById('exclude-count');
	el.textContent = exclusions.size;
	el.style.display = exclusions.size > 0 ? '' : 'none';
}

function toggleExclusions() {
	const panel = document.getElementById('exclude-panel');
	const isOpen = panel.classList.contains('open');

	if (isOpen) {
		panel.classList.remove('open');
	} else {
		renderExclusionPanel();
		panel.classList.add('open');
	}
}

function toggleExcludeItem(name, chipEl) {
	if (exclusions.has(name)) {
		exclusions.delete(name);
		chipEl.classList.remove('excluded');
	} else {
		exclusions.add(name);
		chipEl.classList.add('excluded');
	}
	saveExclusions();
	// Update category count
	const cat = chipEl.closest('.exclude-category');
	if (cat) {
		const chips = cat.querySelectorAll('.exclude-chip');
		const excluded = cat.querySelectorAll('.exclude-chip.excluded');
		const countEl = cat.querySelector('.exclude-category-count');
		if (countEl) {
			countEl.textContent = excluded.length > 0 ? `${excluded.length}/${chips.length}` : '';
		}
	}
}

function clearExclusions() {
	exclusions.clear();
	saveExclusions();
	renderExclusionPanel();
	showToast('Exclusions cleared');
}

/** Build the exclusion panel dynamically from WEAPON_DATA. */
function renderExclusionPanel() {
	const listEl = document.getElementById('exclude-list');
	listEl.innerHTML = '';

	const sections = [
		...Object.entries(WEAPON_DATA.weapons).map(([cat, items]) => ({
			label: cat, items
		})),
		{ label: 'Lethal Equipment', items: WEAPON_DATA.lethal },
		{ label: 'Tactical Equipment', items: WEAPON_DATA.tactical },
		{ label: 'Operator Skills', items: WEAPON_DATA.operatorSkills },
		{ label: 'Red Perks', items: WEAPON_DATA.perks.red },
		{ label: 'Green Perks', items: WEAPON_DATA.perks.green },
		{ label: 'Blue Perks', items: WEAPON_DATA.perks.blue },
		{ label: 'Scorestreaks', items: WEAPON_DATA.scorestreaks },
		{ label: 'BR Classes', items: WEAPON_DATA.brClasses },
	];

	sections.forEach(({ label, items }) => {
		const excludedInCat = items.filter(i => exclusions.has(i)).length;

		const wrapper = document.createElement('div');
		wrapper.className = 'exclude-category';

		const btn = document.createElement('button');
		btn.type = 'button';
		btn.className = 'exclude-category-btn';
		btn.innerHTML = `
			<span>${label}</span>
			<span class="exclude-category-count">${excludedInCat > 0 ? excludedInCat + '/' + items.length : ''}</span>
			<i class="fa-solid fa-chevron-down chevron"></i>
		`;
		btn.addEventListener('click', () => wrapper.classList.toggle('open'));

		const itemsContainer = document.createElement('div');
		itemsContainer.className = 'exclude-items';

		items.forEach(name => {
			const chip = document.createElement('button');
			chip.type = 'button';
			chip.className = 'exclude-chip' + (exclusions.has(name) ? ' excluded' : '');
			chip.textContent = name;
			chip.addEventListener('click', () => toggleExcludeItem(name, chip));
			itemsContainer.appendChild(chip);
		});

		wrapper.appendChild(btn);
		wrapper.appendChild(itemsContainer);
		listEl.appendChild(wrapper);
	});
}

/* ---------- Init ---------- */
document.addEventListener('DOMContentLoaded', () => {
	const btn = document.getElementById('generate-btn');
	btn.classList.add('idle');
	updateHistoryCount();
	loadExclusions();
	updateExcludeCount();

	// Check for shared loadout in URL
	loadFromURL();
});
