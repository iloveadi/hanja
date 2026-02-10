const fs = require('fs');
const content = fs.readFileSync('c:/project/hanja/hanja_data.js', 'utf8');
const matches = content.match(/kanji:\s*'(.+?)'/g);
if (!matches) {
    console.log('No characters found');
    process.exit(0);
}
const chars = matches.map(m => m.match(/'(.+?)'/)[1]);
console.log('Total characters found:', chars.length);
const counts = {};
chars.forEach(c => counts[c] = (counts[c] || 0) + 1);
const duplicates = Object.keys(counts).filter(c => counts[c] > 1);
if (duplicates.length > 0) {
    console.log('Duplicates found:', duplicates.map(d => `${d} (${counts[d]})`).join(', '));
} else {
    console.log('No duplicates found');
}
