import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { getCommandSuggestions, commandExists, getCommandInfo } from '../utils/commands';
import { config } from '../data/portfolioData';

export const useTerminalLogic = (visible, onModeChange, onCommand) => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState([]);
  const inputRef = useRef(null);
  const terminalRef = useRef(null);
  const outputRef = useRef(null);

  useEffect(() => {
    if (visible) {
      gsap.fromTo(terminalRef.current, 
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
      );
      
      // Initial welcome message
      setOutput(config.terminal.welcomeMessage);
    }
  }, [visible]);

  useEffect(() => {
    if (visible && inputRef.current) {
      inputRef.current.focus();
    }
  }, [visible]);

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [output]);

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      executeCommand(input.trim().toLowerCase());
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const command = input.toLowerCase();
      const matches = getCommandSuggestions(command);
      if (matches.length === 1) {
        setInput(matches[0]);
      }
    }
  };

  const executeCommand = (command) => {
    if (!command) {
      setOutput(prev => [...prev, '> ']);
      return;
    }

    onCommand(command);
    setOutput(prev => [...prev, `> ${command}`]);

    if (commandExists(command)) {
      const commandInfo = getCommandInfo(command);
      
      // Handle special commands
      if (command === 'start') {
        setTimeout(() => {
          onModeChange('game');
        }, 1000);
      } else if (command === 'clear') {
        setOutput([]);
        return;
      }
      
      // Execute regular commands
      const result = commandInfo.execute();
      if (result.length > 0) {
        setOutput(prev => [...prev, ...result, '']);
      }
    } else {
      setOutput(prev => [...prev, 
        `Command not found: ${command}`,
        'Type "help" for available commands.',
        ''
      ]);
    }

    setInput('');
  };

  return {
    input,
    setInput,
    output,
    inputRef,
    terminalRef,
    outputRef,
    handleKeyPress
  };
};
