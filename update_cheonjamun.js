const fs = require('fs');

// Read the file
const content = fs.readFileSync('c:/@app-dev/web-hanja/cheonjamun_data.js', 'utf8');

// Section mapping
const sectionMap = {
    "1. 우주의 섭리와 자연 (1~32자)": "우주",
    "2. 기상과 지형의 신비 (33~64자)": "기상",
    "3. 생태계와 고대 역사 (65~100자)": "역사",
    "4. 성군의 통치와 평화 (101~136자)": "성군",
    "5. 덕화의 영향력 (137~168자)": "덕화",
    "6. 신체와 효도 (169~200자)": "신체",
    "7. 자기 성찰과 허물 고치기 (201~232자)": "성찰",
    "8. 지혜로운 삶의 태도 (233~264자)": "지혜",
    "9. 학문과 언어의 길 (265~300자)": "학문"
};

// Extract data array
const dataMatch = content.match(/const cheonjamunData = \[([\s\S]*)\];/);
if (!dataMatch) {
    console.error("Could not find cheonjamunData array");
    process.exit(1);
}

const dataStr = dataMatch[1];
const entries = dataStr.match(/\{[^}]+\}/g);

let currentChapter = "우주";
let index = 1;
const modifiedEntries = [];

for (const entry of entries) {
    // Check for section field
    const sectionMatch = entry.match(/"section":\s*"([^"]+)"/);
    if (sectionMatch) {
        const sectionName = sectionMatch[1];
        if (sectionMap[sectionName]) {
            currentChapter = sectionMap[sectionName];
        }
    }

    // Remove section field
    let modified = entry.replace(/,?\s*"section":\s*"[^"]+"\s*,?/g, '');

    // Add index and chapter
    modified = modified.replace(/\}$/, `,\n        "index": "${index}",\n        "chapter": "${currentChapter}"\n    }`);

    modifiedEntries.push(modified);
    index++;
}

// Reconstruct file
const newData = modifiedEntries.join(',\n    ');
const newContent = content.replace(/const cheonjamunData = \[[\s\S]*\];/, `const cheonjamunData = [\n    ${newData}\n];`);

// Write back
fs.writeFileSync('c:/@app-dev/web-hanja/cheonjamun_data.js', newContent, 'utf8');

console.log(`Successfully added index and chapter fields to ${index - 1} entries`);
