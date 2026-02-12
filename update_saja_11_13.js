
const fs = require('fs');
const path = require('path');

const targetFile = 'saja_sohak_data.js';
const filePath = path.join(__dirname, targetFile);

const newData = [
    // Section 11
    { hanja: "兄友弟恭", reading: "형우제공", translation: "형은 아우를 사랑하고 아우는 형을 공경하며,", section: "11. 형제간의 우애와 공경 (161~176자)" },
    { hanja: "不和兄弟", reading: "불화형제", translation: "만약 형제간에 화목하게 지내지 못한다면,", section: "11. 형제간의 우애와 공경 (161~176자)" }, // File might have 兄弟不和
    { hanja: "禽獸何異", reading: "금수하이", translation: "길짐승이나 날짐승과 무엇이 다르겠는가.", section: "11. 형제간의 우애와 공경 (161~176자)" }, // File might have 禽獸無異
    { hanja: "兄弟有善", reading: "형제유선", translation: "형제에게 착하고 좋은 일이 생겼다면,", section: "11. 형제간의 우애와 공경 (161~176자)" },

    // Section 12
    { hanja: "必揚于外", reading: "필양우외", translation: "반드시 밖으로 일컬어 그 기쁨을 널리 알리고,", section: "12. 형제의 허물과 화합 (177~200자)" },
    { hanja: "兄弟有過", reading: "형제유과", translation: "형제에게 실수나 허물이 있다면,", section: "12. 형제의 허물과 화합 (177~200자)" },
    { hanja: "必諱于內", reading: "필휘우내", translation: "반드시 안에서 타이르며 허물을 감싸주어야 한다.", section: "12. 형제의 허물과 화합 (177~200자)" },
    { hanja: "雖有他親", reading: "수유타친", translation: "비록 다른 친척들이 많이 있다고 하더라도,", section: "12. 형제의 허물과 화합 (177~200자)" },
    { hanja: "豈如兄弟", reading: "기여형제", translation: "어찌 형제 사이의 돈독함과 같을 수 있겠는가.", section: "12. 형제의 허물과 화합 (177~200자)" },

    // Section 13
    { hanja: "兄弟之情", reading: "형제지정", translation: "형제 사이의 깊은 정은,", section: "13. 혈육의 소중함과 공경 (201~220자)" },
    { hanja: "友愛是宜", reading: "우애시의", translation: "마땅히 우애를 나누는 것이 옳다.", section: "13. 혈육의 소중함과 공경 (201~220자)" }, // File might have 友愛之情
    { hanja: "骨肉之親", reading: "골육지친", translation: "뼈와 살을 나눈 아주 가까운 혈육이니,", section: "13. 혈육의 소중함과 공경 (201~220자)" },
    { hanja: "焉不同氣", reading: "언부동기", translation: "어찌 한 기운을 나누어 받지 않았겠는가.", section: "13. 혈육의 소중함과 공경 (201~220자)" }, // File might have 同氣連枝 or similar
    { hanja: "事兄如父", reading: "사형여부", translation: "형 섬기기를 아버지와 같이 극진히 하고,", section: "13. 혈육의 소중함과 공경 (201~220자)" }
];

try {
    const content = fs.readFileSync(filePath, 'utf8');
    const dataContent = content.substring(content.indexOf('['), content.lastIndexOf(']') + 1);
    let currentData = JSON.parse(dataContent);

    // Helper to find index with fuzzy matching if needed
    const findIndex = (item, update) => {
        // Exact match
        if (item.hanja === update.hanja) return true;

        // Handling variants mentioned in thought process
        if (update.hanja === "不和兄弟" && (item.hanja === "兄弟不和" || item.hanja === "不和兄弟")) return true;
        if (update.hanja === "禽獸何異" && (item.hanja === "禽獸何異" || item.hanja === "禽獸無異")) return true;

        if (update.hanja === "友愛是宜" && (item.hanja === "友愛是宜" || item.hanja === "友愛之情")) return true;
        if (update.hanja === "焉不同氣" && (item.hanja === "焉不同氣" || item.hanja === "同氣連枝")) return true;

        // Try loose match if translation looks very similar? No, stick to Hanja.
        return false;
    };

    newData.forEach(update => {
        let index = currentData.findIndex(item => findIndex(item, update));

        if (index === -1) {
            // Fallback strategy: Try to find by reading if Hanja is too different
            // But reading might also be different.
            // Let's print warning and try to guess by context?
            // Actually, for "不和兄弟", let's look for "불화형제"
            index = currentData.findIndex(item => item.reading === update.reading);
        }

        if (index !== -1) {
            currentData[index].hanja = update.hanja; // Update Hanja to user's version
            currentData[index].reading = update.reading;
            currentData[index].translation = update.translation;
            currentData[index].section = update.section;

            const suffix = currentData[index].suffix || '';
            currentData[index].original_line = `${update.hanja}(${update.reading})${suffix}        ${update.translation}`;
        } else {
            console.warn(`Could not find match for: ${update.hanja} (${update.reading})`);
        }
    });

    const newContent = `const sajaSohakData = ${JSON.stringify(currentData, null, 4)};\n`;
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log("Successfully updated Saja Sohak (Sections 11-13)");

} catch (e) {
    console.error(e);
}
