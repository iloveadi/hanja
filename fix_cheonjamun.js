const fs = require('fs');

// Read the file
let content = fs.readFileSync('c:/@app-dev/web-hanja/cheonjamun_data.js', 'utf8');

// Fix the malformed JSON structure
// The issue is that closing braces are on wrong lines
// Pattern: "translation": "..."\n    ,\n        "index": "...",
// Should be: "translation": "...",\n        "index": "...",

content = content.replace(/"\s*\n\s*,\s*\n\s*"index":/g, '",\n        "index":');

// Write back
fs.writeFileSync('c:/@app-dev/web-hanja/cheonjamun_data.js', content, 'utf8');

console.log('Fixed cheonjamun_data.js syntax errors');
