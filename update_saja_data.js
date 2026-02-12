
const fs = require('fs');
const path = require('path');

const targetFile = 'saja_sohak_data.js';
const filePath = path.join(__dirname, targetFile);

// New Data provided by user
const newEntries = [
    // Section 1
    { index: 0, hanja: "父生我身", reading: "부생아신", translation: "아버지는 내 몸을 낳으시고,", section: "1. 부모님의 은혜 (1~16자)" },
    { index: 1, hanja: "母鞠我身", reading: "모국아신", translation: "어머니는 내 몸을 기르셨다.", section: "1. 부모님의 은혜 (1~16자)" },
    { index: 2, hanja: "腹以懷我", reading: "복이회아", translation: "배로써 나를 품어 주시고,", section: "1. 부모님의 은혜 (1~16자)" },
    { index: 3, hanja: "乳以哺我", reading: "유이포아", translation: "젖으로써 나를 먹여 주셨다.", section: "1. 부모님의 은혜 (1~16자)" },

    // Section 2
    // User: 以衣飾我, File has 以衣溫我. Updating to User's version.
    { index: 4, hanja: "以衣飾我", reading: "이의식아", translation: "옷으로써 나를 꾸며 주시고,", section: "2. 부모님의 사랑과 헌신 (17~32자)" },
    { index: 5, hanja: "以食飽我", reading: "이식포아", translation: "음식으로써 나를 배부르게 하셨다.", section: "2. 부모님의 사랑과 헌신 (17~32자)" },
    { index: 6, hanja: "恩高如天", reading: "은고여천", translation: "부모님의 은혜는 하늘처럼 높고,", section: "2. 부모님의 사랑과 헌신 (17~32자)" },
    { index: 7, hanja: "德厚似地", reading: "덕후사지", translation: "부모님의 덕은 땅처럼 두터우시다.", section: "2. 부모님의 사랑과 헌신 (17~32자)" },

    // Section 3
    { index: 8, hanja: "爲人子者", reading: "위인자자", translation: "사람의 자식 된 자라면,", section: "3. 자식의 도리와 마음가짐 (33~40자)" },
    { index: 9, hanja: "曷不爲孝", reading: "갈불위효", translation: "어찌 효도를 하지 않겠는가.", section: "3. 자식의 도리와 마음가짐 (33~40자)" },

    // Section 4
    { index: 10, hanja: "欲報其德", reading: "욕보기덕", translation: "그 깊은 은혜에 보답하고자 하나,", section: "4. 무궁한 은혜와 보답 (41~48자)" },
    { index: 11, hanja: "昊天罔極", reading: "호천망극", translation: "넓은 하늘처럼 끝이 없어 다함이 없도다.", section: "4. 무궁한 은혜와 보답 (41~48자)" },

    // Section 5
    { index: 12, hanja: "晨必先起", reading: "신필선기", translation: "새벽에는 반드시 부모님보다 먼저 일어나,", section: "5. 정성 어린 문안과 봉양 (49~64자)" },
    // File: 必洗必漱 -> User: 必濯必漱 (필탁필수)
    { index: 13, hanja: "必濯必漱", reading: "필탁필수", translation: "반드시 세수하고 양치하며 몸을 정갈히 해야 한다.", section: "5. 정성 어린 문안과 봉양 (49~64자)" },
    { index: 14, hanja: "昏定晨省", reading: "혼정신성", translation: "저녁에는 잠자리를 살펴 드리고 아침에는 안부를 살펴야 하며,", section: "5. 정성 어린 문안과 봉양 (49~64자)" },
    // File: 冬溫夏淸 -> User: 冬溫夏凊 (Cheong is slightly diff char code maybe? User used 凊 (U+51CD) vs 淸 (U+6E05))
    { index: 15, hanja: "冬溫夏凊", reading: "동온하청", translation: "겨울에는 따뜻하게, 여름에는 시원하게 해 드려라.", section: "5. 정성 어린 문안과 봉양 (49~64자)" },

    // Section 6
    { index: 16, hanja: "父母呼我", reading: "부모호아", translation: "부모님께서 나를 부르시면,", section: "6. 부모님의 부름과 응대 (65~80자)" },
    { index: 17, hanja: "唯而趨進", reading: "유이추진", translation: "즉시 대답하고 공손히 앞으로 나아가야 한다.", section: "6. 부모님의 부름과 응대 (65~80자)" },
    { index: 18, hanja: "父母使我", reading: "부모사아", translation: "부모님께서 나에게 일을 시키시면,", section: "6. 부모님의 부름과 응대 (65~80자)" },
    { index: 19, hanja: "勿逆勿怠", reading: "물역물태", translation: "거역하지 말고 게을리하지 말아야 한다.", section: "6. 부모님의 부름과 응대 (65~80자)" },

    // Section 7
    { index: 20, hanja: "父母有命", reading: "부모유명", translation: "부모님께서 명하시는 바가 있으면,", section: "7. 공경의 태도와 가르침 (81~100자)" },
    { index: 21, hanja: "俯首敬聽", reading: "부수경청", translation: "머리를 숙이고 공경하는 마음으로 들어야 한다.", section: "7. 공경의 태도와 가르침 (81~100자)" },
    // File: 坐命坐聽 -> User: 坐命而立
    { index: 22, hanja: "坐命而立", reading: "좌명이립", translation: "앉아서 명하시면 서서 듣고,", section: "7. 공경의 태도와 가르침 (81~100자)" },
    // File: 立命立聽 -> User: 臥命而起
    { index: 23, hanja: "臥命而起", reading: "와명이기", translation: "누워서 명하시면 일어나서 들어야 한다.", section: "7. 공경의 태도와 가르침 (81~100자)" },
    { index: 24, hanja: "父母出入", reading: "부모출입", translation: "부모님께서 밖을 나가시거나 들어오실 때면,", section: "7. 공경의 태도와 가르침 (81~100자)" },
    { index: 25, hanja: "每必起立", reading: "매필기립", translation: "매번 반드시 일어서서 맞이하고 배웅해야 한다.", section: "7. 공경의 태도와 가르침 (81~100자)" }
];

try {
    let content = fs.readFileSync(filePath, 'utf8');

    // Extract the array part
    const startMatch = content.match(/const sajaSohakData = \[\s*/);
    if (!startMatch) throw new Error("Could not find start of sajaSohakData");

    // Find the end of array - simplified assumption: last bracket
    // Or we can just retain the 'const sajaSohakData = ' part and parse the rest if valid JSON.
    // However, the file might contain comments or trailing commas which JSON.parse dislikes.
    // We'll try to execute the file context to get the data, or parse carefully.

    // Since it's a simple JS data file, let's use eval to get the object (safely-ish in this context)
    // We only need the data array.
    const dataContent = content.substring(content.indexOf('['), content.lastIndexOf(']') + 1);

    // Use Function to evaluate array
    let currentData;
    try {
        currentData = eval(dataContent);
    } catch (e) {
        console.error("Eval failed, trying node require if module exports... but it's not.");
        // Fallback: use regex replacer? No, we need to inspect and update.
        // Let's rely on standard JSON format if possible.
        // But the file keys might not be quoted? 'section': ... vs section: ...
        // Looking at view_file output, keys ARE quoted: "section": "Introduction".
        // It looks like valid JSON inside the variable assignment.
        currentData = JSON.parse(dataContent);
    }

    if (!Array.isArray(currentData)) {
        throw new Error("Parsed data is not an array");
    }

    // Apply updates
    newEntries.forEach(update => {
        if (currentData[update.index]) {
            currentData[update.index].hanja = update.hanja;
            currentData[update.index].reading = update.reading;
            currentData[update.index].translation = update.translation;
            currentData[update.index].section = update.section;

            // Reconstruct original_line for consistency (optional but good)
            const suffix = currentData[update.index].suffix || '';
            // Pad with spaces for alignment like original? '        '
            currentData[update.index].original_line = `${update.hanja}(${update.reading})${suffix}        ${update.translation}`;
        } else {
            console.warn(`Index ${update.index} not found in existing data`);
        }
    });

    // Write back
    const newContent = `const sajaSohakData = ${JSON.stringify(currentData, null, 4)};\n`;
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log("Successfully updated saja_sohak_data.js");

} catch (error) {
    console.error("Error updating file:", error);
    process.exit(1);
}
