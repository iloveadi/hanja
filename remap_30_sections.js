const fs = require('fs');

// Read the file
let content = fs.readFileSync('c:/@app-dev/web-hanja/cheonjamun_data.js', 'utf8');

// 30 sections with their index ranges (each 4-char phrase = 1 index)
const sectionRanges = [
    { start: 1, end: 8, id: 'sec1' },      // 1~32자
    { start: 9, end: 16, id: 'sec2' },     // 33~64자
    { start: 17, end: 25, id: 'sec3' },    // 65~100자
    { start: 26, end: 34, id: 'sec4' },    // 101~136자
    { start: 35, end: 42, id: 'sec5' },    // 137~168자
    { start: 43, end: 50, id: 'sec6' },    // 169~200자
    { start: 51, end: 58, id: 'sec7' },    // 201~232자
    { start: 59, end: 66, id: 'sec8' },    // 233~264자
    { start: 67, end: 75, id: 'sec9' },    // 265~300자
    { start: 76, end: 84, id: 'sec10' },   // 301~336자
    { start: 85, end: 92, id: 'sec11' },   // 337~368자
    { start: 93, end: 100, id: 'sec12' },  // 369~400자
    { start: 101, end: 108, id: 'sec13' }, // 401~432자
    { start: 109, end: 116, id: 'sec14' }, // 433~464자
    { start: 117, end: 125, id: 'sec15' }, // 465~500자
    { start: 126, end: 134, id: 'sec16' }, // 501~536자
    { start: 135, end: 142, id: 'sec17' }, // 537~568자
    { start: 143, end: 150, id: 'sec18' }, // 569~600자
    { start: 151, end: 158, id: 'sec19' }, // 601~632자
    { start: 159, end: 166, id: 'sec20' }, // 633~664자
    { start: 167, end: 175, id: 'sec21' }, // 665~700자
    { start: 176, end: 184, id: 'sec22' }, // 701~736자
    { start: 185, end: 192, id: 'sec23' }, // 737~768자
    { start: 193, end: 200, id: 'sec24' }, // 769~800자
    { start: 201, end: 208, id: 'sec25' }, // 801~832자
    { start: 209, end: 216, id: 'sec26' }, // 833~864자
    { start: 217, end: 225, id: 'sec27' }, // 865~900자
    { start: 226, end: 234, id: 'sec28' }, // 901~936자
    { start: 235, end: 242, id: 'sec29' }, // 937~968자
    { start: 243, end: 250, id: 'sec30' }  // 969~1000자
];

// Replace chapter values based on index
for (const range of sectionRanges) {
    for (let i = range.start; i <= range.end; i++) {
        const regex = new RegExp(`"index":\\s*"${i}",\\s*\\n\\s*"chapter":\\s*"[^"]+"`);
        content = content.replace(regex, `"index": "${i}",\n        "chapter": "${range.id}"`);
    }
}

// Write back
fs.writeFileSync('c:/@app-dev/web-hanja/cheonjamun_data.js', content, 'utf8');

console.log('Successfully mapped all 250 entries to 30 sections');
