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
 *
 * Items within each array are sorted alphabetically.
 */

const WEAPON_DATA = {

	/* ═══════════════════════════════════════
	   WEAPONS — organized by category
	   ═══════════════════════════════════════ */
	weapons: {

		'Assault Rifles': [
			'AK-47', 'AK117', 'AS VAL', 'ASM10',
			'BAL-27', 'BK57', 'BP50', 'CR-56 AMAX', 'DR-H',
			'EM2', 'FFAR 1', 'FR .556', 'Grau 5.56', 'Groza',
			'HBRa3', 'HVK-30', 'ICR-1', 'Kilo 141', 'KN-44',
			'Krig 6', 'Lachmann-556', 'LAG 53', 'LK24',
			'M4', 'M13', 'M16', 'Maddox', 'Man-O-War',
			'Oden', 'Peacekeeper MK2', 'RAM-7', 'Swordfish',
			'Type 19', 'Type 25', 'Vargo-S', 'XM4'
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
			'Bruen MK9', 'Chopper', 'Dingo', 'DP27',
			'Hades', 'Holger 26', 'M4LMG', 'MG 82',
			'MG42', 'PKM', 'RAAL MG', 'RPD', 'S36',
			'UL736'
		],

		'Sniper Rifles': [
			'3-Line Rifle', 'Arctic .50', 'DL Q33', 'HDR',
			'Koshka', 'Locus', 'LW3-Tundra', 'M21 EBR',
			'NA-45', 'Outlaw', 'Rytec AMR', 'SVD',
			'XPR-50', 'ZRG 20mm'
		],

		'Marksman Rifles': [
			'Kilo Bolt-Action', 'M1 Garand', 'MK2',
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
			'Assault Knife', 'Axe', 'Ballistic Knife',
			'Baseball Bat', 'Butterfly Knife', 'Combat Knife',
			'Enforcer', 'Ice Axe', 'Kali Sticks', 'Karambit',
			'Katana', 'Knife', 'Machete', 'Nunchucks',
			'Prizefighters', 'Sai', 'Scythe', 'Shovel',
			'Sickle', 'Sledgehammer', 'Spear', 'Spiked Bat',
			'Sword', 'Wrench'
		]
	},

	/* ═══════════════════════════════════════
	   GUNSMITH ATTACHMENTS — by slot type
	   Generic pools — the generator picks
	   5 random slot categories per weapon
	   ═══════════════════════════════════════ */
	attachments: {

		'Muzzle': [
			'Agency Suppressor', 'Breacher Device',
			'Infantry Compensator', 'MIP Light Flash Guard',
			'MIP Light Muzzle Brake', 'Monolithic Suppressor',
			'OWC Eliminator', 'OWC Light Compensator',
			'OWC Light Suppressor', 'RTC Huge Suppressor',
			'RTC Light Muzzle Brake', 'Tactical Suppressor'
		],

		'Barrel': [
			'Built-In Silence Barrel', 'Long-Range Barrel',
			'MIP Extended Light Barrel', 'MIP Light',
			'MIP Light Barrel (Short)', 'OWC Marksman',
			'OWC Ranger', 'Rapid Fire Barrel', 'RTC CQB',
			'RTC Lightweight', 'RTC Long',
			'Taskforce Barrel', 'Well-Forged Barrel',
			'YKM Integral Suppressor Light'
		],

		'Optic': [
			'3X Tactical Scope 1', '3X Tactical Scope 2',
			'3X Tactical Scope 3', '4X Tactical Scope',
			'6X Tactical Scope', 'Classic Holographic Sight',
			'Classic Red Dot Sight', 'Holographic Sight 1',
			'Holographic Sight 2', 'Holographic Sight 3',
			'Red Dot Sight 1', 'Red Dot Sight 2',
			'Red Dot Sight 3', 'Red Dot Sight 4',
			'Red Dot Sight 5', 'Tactical Scope'
		],

		'Stock': [
			'Agile Stock', 'Light Weight Stock',
			'Marathon Stock', 'MIP Strike Stock',
			'No Stock', 'OWC Skeleton Stock',
			'RTC Steady Stock', 'YKM Combat Stock',
			'YKM Light Stock'
		],

		'Perk': [
			'Bullet Return', 'Disable', 'Double Kill',
			'Empty Reload', 'Fast Reload Kill', 'Fast Switch',
			'FMJ', 'Full Ammo', 'Headshot XP', 'Long Shot',
			'Melee Master', 'Rapid Fire', 'Sleight of Hand',
			'Stealth Kill', 'Tough', 'Wild Hipfire', 'Wounding'
		],

		'Laser': [
			'1mW Steady Aim Laser', '5mW Combat Laser',
			'Aim Assist Laser', 'MIP Laser 5mW',
			'OWC Laser - Tactical', 'RTC Laser 1mW'
		],

		'Underbarrel': [
			'Bipod', 'Field Agent Foregrip',
			'Infiltrator Foregrip', 'Merc Foregrip',
			'Operator Foregrip', 'Patrol Foregrip',
			'Ranger Foregrip', 'RTC Speed Foregrip',
			'Snatch Foregrip', 'Strike Foregrip',
			'Tactical Foregrip A', 'Tactical Foregrip B'
		],

		'Ammunition': [
			'5.45 Caliber Ammo', 'Double Stack Mag',
			'Extended Mag A', 'Extended Mag B',
			'Fast Extended Mag', 'Fast Reload',
			'Fragment Ammo', 'High Explosive Ammo',
			'Large Caliber Ammo', 'Large Extended Mag',
			'OTM Mag', 'Stopping Power Reload'
		],

		'Rear Grip': [
			'Firm Grip Tape', 'Granulated Grip Tape',
			'Rubberized Grip Tape', 'Rustle Grip Tape',
			'Stippled Grip Tape', 'Sturdy Grip Tape'
		]
	},

	/* ═══════════════════════════════════════
	   EQUIPMENT
	   ═══════════════════════════════════════ */
	lethal: [
		'C4', 'Cluster Grenade', 'Combat Axe',
		'Contact Grenade', 'Drill Charge', 'Frag Grenade',
		'Molotov Cocktail', 'Sticky Grenade', 'Thermite',
		'Trip Mine'
	],

	tactical: [
		'Concussion Grenade', 'Cryo Bomb', 'Decoy Grenade',
		'Douser Grenade', 'Echo Grenade', 'EMP',
		'Flash Drone', 'Flash Strike', 'Flashbang Grenade',
		'Gas Grenade', 'Heartbeat Sensor', 'Inflatable Decoy',
		'Smoke Grenade', 'Stim Shot', 'Storm Ball',
		'Trip Sensor', 'Trophy System'
	],

	/* ═══════════════════════════════════════
	   OPERATOR SKILLS
	   ═══════════════════════════════════════ */
	operatorSkills: [
		'Annihilator', 'Ballista EM3', 'Ballistic Shield',
		'Bull Charge', 'Claw', 'Control Field',
		'Death Machine', 'Equalizer', 'Gravity Spikes',
		'Gravity Vortex Gun', 'H.I.V.E.', 'Havoc',
		'K9 Unit', 'Kinetic Armor', 'Misdirection Device',
		'Munitions Box', 'Purifier', 'Reactor Core',
		'Shadow Blade', 'Sparrow', 'Tac-Deploy',
		'TAK-5', 'Tempest', 'Transform Shield',
		'War Machine'
	],

	/* ═══════════════════════════════════════
	   PERKS — by color slot
	   ═══════════════════════════════════════ */
	perks: {
		red: [
			'Agile', 'Dauntless', 'Fast Recover',
			'Flak Jacket', 'Iron Lungs', 'Lightweight',
			'Martyrdom', 'Overclock', 'Pin Point',
			'Restock', 'Skulker', 'Slide Stabilizers',
			'Tactician'
		],
		green: [
			'Amped', 'Cold-Blooded', 'Ghost',
			'Gung-Ho', 'Hard Wired', 'Quick Fix',
			'Recon', 'Serpentine', 'Spycraft',
			'Toughness', 'Tracker', 'Vulture'
		],
		blue: [
			'Alert', 'Assassin', 'Dead Silence',
			'Demo Expert', 'Engineer', 'Firepower Support',
			'Hardline', 'High Alert', 'Persistence',
			'Shrapnel', 'Survival Training', 'Tactical Mask',
			'Unit Support'
		]
	},

	/* ═══════════════════════════════════════
	   SCORESTREAKS
	   ═══════════════════════════════════════ */
	scorestreaks: [
		'AC-130', 'Advanced UAV', 'Bomb Drone',
		'Care Package', 'Chopper Gunner', 'Cluster Strike',
		'Counter-UAV', 'Emergency Airdrop', 'EMP Systems',
		'Flamenaut', 'Guardian', 'Gunship',
		'Hawk X3', 'Hunter Killer Drone', 'Lightning Strike',
		'MQ-27 Dragonfire', 'Napalm Strike', 'Orbital Laser',
		'Overload UAV', 'Predator Missile', 'R.A.P.S.',
		'RC-XD', 'SAM Turret', 'Sentry Gun',
		'Shield Turret', 'Shock RC', 'Stealth Chopper',
		'Strafe Run', 'Swarm', 'UAV',
		'VTOL', 'Wheelson', 'Wheelson-HS',
		'XS1 Goliath'
	],

	/* ═══════════════════════════════════════
	   BATTLE ROYALE CLASSES
	   ═══════════════════════════════════════ */
	brClasses: [
		'Airborne', 'Clown', 'Defender',
		'Desperado', 'Hacker', 'Igniter',
		'Jet Boost', 'Kinetic Station', 'Mechanic',
		'Medic', 'Misdirection', 'Ninja',
		'Poltergeist', 'Pumped', 'Quick Strike',
		'Ravager Launcher', 'Refitter', 'Revive',
		'Rewind', 'Scout', 'Shock Wave',
		'Smoke Bomber', 'Spotter', 'Tactical Bouncer',
		'Tactical Mirror', 'Teleporter', 'Toxic Overload',
		'Trap Master', 'Trickster'
	]
};
