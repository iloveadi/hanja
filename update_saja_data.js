const fs = require('fs');

// Read the file
let content = fs.readFileSync('c:/@app-dev/web-hanja/saja_sohak_data.js', 'utf8');

// Section mapping
const sectionMap = {
    "1-1. 효행편: 부모 은총 (부모님의 깊은 사랑)": "sec1",
    "1-2. 효행편: 조석 예절 (일상에서 정성을 다하는 법)": "sec2",
    "1-3. 효행편: 신체와 명예 (나를 아끼고 부모님을 빛내는 길)": "sec3",
    "2. 추원편 (追遠篇): 조상과 제사": "sec4",
    "3. 충효편 (忠孝篇): 나라와 부부": "sec5",
    "4. 우애편 (友愛篇): 형제와 자매": "sec6",
    "5. 사생편 (師生篇): 스승과 제자": "sec7",
    "6. 붕우편 (朋友篇): 어른과 친구": "sec8",
    "7-1. 수신편: 오륜과 삼강 (인간 사회의 다섯 줄기와 세 기둥)": "sec9",
    "7-2. 수신편: 구용과 구사 (품격 있는 몸가짐과 지혜로운 생각)": "sec10",
    "7-3. 수신편: 처세와 인과 (지혜로운 삶과 배움의 마무리)": "sec11"
};

// Extract data array
const dataMatch = content.match(/const sajaSohakData = \[([\s\S]*)\];/);
if (!dataMatch) {
    console.error("Could not find sajaSohakData array");
    process.exit(1);
}

const dataStr = dataMatch[1];
const entries = dataStr.match(/\{[^}]+\}/gs);

let currentChapter = "sec1";
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

    // Add index and chapter fields (keep section field)
    let modified = entry.replace(/\}$/, `,\n        "index": "${index}",\n        "chapter": "${currentChapter}"\n    }`);

    modifiedEntries.push(modified);
    index++;
}

// Reconstruct file
const newData = modifiedEntries.join(',\n    ');
const newContent = content.replace(/const sajaSohakData = \[[\s\S]*\];/, `const sajaSohakData = [\n    ${newData}\n];`);

// Write back
fs.writeFileSync('c:/@app-dev/web-hanja/saja_sohak_data.js', newContent, 'utf8');

console.log(`Successfully added index and chapter fields to ${index - 1} entries`);
