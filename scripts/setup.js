#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🚀 Setting up Portfolio Terminal...\n');

// Check if node_modules exists
const nodeModulesPath = path.join(__dirname, '..', 'node_modules');
if (!fs.existsSync(nodeModulesPath)) {
  console.log('📦 Installing dependencies...');
  const { execSync } = require('child_process');
  execSync('npm install', { stdio: 'inherit' });
  console.log('✅ Dependencies installed!\n');
}

console.log('🎯 Portfolio Terminal Setup Complete!');
console.log('\nNext steps:');
console.log('1. Run "npm start" to start the development server');
console.log('2. Open http://localhost:3000 in your browser');
console.log('3. Type "help" in the terminal to see available commands');
console.log('4. Type "start" to enter the interactive game world');
console.log('\nHappy coding! 🎉');
