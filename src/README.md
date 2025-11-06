# 🎮 Merge Battle — Neon Glow UI

**Complete Mobile Game Design System & Interactive Prototype**

A production-ready mobile game UI for "Merge Battle" — a neon-glow merge puzzle game inspired by 2048 with PvP and solo modes.

---

## ✨ Features

### 🎨 Complete Design System
- **Neon glow aesthetic** with 6-color accent palette
- **60+ CSS tokens** for colors, spacing, typography, animations
- **Responsive design** optimized for mobile (1080×1920 reference)
- **Alternative theme** (Classic minimal) for accessibility
- **10+ reusable components** with full TypeScript support

### 📱 12 Complete Screens
1. **Splash Screen** — Animated logo with neon underline
2. **Onboarding** — 3-slide tutorial with swipe navigation (first-time only)
3. **Main Menu** — Animated buttons with gradient effects + daily rewards & challenges banners
4. **Game Screen** — Full 2048-style gameplay with swipe controls
5. **PvP Lobby** — Matchmaking and ready-up system
6. **Leaderboard** — Global/Friends/Weekly tabs with rank badges
7. **Shop** — 12 theme designs, powerups, and bundles with tabbed navigation
8. **Settings** — Audio, theme, accessibility, data/privacy, and help sections
9. **Profile** — Stats, achievements, XP progression, theme switcher & profile editing
10. **Challenges** — Daily challenges with progress tracking and coin rewards
11. **Statistics** — Detailed analytics with charts (Recharts) showing performance trends
12. **Tutorial** — Interactive overlay explaining game mechanics

### 🎯 Game Features
- **Configurable grids**: 4×4, 5×5, 6×6, 7×7, 8×8, 9×9, 10×10
- **Extreme tile range**: Blocks from 2 to 2^100 (≈ 1.27e30) with 100 unique values
- **Smart number formatting**: Exponential notation and K/M/B/T/P/E/Z/Y suffixes for large numbers
- **Touch controls**: Swipe to merge tiles
- **Keyboard support**: Arrow keys for desktop testing
- **Win/Lose modals**: Animated results with share/replay
- **Pause system**: Resume, restart, or quit
- **Timed mode**: Optional countdown timer
- **Score tracking**: Real-time score updates with animations

### 🎁 Engagement Features
- **Daily Rewards System**: 7-day login streak with progressive rewards
- **Daily Challenges**: 6 active challenges with coin rewards and progress tracking
- **Achievement System**: Unlockable achievements with toast notifications
- **12 Tile Block Sets**: Customizable tile visual styles (Neon Classic, Fire Blaze, Ice Frost, Toxic Slime, Royal Gold, Bubblegum Pop, Deep Ocean, Sunset Blaze, Electric Purple, Matrix Code, Cosmic Space, Ruby Blood) — each with 100 unique tile colors
- **12 Game Backgrounds**: Themed backgrounds (Dark Void, Cyber Grid, Neon City, Purple Haze, Fire Storm, Ocean Depths, Toxic Waste, Galaxy Stars, Sunset Sky, Arctic Ice, Cherry Blossom, Emerald Forest)
- **12 UI Themes**: Full theme shop with visual previews (Neon Cyber, Classic, Ocean Blue, Sunset, etc.)
- **Profile Customization**: Editable username, 10 avatar options, active tile blocks/backgrounds manager
- **Statistics Dashboard**: Performance analytics with line/bar charts showing win rates, scores, tile progress
- **Tutorial System**: Interactive 4-step tutorial for new players
- **Onboarding Flow**: First-time user experience with skip option

### 🎬 Animations & Effects
- **Tile merge** animations with glow intensification
- **Particle effects** on high-value merges
- **Smooth transitions** between screens (slide left/right)
- **Pulsing board borders** that react to gameplay
- **Floating ambient orbs** in background
- **Spring-based** micro-interactions (Motion/Framer Motion)

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- Modern browser with ES6+ support

### Installation
```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

### Project Structure
```
/
├── App.tsx                    # Main app router
├── components/
│   ├── GameTile.tsx          # Animated game tile component
│   ├── NeonButton.tsx        # Primary button component (3 variants)
│   ├── IconButton.tsx        # Icon-based button (3 sizes, 3 variants)
│   ├── NeonModal.tsx         # Popup modal with glow effects
│   ├── TopBar.tsx            # Game top bar (score/target/timer)
│   ├── CoinBadge.tsx         # Coin display component
│   └── screens/
│       ├── SplashScreen.tsx
│       ├── Onboarding.tsx
│       ├── MainMenu.tsx
│       ├── GameScreen.tsx
│       ├── PvPLobby.tsx
│       ├── Leaderboard.tsx
│       ├── Shop.tsx
│       ├── Settings.tsx
│       └── Profile.tsx
├── styles/
│   └── globals.css           # Design system tokens & utilities
├── DESIGN_SYSTEM.md          # Complete design documentation
└── COMPONENT_REFERENCE.md    # Component usage guide
```

---

## 🎨 Design System

### Color Palette
```css
/* Neon Accents */
--neon-cyan:    #00FFFF  /* Primary */
--neon-magenta: #FF00FF  /* Secondary */
--neon-purple:  #A100FF  /* Tertiary */
--neon-orange:  #FF6A00  /* Warning */
--neon-lime:    #00FF99  /* Success */
--neon-yellow:  #FFD700  /* Rewards */

/* Backgrounds */
--bg-primary:   #0B0F19  /* Dark graphite */
--bg-secondary: #1A1A1A  /* Darker variant */
```

### Typography
- **Headings:** Bold (700), 24px–48px
- **Body:** Regular (400), 16px
- **Labels:** Medium (500), 16px
- **Numbers:** Bold (700), responsive sizing

### Border Radius
- **Tiles:** 20px
- **Buttons:** 18px
- **Cards:** 16px
- **Modals:** 22px

### Glow Effects
Applied via utility classes:
```tsx
<div className="glow-cyan">Cyan glow</div>
<div className="glow-magenta">Magenta glow</div>
<div className="text-glow-purple">Text with glow</div>
```

---

## 🧩 Component Examples

### Game Tile
```tsx
import { GameTile } from "./components/GameTile";

<GameTile
  value={2048}
  isMerging={true}
  onClick={() => console.log("Tile clicked")}
/>
```

### Neon Button
```tsx
import { NeonButton } from "./components/NeonButton";

<NeonButton variant="primary" onClick={handlePlay}>
  PLAY
</NeonButton>
```

### Modal
```tsx
import { NeonModal } from "./components/NeonModal";

<NeonModal
  isOpen={showModal}
  onClose={() => setShowModal(false)}
  title="Paused"
  glowColor="cyan"
>
  <NeonButton onClick={resume}>Resume</NeonButton>
</NeonModal>
```

---

## 🎮 Game Controls

### Mobile/Touch
- **Swipe Up/Down/Left/Right** to merge tiles
- **Tap tiles** for selection (optional)
- **Pinch to zoom** (future enhancement)

### Desktop/Testing
- **Arrow Keys** (←↑→↓) to move tiles
- **Escape** to pause (future enhancement)
- **R** to restart (future enhancement)

---

## 📐 Grid Configurations

The game supports multiple grid sizes:

| Size | Difficulty | Tile Size | Target |
|------|-----------|-----------|--------|
| 4×4  | Beginner  | Large     | 2048   |
| 5×5  | Intermediate | Medium | 2048   |
| 6×6  | Advanced  | Medium    | 4096   |
| 8×8  | Expert    | Small     | 8192   |
| 10×10| Master    | Tiny      | 16384  |

**Usage:**
```tsx
<GameScreen gridSize={6} targetTile={4096} />
```

---

## 🎬 Screen Flow

### Primary User Journey
```
Splash (2.5s)
  ↓
Main Menu
  ├─→ Play → Game Screen → Win/Lose Modal
  ├─→ PvP → PvP Lobby → Game Screen
  ├─→ Leaderboard
  ├─→ Shop → Purchase Modal
  ├─→ Settings
  └─→ Profile
```

### Transition Animations
- **Slide Left:** Forward navigation (Menu → Game)
- **Slide Right:** Back navigation (Game → Menu)
- **Fade:** Modals and overlays
- **Spring:** All interactive elements

---

## 🎯 Tile Color Mapping

| Value | Color | Text | Glow |
|-------|-------|------|------|
| 2     | Cyan (#00FFFF) | Dark | cyan |
| 4     | Lime (#00FF99) | Dark | lime |
| 8     | Yellow (#FFD700) | Dark | yellow |
| 16    | Orange (#FF6A00) | White | orange |
| 32    | Magenta (#FF00FF) | White | magenta |
| 64    | Purple (#A100FF) | White | purple |
| 128   | Gradient Cyan→Lime | Dark | cyan |
| 256   | Gradient Yellow→Orange | White | yellow |
| 512   | Gradient Magenta→Purple | White | magenta |
| 1024  | Triple gradient | White | intense |
| 2048+ | Rainbow gradient | White | intense |

---

## ♿ Accessibility

### WCAG Compliance
- **Color contrast:** All text meets AA standard (4.5:1 minimum)
- **Keyboard navigation:** Full support (future enhancement)
- **Screen reader:** ARIA labels (future enhancement)
- **Reduced motion:** Respects `prefers-reduced-motion` (future enhancement)

### Alternative Theme
**Classic Mode** (toggle in Settings):
- Flat pastel colors (no glow)
- Higher contrast borders
- Reduced animation intensity
- Better battery life

---

## 📦 Export Guidelines

### For Developers

#### Asset Export
```bash
/assets
  /icons/          # SVG format
  /tiles/          # PNG 1024×1024, transparent
  /backgrounds/    # PNG 1920×1080
```

#### Tile Naming Convention
```
tile_2_00FFFF.png
tile_4_00FF99.png
tile_8_FFD700.png
...
tile_2048_gradient.png
```

#### Component Naming (BEM-style)
- `btn/primary/glow`
- `tile/1024/purple/glow`
- `screen/game/4x4`

---

## 🔧 Customization

### Change Theme Colors
Edit `/styles/globals.css`:
```css
:root {
  --neon-cyan: #YOUR_COLOR;
  --neon-magenta: #YOUR_COLOR;
  /* etc. */
}
```

### Add New Grid Size
```tsx
<GameScreen gridSize={12} targetTile={32768} />
```

### Customize Animations
Adjust duration/easing in components:
```tsx
transition={{
  type: "spring",
  stiffness: 300,  // Adjust stiffness
  damping: 30,     // Adjust damping
}}
```

---

## 🚀 Performance

### Optimizations Implemented
- ✅ Component-based architecture (isolated re-renders)
- ✅ AnimatePresence for exit animations
- ✅ CSS variables for theme switching
- ✅ Lazy-loaded screens (conditional rendering)
- ✅ Debounced swipe detection
- ✅ GPU-accelerated transforms

### Future Enhancements
- [ ] Virtual scrolling for leaderboards
- [ ] Image lazy loading
- [ ] Service worker for offline play
- [ ] WebGL effects for high-end devices

---

## 📱 Responsive Design

### Mobile-First (Primary)
- **Target:** 360×640 to 1440×3200
- **Design reference:** 1080×1920 (9:16)
- **Grid:** Scales dynamically (`90vw / gridSize`)
- **Touch targets:** Minimum 44×44px

### Tablet Support (Future)
- Side-by-side PvP boards
- Larger grid sizes (8×8, 10×10)
- Landscape mode optimization

---

## 🎨 Technologies Used

- **React 18** — Component framework
- **TypeScript** — Type safety
- **Tailwind CSS v4** — Utility-first styling
- **Motion (Framer Motion)** — Animation library
- **Lucide React** — Icon library
- **ShadCN UI** — Base component library

---

## 📚 Documentation

### Comprehensive Guides
- **[DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md)** — Complete design tokens, colors, animations
- **[COMPONENT_REFERENCE.md](./COMPONENT_REFERENCE.md)** — Component API and usage
- **[/components/](./components/)** — Inline TypeScript docs

### Key Sections
1. **Design Tokens** — All CSS variables
2. **Component Props** — TypeScript interfaces
3. **Animation Specs** — Duration, easing, keyframes
4. **Color Mapping** — Tile values → colors
5. **Grid Configs** — Size options and targets
6. **Screen Flows** — User journey maps

---

## 🎯 Production Checklist

### Design ✅
- [x] All 9 screens designed
- [x] 10+ reusable components
- [x] Design system tokens
- [x] Alternative theme
- [x] Accessibility review

### Code ✅
- [x] TypeScript types
- [x] Responsive layout
- [x] Animations implemented
- [x] Touch/swipe controls
- [x] Keyboard controls
- [x] Screen transitions

### Assets ✅
- [x] Color system documented
- [x] Export guidelines
- [x] Component naming conventions
- [x] Developer handoff docs

### Testing 🔄
- [ ] Cross-browser testing
- [ ] Touch device testing
- [ ] Performance profiling
- [ ] Accessibility audit

---

## 🎮 Game Mechanics

### Core Loop
1. Start with two tiles (2 or 4)
2. Swipe to merge identical tiles
3. Each merge doubles the value
4. New tile spawns after each move
5. Reach target tile to win
6. No valid moves = lose

### Scoring
- **Base points:** Sum of merged values
- **Combo bonus:** Future enhancement
- **Time bonus:** Timed mode only

### Power-ups (Shop)
- **Undo:** Reverse last move
- **Hint:** Show best move
- **Bomb:** Clear random tiles

---

## 🏆 PvP Mode

### Matchmaking Flow
1. Enter PvP Lobby
2. Search for opponent (2s animation)
3. Opponent found → Show profiles
4. Both players ready up
5. 10-second countdown
6. Game starts (same starting grid)

### Win Conditions
- Reach target tile first
- Higher score when time expires
- Opponent disconnects/surrenders

---

## 📊 Leaderboard System

### Tabs
- **Global:** All-time top players
- **Friends:** Connected players only
- **Weekly:** Reset every Monday

### Rank Badges
- 🏆 **1st:** Gold trophy + special glow
- 🥈 **2nd:** Silver medal
- 🥉 **3rd:** Bronze medal
- 🏅 **4-10:** Standard badge

---

## 🛍️ Shop Items

### Categories
1. **Skins** — Visual themes
2. **Powerups** — Gameplay boosts
3. **Bundles** — Value packs

### Currency
- **Coins (💰):** Earned through gameplay
- **Premium gems (💎):** Future IAP integration

---

## 🎤 Audio System (Future)

### Sound Effects
- Tile spawn
- Tile merge
- Big merge (512+)
- Win fanfare
- Lose sound
- Button clicks

### Music
- Menu ambient loop
- Gameplay focus music
- Victory theme

---

## 🔐 Security & Privacy

### Data Storage
- **Local storage:** High scores, settings
- **No PII collection:** Privacy-first design
- **Optional analytics:** Future integration

### Best Practices
- No sensitive data in localStorage
- HTTPS required for production
- CSP headers recommended

---

## 🚢 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Platforms
- **Web:** Vercel, Netlify, CloudFlare Pages
- **Mobile (Web):** PWA configuration
- **Native:** React Native refactor (future)

### Environment Variables
```env
VITE_APP_VERSION=1.0.0
VITE_API_URL=https://api.mergebattle.com
```

---

## 🤝 Contributing

### Code Style
- **TypeScript:** Strict mode enabled
- **Components:** Functional + hooks
- **Naming:** PascalCase for components, camelCase for functions
- **Comments:** JSDoc for public APIs

### Git Workflow
```bash
# Feature branch
git checkout -b feature/new-powerup

# Commit with conventional commits
git commit -m "feat: add bomb powerup to shop"

# Pull request to main
```

---

## 📄 License

This project is a design prototype for demonstration purposes.

---

## 🎉 Credits

**Design System:** Complete neon-glow UI system  
**Components:** 10+ production-ready React components  
**Screens:** 9 fully interactive screens  
**Animations:** Motion (Framer Motion) powered  
**Icons:** Lucide React  
**UI Base:** ShadCN UI  

---

## 📞 Support

For questions about implementation:
- 📖 Read [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md)
- 📚 Check [COMPONENT_REFERENCE.md](./COMPONENT_REFERENCE.md)
- 💻 Review inline TypeScript docs

---

## 🗺️ Roadmap

### v1.1 (Future)
- [ ] Sound effects and music
- [ ] Haptic feedback (mobile)
- [ ] Social sharing integration
- [ ] Daily challenges
- [ ] Friend system

### v2.0 (Future)
- [ ] Real-time PvP (WebSockets)
- [ ] Tournament mode
- [ ] Replay system
- [ ] Advanced statistics
- [ ] Customizable avatars

---

**Version:** 1.0.0  
**Last Updated:** October 22, 2025  
**Status:** Production-Ready Prototype ✅

---

## 🎮 Play Now!

Start the development server and begin playing:
```bash
npm run dev
```

Then open `http://localhost:5173` in your browser.

**Enjoy the neon glow! ✨🎮⚡**
