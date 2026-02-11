const fs = require('fs');

const HANJA_DATA_PATH = 'c:/@app-dev/web-hanja/hanja_data.js';

function main() {
    console.log("Reading hanja_data.js...");
    let content = fs.readFileSync(HANJA_DATA_PATH, 'utf8');
    const match = content.match(/const hanjaData = \[([\s\S]*)\];/);
    let hanjaData = eval(match[0].replace('const hanjaData = ', ''));

    // Check if 回 exists
    if (!hanjaData.find(h => h.kanji === '回')) {
        console.log("Adding '回'...");
        hanjaData.push({
            kanji: '回',
            reading: '회',
            meaning: '돌다',
            level: 4,
            strokeCount: 6,
            radical: '囗'
        });
    }

    // Sort
    hanjaData.sort((a, b) => a.reading.localeCompare(b.reading));

    const jsonContent = hanjaData.map(h => {
        return `    { kanji: '${h.kanji}', reading: '${h.reading}', meaning: '${h.meaning}', level: ${h.level}, strokeCount: ${h.strokeCount}, radical: '${h.radical}' }`;
    }).join(',\n');

    fs.writeFileSync(HANJA_DATA_PATH, `const hanjaData = [\n${jsonContent}\n];\n`, 'utf8');
    console.log(`Saved ${hanjaData.length} entries.`);
}

main();
