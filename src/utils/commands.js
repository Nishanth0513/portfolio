// Command system for the terminal interface
// This makes it easy to add new commands without modifying the Terminal component

export const commandRegistry = {
  about: {
    description: 'Learn about the developer',
    execute: () => [
      '> ABOUT',
      '',
      'Welcome to the digital realm of G NISHANTH REDDY.',
      'A motivated Information Technology student pursuing B.Tech at',
      'Vasavi College of Engineering with strong skills in full-stack',
      'web development using React and Node.js.',
      '',
      'Currently in 2nd year with GPA: 8.49/10.0, I have gained',
      'practical industry exposure through an internship at Nirvaha,',
      'where I collaborated with a team to implement innovative solutions.',
      '',
      'Type "start" to enter the interactive portfolio experience.',
      'Available commands: about, projects, skills, contact, start, help'
    ]
  },
  projects: {
    description: 'View portfolio projects',
    execute: () => [
      '> PROJECTS',
      '',
      '🚦 EZ-TOLL - Traffic Management System',
      '   Designed to prioritize emergency vehicles and optimize toll calculations',
      '   Implemented Merge Sort and Dijkstra\'s algorithm for efficient routing',
      '   Achieved 15% reduction in vehicle commute times during peak hours',
      '   Technologies: C, Data Structures, Algorithms, Graph Theory',
      '',
      '🌾 FarmFlow - Agricultural Marketplace',
      '   Online marketplace connecting farmers and consumers directly',
      '   Built user-friendly registration for dairy producers',
      '   Integrated secure e-commerce with fair-trade payment systems',
      '   Technologies: JavaScript, MongoDB, Node.js, React',
      '',
      '💻 Nirvaha Internship Projects',
      '   Collaborated with team of 6 to implement innovative solutions',
      '   Developed web applications promoting mental well-being',
      '   Technologies: React, Node.js',
      '',
      'Type "start" to explore projects interactively.'
    ]
  },
  skills: {
    description: 'See technical skills',
    execute: () => [
      '> SKILLS',
      '',
      'Programming Languages:',
      '  • C  • C++  • JavaScript  • HTML',
      '',
      'Frameworks & Libraries:',
      '  • React  • Node.js',
      '',
      'Databases:',
      '  • MongoDB  • SQL',
      '',
      'Core Concepts:',
      '  • Data Structures & Algorithms  • Graph Theory',
      '  • Sorting Algorithms  • Cybersecurity  • Networking',
      '',
      'Type "start" to see skills in action.'
    ]
  },
  contact: {
    description: 'Get contact information',
    execute: () => [
      '> CONTACT',
      '',
      '📧 Email: gnishanthreddy0513@gmail.com',
      '📱 Phone: +91 9392970938',
      '💼 LinkedIn: linkedin.com/in/nishanth-reddy',
      '🐙 GitHub: github.com/nishanthreddy',
      '',
      'Education: Vasavi College of Engineering',
      'Course: B.Tech IT (2nd Year) - GPA: 8.49/10.0',
      'Location: Hyderabad, India',
      'Available for: Internship opportunities',
      '',
      'Type "start" to connect through the interactive interface.'
    ]
  },
  help: {
    description: 'Show available commands',
    execute: () => {
      const commands = Object.entries(commandRegistry)
        .filter(([key]) => key !== 'help')
        .map(([key, value]) => `  ${key.padEnd(10)} - ${value.description}`)
        .join('\n');
      
      return [
        '> HELP',
        '',
        'Available Commands:',
        commands,
        '',
        'Use Tab for autocomplete, Enter to execute commands.'
      ];
    }
  },
  clear: {
    description: 'Clear terminal output',
    execute: () => [],
    isSpecial: true // Special command that doesn't add to output
  },
  start: {
    description: 'Enter interactive mode',
    execute: () => [
      '> STARTING INTERACTIVE MODE...',
      '',
      'Initializing neural interface...',
      'Loading portfolio modules...',
      'Establishing secure connection...',
      '',
      'Welcome to the interactive portfolio experience!',
      'Transitioning to game world interface...'
    ],
    isSpecial: true // Special command that triggers mode change
  }
};

// Helper function to get command suggestions for autocomplete
export const getCommandSuggestions = (input) => {
  const command = input.toLowerCase();
  return Object.keys(commandRegistry).filter(cmd => 
    cmd.startsWith(command) && cmd !== command
  );
};

// Helper function to check if a command exists
export const commandExists = (command) => {
  return commandRegistry.hasOwnProperty(command.toLowerCase());
};

// Helper function to get command info
export const getCommandInfo = (command) => {
  return commandRegistry[command.toLowerCase()];
};
