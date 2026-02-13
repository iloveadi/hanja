const fs = require('fs');

// Read the file
const content = fs.readFileSync('c:/@app-dev/web-hanja/saja_sohak_data.js', 'utf8');

// Extract unique sections
const sections = content.match(/"section":\s*"([^"]+)"/g);
const unique = [...new Set(sections)].map(s => s.match(/"section":\s*"([^"]+)"/)[1]);

console.log('Found sections:');
unique.forEach((s, i) => console.log(`${i + 1}. ${s}`));
console.log(`\nTotal: ${unique.length} sections`);
