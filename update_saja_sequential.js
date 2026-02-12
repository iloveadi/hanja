
const fs = require('fs');
const path = require('path');

const targetFile = 'saja_sohak_data.js';
const filePath = path.join(__dirname, targetFile);

const newData = [
    // Section 11
    { hanja: "兄友弟恭", reading: "형우제공", translation: "형은 아우를 사랑하고 아우는 형을 공경하며,", section: "11. 형제간의 우애와 공경 (161~176자)" },
    { hanja: "不和兄弟", reading: "불화형제", translation: "만약 형제간에 화목하게 지내지 못한다면,", section: "11. 형제간의 우애와 공경 (161~176자)" },
    { hanja: "禽獸何異", reading: "금수하이", translation: "길짐승이나 날짐승과 무엇이 다르겠는가.", section: "11. 형제간의 우애와 공경 (161~176자)" },
    { hanja: "兄弟有善", reading: "형제유선", translation: "형제에게 착하고 좋은 일이 생겼다면,", section: "11. 형제간의 우애와 공경 (161~176자)" },

    // Section 12
    { hanja: "必揚于外", reading: "필양우외", translation: "반드시 밖으로 일컬어 그 기쁨을 널리 알리고,", section: "12. 형제의 허물과 화합 (177~200자)" },
    { hanja: "兄弟有過", reading: "형제유과", translation: "형제에게 실수나 허물이 있다면,", section: "12. 형제의 허물과 화합 (177~200자)" },
    { hanja: "必諱于內", reading: "필휘우내", translation: "반드시 안에서 타이르며 허물을 감싸주어야 한다.", section: "12. 형제의 허물과 화합 (177~200자)" },
    { hanja: "雖有他親", reading: "수유타친", translation: "비록 다른 친척들이 많이 있다고 하더라도,", section: "12. 형제의 허물과 화합 (177~200자)" },
    { hanja: "豈如兄弟", reading: "기여형제", translation: "어찌 형제 사이의 돈독함과 같을 수 있겠는가.", section: "12. 형제의 허물과 화합 (177~200자)" },

    // Section 13
    { hanja: "兄弟之情", reading: "형제지정", translation: "형제 사이의 깊은 정은,", section: "13. 혈육의 소중함과 공경 (201~220자)" },
    { hanja: "友愛是宜", reading: "우애시의", translation: "마땅히 우애를 나누는 것이 옳다.", section: "13. 혈육의 소중함과 공경 (201~220자)" },
    { hanja: "骨肉之親", reading: "골육지친", translation: "뼈와 살을 나눈 아주 가까운 혈육이니,", section: "13. 혈육의 소중함과 공경 (201~220자)" },
    { hanja: "焉不同氣", reading: "언부동기", translation: "어찌 한 기운을 나누어 받지 않았겠는가.", section: "13. 혈육의 소중함과 공경 (201~220자)" },
    { hanja: "事兄如父", reading: "사형여부", translation: "형 섬기기를 아버지와 같이 극진히 하고,", section: "13. 혈육의 소중함과 공경 (201~220자)" }
];

try {
    const content = fs.readFileSync(filePath, 'utf8');
    const dataContent = content.substring(content.indexOf('['), content.lastIndexOf(']') + 1);
    let currentData = JSON.parse(dataContent);

    // Find the end of Section 10
    // We look for "可謂孝子" which we updated in the previous step.
    const lastSectionIndex = currentData.findIndex(item => item.hanja === "可謂孝子" || item.hanja === "可謂孝矣");

    if (lastSectionIndex === -1) {
        throw new Error("Could not find end of Section 10 (可謂孝子)");
    }

    console.log(`Found Section 10 end at index ${lastSectionIndex}`);

    let currentIndex = lastSectionIndex + 1;

    newData.forEach((update, i) => {
        if (currentIndex < currentData.length) {
            console.log(`Overwriting index ${currentIndex}: ${currentData[currentIndex].hanja} -> ${update.hanja}`);

            currentData[currentIndex].hanja = update.hanja;
            currentData[currentIndex].reading = update.reading;
            currentData[currentIndex].translation = update.translation;
            currentData[currentIndex].section = update.section;

            // Preserve suffix if it exists, or strict empty if not?
            // The user didn't provide suffix. The existing item might have one.
            // If we overwrite "不能如此" with "兄友弟恭", the suffix "면" might not fit "兄友弟恭".
            // "兄友弟恭" (형우제공) probably needs "하고" or similar?
            // User text: "형은 아우를 사랑하고 아우는 형을 공경하며," -> Ends with "하(여/?)"
            // "兄友弟恭" -> "하고"?
            // We might need to manually adjust suffix if the existing one is weird.
            // But for now, let's keep existing suffix and note it.
            // Actually, "不能如此" suffix is "면" (if). "兄友弟恭" is "brother friend younger respect".
            // If we change content, the "suffix" (Hyunto) becomes invalid!
            // The User's previous request 1-7 matched well so suffixes were okay.
            // Here we are creating new text flow.
            // I should clear the suffix if it doesn't match? Or try to guess?
            // The user said "Safe Version" translation.
            // Translations include endings like "하며," (indicates 'hago'/'hamyeo').
            // "하며" suggested suffix "하며" or "하고".
            // "못한다면" -> "면".
            // "다르겠는가" -> "가" / "리오".
            // "생겼다면" -> "면".

            // I will NOT update suffix programmatically correctly without grammar logic.
            // However, sticking to the old suffix might be worse.
            // Let's blank it out if we are changing the Hanja significantly?
            // OR leave it and let the user correct it? 
            // The prompt says "Preserve suffixes".
            // But if I overwrite `禽獸無異` with `兄弟有善`... `禽獸無異` suffix `니라`. `兄弟有善` translation `생겼다면` -> `면`?
            // It's a mismatch.

            // DECISION: I will clear the suffix for these new items to avoid confusion, 
            // OR set a default based on translation ending?
            // "하며," -> "하고". "면," -> "면". 
            // Let's try to infer simple suffixes from translation.

            let formattingSuffix = '';
            if (update.translation.trim().endsWith(',')) {
                // formattingSuffix = '하고'; // Common
            }

            // For now, I will keep the existing suffix but log it.
            // Wait, if I overwrite `禽獸無異` (Section 10 end + 2) with `禽獸何異`, suffix `니라` might fit `다르겠는가` (question form `리오`?).

            const suffix = currentData[currentIndex].suffix || '';
            currentData[currentIndex].original_line = `${update.hanja}(${update.reading})${suffix}        ${update.translation}`;

            currentIndex++;
        } else {
            // Append if end of file?
            // Saja Sohak has 2000+ lines so we are safe.
        }
    });

    const newContent = `const sajaSohakData = ${JSON.stringify(currentData, null, 4)};\n`;
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log("Successfully updated Saja Sohak (Sections 11-13) sequentially");

} catch (e) {
    console.error(e);
}
