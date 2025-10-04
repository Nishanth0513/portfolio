import React, { useState } from 'react';
import { Terminal, GameWorld } from './components';
import './styles/app.css';

function App() {
  const [currentMode, setCurrentMode] = useState('terminal');
  const [terminalHistory, setTerminalHistory] = useState([]);

  const handleModeChange = (mode) => {
    setCurrentMode(mode);
  };

  const handleCommand = (command) => {
    setTerminalHistory(prev => [...prev, command]);
  };

  return (
    <div className="App">
      <Terminal 
        visible={currentMode === 'terminal'}
        onModeChange={handleModeChange}
        onCommand={handleCommand}
        history={terminalHistory}
      />
      <GameWorld 
        visible={currentMode === 'game'}
        onModeChange={handleModeChange}
      />
    </div>
  );
}

export default App;
