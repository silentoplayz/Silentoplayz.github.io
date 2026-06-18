/**
 * COD Mobile Weapon & Game Data
 * Updated for 2026 (through Season 5 2026)
 * Last audited: June 17, 2026
 *
 * Sources: COD Mobile Fandom Wiki, ZillionGamer,
 *          MobileMatters.gg, Reddit, IGN, Activision
 *
 * Data structure: simple arrays for the random generator.
 * Attachments are shared pools by slot type — the generator
 * picks 5 random slot categories and one attachment from each.
 */

const WEAPON_DATA = {

	/* ═══════════════════════════════════════
	   WEAPONS — organized by category
	   ═══════════════════════════════════════ */
	weapons: {

		'Assault Rifles': [
			'AK-47', 'AK117', 'AKBP', 'AS VAL', 'ASM10',
			'BAL-27', 'BK57', 'BP50', 'CR-56 AMAX', 'DR-H',
			'EM2', 'FFAR 1', 'FR .556', 'Grau 5.56', 'Groza',
			'HBRa3', 'HVK-30', 'ICR-1', 'Kilo 141', 'KN-44',
			'Krig 6', 'Lachmann-556', 'LK24', 'M4', 'M13',
			'M16', 'Maddox', 'Man-O-War', 'Oden',
			'Peacekeeper MK2', 'RAM-7', 'Swordfish',
			'Type 19', 'Type 25', 'XM4'
		],

		'SMGs': [
			'AGR 556', 'CBR4', 'Chicom', 'Cordite', 'CX-9',
			'Fennec', 'GKS', 'HG 40', 'ISO', 'KSP 45',
			'LAPA', 'LC10', 'MAC-10', 'MSMC', 'MX9',
			'OTs 9', 'PDW-57', 'Pharo', 'PP19 Bizon',
			'PPSh-41', 'QQ9', 'QXR', 'Razorback', 'RUS-79U',
			'Sten', 'Striker 45', 'Switchblade X9', 'TEC-9',
			'USS 9', 'VMP'
		],

		'LMGs': [
			'Bruen Mk9', 'Chopper', 'Dingo', 'DP-27',
			'FiNN LMG', 'Hades', 'Holger 26', 'M4LMG',
			'M60', 'M91', 'MG34', 'MG42', 'MG82', 'PKM',
			'RAAL MG', 'RPD', 'S36', 'SA87',
			'Stoner 63', 'UL736'
		],

		'Sniper Rifles': [
			'Arctic .50', 'DL Q33', 'HDR', 'Koshka',
			'Locus', 'LW3-Tundra', 'M21 EBR', 'NA-45',
			'Outlaw', 'Rytec AMR', 'SVD', 'XPR-50',
			'ZRG 20mm', '3-Line Rifle'
		],

		'Marksman Rifles': [
			'Kilo Bolt-Action', 'M1 Garand', 'MK2 Carbine',
			'SKS', 'SO-14', 'SP-R 208', 'Type 63'
		],

		'Shotguns': [
			'Argus', 'BY15', 'Echo', 'Einhorn Revolving',
			'HS0405', 'HS2126', 'JAK-12', 'KRM-262',
			'MX Guardian', 'R9-0', 'Striker', 'VLK Rogue'
		],

		'Pistols': [
			'.50 GS', 'Crossbow', 'Dobvra',
			'J358', 'L-CAR 9', 'Machine Pistol', 'MW11',
			'Nail Gun', 'Renetti', 'Shorty'
		],

		'Launchers': [
			'D13 Sector', 'FHJ-18', 'SMRS', 'Thumper'
		],

		'Melee': [
			'Ballistic Knife', 'Baseball Bat', 'Bowie Knife',
			'Butterfly Knife', 'Combat Knife', 'Enforcer',
			'Ice Axe', 'Kali Sticks', 'Karambit', 'Katana',
			'Knife', 'Machete', 'Nunchucks', 'Prizefighters',
			'Sai', 'Shovel', 'Sickle', 'Spear', 'Spiked Bat',
			'Sword', 'Tonfa', 'Wrench'
		]
	},

	/* ═══════════════════════════════════════
	   GUNSMITH ATTACHMENTS — by slot type
	   Generic pools — the generator picks
	   5 random slot categories per weapon
	   ═══════════════════════════════════════ */
	attachments: {

		'Muzzle': [
			'Tactical Suppressor', 'OWC Light Suppressor',
			'Monolithic Suppressor', 'OWC Light Compensator',
			'MIP Light Flash Guard', 'RTC Light Muzzle Brake',
			'Agency Suppressor', 'Infantry Compensator',
			'OWC Eliminator', 'Breacher Device',
			'MIP Light Muzzle Brake', 'RTC Huge Suppressor'
		],

		'Barrel': [
			'OWC Ranger', 'MIP Light', 'MIP Light Barrel (Short)',
			'OWC Marksman', 'MIP Extended Light Barrel',
			'YKM Integral Suppressor Light', 'RTC CQB',
			'RTC Lightweight', 'RTC Long',
			'Rapid Fire Barrel', 'Taskforce Barrel',
			'Long-Range Barrel', 'Well-Forged Barrel',
			'Built-In Silence Barrel'
		],

		'Optic': [
			'Classic Red Dot Sight', 'Red Dot Sight 1',
			'Red Dot Sight 2', 'Red Dot Sight 3',
			'Red Dot Sight 4', 'Red Dot Sight 5',
			'Classic Holographic Sight', 'Holographic Sight 1',
			'Holographic Sight 2', 'Holographic Sight 3',
			'Tactical Scope', '3X Tactical Scope 1',
			'3X Tactical Scope 2', '3X Tactical Scope 3',
			'4X Tactical Scope', '6X Tactical Scope'
		],

		'Stock': [
			'No Stock', 'YKM Light Stock', 'YKM Combat Stock',
			'MIP Strike Stock', 'RTC Steady Stock',
			'OWC Skeleton Stock', 'Marathon Stock',
			'Agile Stock', 'Light Weight Stock'
		],

		'Perk': [
			'FMJ', 'Sleight of Hand', 'Wounding', 'Full Ammo',
			'Disable', 'Tough', 'Long Shot', 'Melee Master',
			'Fast Switch', 'Bullet Return', 'Wild Hipfire',
			'Double Kill', 'Fast Reload Kill', 'Stealth Kill',
			'Empty Reload', 'Headshot XP', 'Rapid Fire'
		],

		'Laser': [
			'RTC Laser 1mW', 'MIP Laser 5mW',
			'OWC Laser - Tactical', '1mW Steady Aim Laser',
			'5mW Combat Laser', 'Aim Assist Laser'
		],

		'Underbarrel': [
			'Strike Foregrip', 'Merc Foregrip',
			'Operator Foregrip', 'Ranger Foregrip',
			'Tactical Foregrip A', 'Tactical Foregrip B',
			'Bipod', 'Field Agent Foregrip',
			'Infiltrator Foregrip', 'RTC Speed Foregrip',
			'Patrol Foregrip', 'Snatch Foregrip'
		],

		'Ammunition': [
			'Extended Mag A', 'Extended Mag B',
			'Large Extended Mag', 'Fast Reload',
			'Fast Extended Mag', 'Stopping Power Reload',
			'Large Caliber Ammo', 'Double Stack Mag',
			'5.45 Caliber Ammo', 'OTM Mag',
			'High Explosive Ammo', 'Fragment Ammo'
		],

		'Rear Grip': [
			'Stippled Grip Tape', 'Granulated Grip Tape',
			'Rubberized Grip Tape', 'Rustle Grip Tape',
			'Sturdy Grip Tape', 'Firm Grip Tape'
		]
	},

	/* ═══════════════════════════════════════
	   EQUIPMENT
	   ═══════════════════════════════════════ */
	lethal: [
		'Frag Grenade', 'Sticky Grenade', 'Trip Mine',
		'Combat Axe', 'Thermite', 'Molotov Cocktail',
		'Contact Grenade', 'C4', 'Drill Charge',
		'Cluster Grenade'
	],

	tactical: [
		'Flashbang Grenade', 'Smoke Grenade', 'Concussion Grenade',
		'EMP Grenade', 'Trophy System', 'Cryo Bomb',
		'Gas Grenade', 'Heartbeat Sensor', 'Storm Ball',
		'Stim Shot', 'Flash Drone', 'Decoy Grenade',
		'Douser Grenade', 'Echo Grenade', 'Inflatable Decoy',
		'Trip Sensor'
	],

	/* ═══════════════════════════════════════
	   OPERATOR SKILLS
	   ═══════════════════════════════════════ */
	operatorSkills: [
		'Purifier', 'War Machine', 'Death Machine',
		'Tempest', 'Transform Shield', 'Sparrow',
		'Scythe', 'Annihilator', 'Ballistic Shield',
		'Bull Charge', 'Shadow Blade', 'Gravity Spikes',
		'K9 Unit', 'Kinetic Armor', 'Equalizer',
		'TAK-5', 'H.I.V.E.', 'Reactor Core', 'Claw',
		'Ballista EM3', 'Gravity Vortex Gun',
		'Misdirection Device', 'Munitions Box',
		'Havoc', 'Barricade', 'Control Field',
		'Tactical Deploy'
	],

	/* ═══════════════════════════════════════
	   PERKS — by color slot
	   ═══════════════════════════════════════ */
	perks: {
		red: [
			'Lightweight', 'Flak Jacket', 'Fast Recover',
			'Persistence', 'Restock', 'Overclock',
			'Agile', 'Skulker', 'Iron Lungs',
			'Tactician', 'Pinpoint', 'Dauntless',
			'Slide Stabilizers'
		],
		green: [
			'Vulture', 'Toughness', 'Cold-Blooded',
			'Quick Fix', 'Tracker', 'Ghost',
			'Gung-Ho', 'Hard Wired'
		],
		blue: [
			'Hardline', 'Dead Silence', 'Engineer',
			'High Alert', 'Shrapnel', 'Demo Expert',
			'Tactical Mask'
		]
	},

	/* ═══════════════════════════════════════
	   SCORESTREAKS
	   ═══════════════════════════════════════ */
	scorestreaks: [
		'UAV', 'Counter-UAV', 'Shock RC',
		'Hunter Killer Drone', 'Care Package',
		'Predator Missile', 'Sentry Gun',
		'Lightning Strike', 'Orbital Laser',
		'Stealth Chopper', 'Swarm', 'Cluster Strike',
		'Napalm Strike', 'EMP Systems', 'XS1 Goliath',
		'VTOL', 'Advanced UAV', 'Chopper Gunner',
		'Gunship', 'MQ-27 Dragonfire', 'Hawk X3',
		'Guardian', 'Emergency Airdrop', 'Flamenaut',
		'RC-XD', 'Bomb Drone', 'Wheelson',
		'Overload UAV', 'SAM Turret', 'Shield Turret',
		'R.A.P.S.', 'AC-130'
	],

	/* ═══════════════════════════════════════
	   BATTLE ROYALE CLASSES
	   ═══════════════════════════════════════ */
	brClasses: [
		// Disturb
		'Hacker', 'Misdirection', 'Rewind',
		'Shock Wave', 'Smoke Bomber', 'Trap Master', 'Trickster',
		// Stealth
		'Jet Boost', 'Ninja', 'Poltergeist', 'Pumped',
		'Quick Strike', 'Tactical Bouncer', 'Teleporter',
		// Support
		'Kinetic Station', 'Medic', 'Refitter',
		'Revive', 'Tactical Mirror',
		// Defense
		'Defender', 'Desperado', 'Igniter',
		'Spotter', 'Toxic Overload',
		// Tracker
		'Airborne', 'Clown', 'Mechanic',
		'Ravager Launcher', 'Scout'
	]
};
