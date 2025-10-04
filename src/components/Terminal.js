import React from 'react';
import { config } from '../data/portfolioData';
import { useTerminalLogic } from '../hooks/useTerminalLogic';

const Terminal = ({ visible, onModeChange, onCommand, history }) => {
  const {
    input,
    setInput,
    output,
    inputRef,
    terminalRef,
    outputRef,
    handleKeyPress
  } = useTerminalLogic(visible, onModeChange, onCommand);

  if (!visible) return null;

  return (
    <div ref={terminalRef} className="terminal">
      <div className="terminal-header">
        <div className="terminal-title">{config.terminal.title}</div>
        <div className="terminal-subtitle">{config.terminal.subtitle}</div>
      </div>
      
      <div ref={outputRef} className="terminal-output">
        {output.map((line, index) => (
          <div key={index} className="terminal-line">
            {line}
          </div>
        ))}
      </div>
      
      <div className="terminal-input-line">
        <span className="terminal-prompt">{config.terminal.prompt}</span>
        <input
          ref={inputRef}
          type="text"
          className="terminal-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          autoFocus
        />
        <span className="cursor"></span>
      </div>
    </div>
  );
};

export default Terminal;
