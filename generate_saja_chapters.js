const fs = require('fs');

// Read the file
let content = fs.readFileSync('c:/@app-dev/web-hanja/saja_sohak_data.js', 'utf8');

// Extract unique sections with their order
const dataMatch = content.match(/const sajaSohakData = \[([\s\S]*)\];/);
if (!dataMatch) {
    console.error('Could not find sajaSohakData array');
    process.exit(1);
}

const sections = [];
const sectionMap = {};
let currentIndex = 1;

// Parse data to find sections and count entries
const entries = dataMatch[1].match(/\{[^}]+\}/gs);
entries.forEach(entry => {
    const sectionMatch = entry.match(/"section":\s*"([^"]+)"/);
    if (sectionMatch) {
        const sectionName = sectionMatch[1];
        if (!sectionMap[sectionName]) {
            const id = `sec${sections.length + 1}`;
            sectionMap[sectionName] = {
                id: id,
                title: sectionName,
                startIndex: currentIndex,
                endIndex: currentIndex
            };
            sections.push(sectionMap[sectionName]);
        } else {
            sectionMap[sectionName].endIndex = currentIndex;
        }
        currentIndex++;
    }
});

// Create chapters array
const chaptersCode = sections.map(sec => {
    const titleParts = sec.title.split(': ');
    const mainTitle = titleParts[0];
    const subtitle = titleParts[1] || '';

    return `    { id: "${sec.id}", title: "${mainTitle}", subtitle: "${subtitle}", description: "${sec.title}에 관한 내용입니다." }`;
}).join(',\n');

console.log('// 사자소학 섹션 정보');
console.log('const sajaSohakChapters = [');
console.log(chaptersCode);
console.log('];');
console.log('');
console.log(`Total sections: ${sections.length}`);
console.log(`Total entries: ${currentIndex - 1}`);
