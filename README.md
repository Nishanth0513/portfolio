# Portfolio Terminal

A futuristic, interactive portfolio website that starts as a terminal interface and transitions into a sci-fi game world experience. Built with React, featuring smooth animations and a modular architecture.

## Features

### 🖥️ Terminal Interface
- **Authentic Terminal Experience**: Black screen with blinking green cursor
- **Command System**: Type commands like `about`, `projects`, `skills`, `contact`, `start`, `help`, `clear`
- **Tab Autocomplete**: Press Tab to autocomplete commands
- **Smooth Animations**: GSAP-powered transitions and effects

### 🎮 Game World Interface
- **Sci-Fi Design**: Dark, futuristic theme with glowing effects
- **Interactive Map**: Grid of portfolio cards representing different sections
- **Hover Effects**: Cards expand and glow on hover
- **Modal System**: Click cards to open detailed content modals
- **Smooth Transitions**: Seamless transition from terminal to game world

### 🛠️ Technical Features
- **Modular Architecture**: Easy to extend with new commands and sections
- **Responsive Design**: Works on desktop and mobile devices
- **Performance Optimized**: Smooth 60fps animations
- **Accessibility**: Keyboard navigation and screen reader friendly

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio-terminal
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building for Production

```bash
npm run build
```

This builds the app for production to the `build` folder.

## Project Structure

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

## Architecture

This project follows a modern, modular architecture with clear separation of concerns:

### 🏗️ **Modular Design**
- **Components**: Pure UI components with minimal logic
- **Hooks**: Reusable logic and state management
- **Utils**: Pure functions and utilities
- **Data**: Configuration and content management

### 🎯 **Custom Hooks**
- `useTerminalLogic`: Handles all terminal-related state and logic
- `useGameNavigation`: Manages game world navigation and animations
- `useAnimations`: Provides consistent animation utilities

### 📦 **Component Organization**
- **GameWorld**: Split into Map, Card, and Navigation components
- **Terminal**: Simplified with logic moved to custom hook
- **PortfolioModal**: Standalone modal component

### 🚀 **Benefits**
- Easy to test individual components and hooks
- Better code reusability and maintainability
- Clear separation of concerns
- Scalable architecture for future enhancements

For detailed architecture information, see [ARCHITECTURE.md](ARCHITECTURE.md).

## Customization

### Adding New Commands

1. Edit `src/utils/commands.js`:
```javascript
export const commandRegistry = {
  // ... existing commands
  newcommand: {
    description: 'Description of the new command',
    execute: () => [
      '> NEW COMMAND',
      '',
      'Your command output here...',
      ''
    ]
  }
};
```

### Adding New Portfolio Sections

1. Edit `src/data/portfolioData.js`:
```javascript
export const portfolioSections = [
  // ... existing sections
  {
    id: 'newsection',
    title: 'New Section',
    icon: '🆕',
    description: 'Description of the new section.',
    color: '#ff00ff',
    terminalCommand: 'newsection'
  }
];

export const portfolioContent = {
  // ... existing content
  newsection: {
    title: 'New Section Title',
    content: (
      <div>
        <h3>Section Content</h3>
        <p>Your content here...</p>
      </div>
    )
  }
};
```

2. Add the corresponding command in `src/utils/commands.js`

### Styling Customization

The design uses CSS custom properties and can be easily customized by modifying the color variables in `src/index.css`:

```css
:root {
  --primary-color: #00ff00;
  --secondary-color: #00aaff;
  --accent-color: #ff6600;
  --danger-color: #ff0066;
}
```

## Available Commands

- `about` - Learn about the developer
- `projects` - View portfolio projects
- `skills` - See technical skills
- `contact` - Get contact information
- `start` - Enter interactive game world mode
- `help` - Show available commands
- `clear` - Clear terminal output

## Technologies Used

- **React 18** - UI library
- **GSAP** - Animation library
- **CSS3** - Styling with custom properties
- **JavaScript ES6+** - Modern JavaScript features

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Inspired by retro terminal interfaces and sci-fi aesthetics
- Built with modern web technologies for optimal performance
- Designed with accessibility and user experience in mind
