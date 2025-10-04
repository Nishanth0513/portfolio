# Portfolio Architecture

This document outlines the improved folder structure and architecture of the Portfolio Terminal project.

## 📁 Folder Structure

```
src/
├── components/
│   ├── GameWorld/
│   │   ├── Map.js           # Game world map component
│   │   ├── Card.js          # Individual portfolio card
│   │   ├── Navigation.js    # Game world navigation
│   │   └── index.js         # GameWorld exports
│   ├── Terminal.js          # Terminal interface component
│   ├── PortfolioModal.js    # Modal component for detailed content
│   └── index.js             # Components exports
├── hooks/
│   ├── useTerminalLogic.js  # Terminal logic and state management
│   ├── useGameNavigation.js # Game world navigation logic
│   ├── useAnimations.js     # Animation utilities
│   └── index.js             # Hooks exports
├── data/
│   └── portfolioData.js     # Portfolio content and configuration
├── utils/
│   ├── commands.js          # Command system and registry
│   └── animations.js        # Animation utilities and presets
├── App.js                   # Main application component
└── index.js                 # Application entry point

src/styles/
├── global.css               # Global styles and CSS variables
├── app.css                  # Application-specific styles
└── index.js                 # Styles imports
```

## 🏗️ Architecture Benefits

### 1. **Separation of Concerns**
- **Components**: Pure UI components with minimal logic
- **Hooks**: Reusable logic and state management
- **Utils**: Pure functions and utilities
- **Data**: Configuration and content management

### 2. **Custom Hooks**
- `useTerminalLogic`: Handles all terminal-related state and logic
- `useGameNavigation`: Manages game world navigation and animations
- `useAnimations`: Provides consistent animation utilities

### 3. **Modular Components**
- **GameWorld**: Split into Map, Card, and Navigation components
- **Terminal**: Simplified with logic moved to custom hook
- **PortfolioModal**: Standalone modal component

### 4. **Centralized Exports**
- Each folder has an `index.js` for clean imports
- Easy to add new components/hooks without changing imports
- Better tree-shaking and bundle optimization

## 🔧 Usage Examples

### Importing Components
```javascript
// Before
import Terminal from './components/Terminal';
import GameWorld from './components/GameWorld';

// After
import { Terminal, GameWorld } from './components';
```

### Using Custom Hooks
```javascript
// Terminal component
const { input, setInput, handleKeyPress } = useTerminalLogic(visible, onModeChange, onCommand);

// GameWorld component
const { activeModal, handleCardClick } = useGameNavigation(visible);
```

### Adding New Components
```javascript
// Add to components/GameWorld/
// components/GameWorld/NewComponent.js
export default NewComponent;

// Update components/GameWorld/index.js
export { default as NewComponent } from './NewComponent';

// Use anywhere
import { NewComponent } from './components';
```

## 🚀 Future Enhancements

### Easy to Add:
1. **New GameWorld Components**: Add to `components/GameWorld/`
2. **New Hooks**: Add to `hooks/` folder
3. **New Styles**: Add to `styles/` folder
4. **New Commands**: Add to `utils/commands.js`
5. **New Portfolio Sections**: Add to `data/portfolioData.js`

### Scalability:
- Each component is focused and testable
- Hooks can be reused across components
- Easy to add new features without breaking existing code
- Clear separation makes debugging easier

## 📝 Best Practices

1. **Keep components pure**: Move logic to custom hooks
2. **Use index files**: For clean imports and better organization
3. **Consistent naming**: Follow the established patterns
4. **Documentation**: Add JSDoc comments for complex functions
5. **Testing**: Each hook and component can be tested independently
