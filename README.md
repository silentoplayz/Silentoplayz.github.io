# 🎯 CODM Loadout Generator

A modern, feature-rich random loadout generator for **Call of Duty: Mobile**. Generate completely random class setups with intelligent game logic — covering weapons, Gunsmith attachments, equipment, perks, scorestreaks, operator skills, and Battle Royale classes.

🔗 **Live Site:** [silentoplayz.github.io](https://silentoplayz.github.io/)

---

## ✨ Features

### Core Generation
- **Full Random Loadout** — Primary & secondary weapons, Gunsmith attachments, lethal & tactical equipment, 3 perks, scorestreaks, operator skill, and BR class
- **Weighted Attachments** — Realistic 0–5 attachment distribution (not always a full 5-slot build)
- **Game-Accurate Logic** — Launchers & melee have no Gunsmith, snipers skip underbarrel, shotguns skip rear grip, pistols have restricted slots
- **Smart Weapon Roles** — Primary picks from ARs, SMGs, LMGs, snipers, shotguns, and marksman rifles; secondary picks from pistols, launchers, and melee

### 🔒 Lock & Re-roll
- Lock any section of your loadout (weapon, perks, equipment, etc.)
- Hit Generate again — only unlocked sections re-roll
- Perfect for iterating: "I love this primary, give me new perks"

### 📋 History
- Every generated loadout is saved automatically (up to 50)
- Slide-out history drawer with compact loadout summaries
- Click any past loadout to restore it on the main view
- Persists across browser sessions via `localStorage`

### 🚫 Exclusion System
- Filter out any weapons, perks, equipment, or items you don't want
- Collapsible categories with clickable chip toggles
- Red badge shows active exclusion count
- Generator gracefully falls back if an entire category is excluded
- Persists across sessions

### 🎨 Design & UX
- Dark military aesthetic with glassmorphism card effects
- Stagger animations on loadout reveal
- Category-coded weapon badges (color-coded by type)
- Responsive layout — mobile, tablet, and desktop
- Copy-to-clipboard with toast notification

### 📱 Progressive Web App
- Installable to home screen (PWA manifest + service worker)
- Cache-first asset delivery for fast repeat loads
- Works offline once cached

---

## 🛠️ Tech Stack

- **HTML5 / CSS3 / Vanilla JS** — Zero frameworks, zero build step
- **Google Fonts** — Rajdhani (display) + Inter (body)
- **Font Awesome 6** — Icon library via CDN
- **Service Worker** — Cache-first PWA strategy

Total JS payload: ~17KB (down from 1.55MB legacy bundle).

---

## 📊 Game Data

All data reflects **COD Mobile as of 2026**, including:
- **150+ weapons** across 9 categories
- **9 attachment slot types** with per-category restrictions
- **Full perk roster** (Red, Green, Blue slots)
- **All scorestreaks, operator skills, equipment, and BR classes**

Data is maintained in [`js/weapon-data.js`](js/weapon-data.js) as a single source of truth.

---

## 🚀 Running Locally

```bash
# Clone the repo
git clone https://github.com/silentoplayz/Silentoplayz.github.io.git
cd Silentoplayz.github.io

# Serve locally (any static server works)
python3 -m http.server 8080
# Open http://localhost:8080
```

No build step, no dependencies, no `node_modules`. Just open it.

---

## 📜 Credits

Originally based on [CodMRandom.com](http://codmrandom.com/) by **@DaMagicPlays**.

Reimagined, upgraded, and redesigned by **[G30](https://github.com/silentoplayz)** with contributions from **[Andy Nel](https://github.com/andynel)**.

**2026 Revival** — Complete architecture overhaul, modern design system, updated game data, and all new features (lock/re-roll, history, exclusions, weighted attachments, game-accurate logic).

---

## 📄 License

This project is open source. Feel free to fork, remix, and share.
