import * as si from 'react-icons/si';
const keys = Object.keys(si);
console.log("HTML:", keys.filter(k => k.toLowerCase().includes('html')));
console.log("CSS:", keys.filter(k => k.toLowerCase().includes('css')));
console.log("Node:", keys.filter(k => k.toLowerCase().includes('node')));
console.log("Next:", keys.filter(k => k.toLowerCase().includes('next')));
console.log("VSCode:", keys.filter(k => k.toLowerCase().includes('vscode')));
console.log("Visual Studio:", keys.filter(k => k.toLowerCase().includes('visual')));
