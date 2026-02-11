const fs = require('fs');

// Read existing data
const content = fs.readFileSync('c:/@app-dev/web-hanja/hanja_data.js', 'utf8');
const match = content.match(/const hanjaData = \[([\s\S]*)\];/);
if (!match) { console.error("Data not found"); process.exit(1); }
const hanjaData = eval(match[0].replace('const hanjaData = ', ''));

// Logic: Middle School 900 is roughly Level 8 to 4.
// But levels in this file (likely Eomunhoe) are: 8(161), 7(642), 6(229)...
// Level 8 + 7 = 803. This is the core.
// We need 900 total. So we need 97 more.
// We will take them from Level 6, prioritizing simple ones (low stroke count).

// 1. Separate by level
const level8 = hanjaData.filter(h => h.level == 8);
const level7 = hanjaData.filter(h => h.level == 7);
const level6 = hanjaData.filter(h => h.level == 6);

// 2. Select characters
let selected = [...level8, ...level7];
const needed = 900 - selected.length;

if (needed > 0 && level6.length > 0) {
    // Sort Level 6 by stroke count (ascending) to pick simpler ones
    level6.sort((a, b) => a.strokeCount - b.strokeCount);
    const added = level6.slice(0, needed);
    selected = [...selected, ...added];
    console.log(`Added ${added.length} characters from Level 6 (Stroke count ${added[0].strokeCount} to ${added[added.length - 1].strokeCount})`);
}

console.log(`Total selected: ${selected.length}`);

// 3. Format output
// We want to keep the original formatting style if possible, but JSON stringify is easier.
// We'll format it nicely.
const jsonContent = selected.map(h => {
    // Reconstruct the object string to look like the source
    // keys: kanji, reading, meaning, level, strokeCount, radical
    return `    { kanji: '${h.kanji}', reading: '${h.reading}', meaning: '${h.meaning}', level: ${h.level}, strokeCount: ${h.strokeCount}, radical: '${h.radical}' }`;
}).join(',\n');

const fileContent = `const hanjaData = [\n${jsonContent}\n];\n`;

fs.writeFileSync('c:/@app-dev/web-hanja/hanja_data.js', fileContent, 'utf8');
console.log("Updated hanja_data.js");
