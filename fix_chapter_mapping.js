const fs = require('fs');

// Read the file
let content = fs.readFileSync('c:/@app-dev/web-hanja/cheonjamun_data.js', 'utf8');

// Correct chapter mapping based on index ranges
const chapterRanges = [
    { start: 1, end: 8, chapter: '우주' },      // 1~32자 = 8구절
    { start: 9, end: 16, chapter: '기상' },     // 33~64자 = 8구절  
    { start: 17, end: 25, chapter: '역사' },    // 65~100자 = 9구절
    { start: 26, end: 34, chapter: '성군' },    // 101~136자 = 9구절
    { start: 35, end: 42, chapter: '덕화' },    // 137~168자 = 8구절
    { start: 43, end: 50, chapter: '신체' },    // 169~200자 = 8구절
    { start: 51, end: 58, chapter: '성찰' },    // 201~232자 = 8구절
    { start: 59, end: 66, chapter: '지혜' },    // 233~264자 = 8구절
    { start: 67, end: 250, chapter: '학문' }    // 265~1000자 = 나머지 모두
];

// Replace chapter values based on index
for (const range of chapterRanges) {
    for (let i = range.start; i <= range.end; i++) {
        const regex = new RegExp(`"index":\\s*"${i}",\\s*\\n\\s*"chapter":\\s*"[^"]+"`);
        content = content.replace(regex, `"index": "${i}",\n        "chapter": "${range.chapter}"`);
    }
}

// Write back
fs.writeFileSync('c:/@app-dev/web-hanja/cheonjamun_data.js', content, 'utf8');

console.log('Fixed chapter mappings for all 250 entries');
