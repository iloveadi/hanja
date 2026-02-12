
const fs = require('fs');
const path = require('path');

const targetFile = 'saja_sohak_data.js';
const filePath = path.join(__dirname, targetFile);

const newData = [
    // Section 8
    { hanja: "父母愛之", reading: "부모애지", translation: "부모님께서 나를 아껴 주시고 사랑해 주시면,", section: "8. 부모님의 마음 살피기 (101~116자)" },
    { hanja: "喜而勿忘", reading: "희이물망", translation: "기뻐하며 그 은혜로운 마음을 잊지 말아야 한다.", section: "8. 부모님의 마음 살피기 (101~116자)" },
    { hanja: "父母責之", reading: "부모책지", translation: "부모님께서 나의 잘못을 꾸짖으시더라도,", section: "8. 부모님의 마음 살피기 (101~116자)" },
    { hanja: "反省勿怨", reading: "반성물원", translation: "스스로를 깊이 되돌아보고 원망하는 마음을 갖지 마라.", section: "8. 부모님의 마음 살피기 (101~116자)" },

    // Section 9
    { hanja: "勿登高樹", reading: "물등고수", translation: "높은 나무에 함부로 올라가지 마라.", section: "9. 신체 보존과 부모님의 걱정 (117~140자)" },
    { hanja: "父母憂之", reading: "부모우지", translation: "혹여나 다칠까 부모님께서 근심하신다.", section: "9. 신체 보존과 부모님의 걱정 (117~140자)" },
    { hanja: "勿泳深淵", reading: "물영심연", translation: "깊은 연못에서 함부로 헤엄치지 마라.", section: "9. 신체 보존과 부모님의 걱정 (117~140자)" },
    { hanja: "父母念之", reading: "부모염지", translation: "사고가 날까 부모님께서 늘 걱정하신다.", section: "9. 신체 보존과 부모님의 걱정 (117~140자)" }, // File might have 父母念之 (Note: 念 vs 念)
    { hanja: "勿與人鬪", reading: "물여인투", translation: "다른 사람과 다투거나 싸우지 마라.", section: "9. 신체 보존과 부모님의 걱정 (117~140자)" },
    { hanja: "父母不安", reading: "부모불안", translation: "부모님의 마음이 편치 않고 불안해하신다.", section: "9. 신체 보존과 부모님의 걱정 (117~140자)" }, // File: 父母不安

    // Section 10
    { hanja: "室堂有塵", reading: "실당유진", translation: "방이나 거실에 먼지가 쌓여 있다면,", section: "10. 집안 정리와 효의 정의 (141~160자)" }, // File: 室堂有塵(당실유진) reading diff? File: 당실유진
    { hanja: "常必灑掃", reading: "상필쇄소", translation: "항상 물을 뿌리고 깨끗하게 쓸고 닦아야 한다.", section: "10. 집안 정리와 효의 정의 (141~160자)" },
    { hanja: "事親如此", reading: "사친여차", translation: "부모님을 이와 같이 정성껏 섬긴다면,", section: "10. 집안 정리와 효의 정의 (141~160자)" },
    { hanja: "可謂孝子", reading: "가위효자", translation: "진정한 효자라고 일컬을 수 있다.", section: "10. 집안 정리와 효의 정의 (141~160자)" } // File: 可謂孝矣(가위효의)
];

try {
    const content = fs.readFileSync(filePath, 'utf8');
    const dataContent = content.substring(content.indexOf('['), content.lastIndexOf(']') + 1);
    let currentData = JSON.parse(dataContent);

    // Normalization helper
    const normalize = (str) => str.normalize('NFC').replace(/\s/g, '');

    newData.forEach(update => {
        // Find by hanja (normalized)
        // Check for specific replacement case: 可謂孝矣 -> 可謂孝子
        let index = -1;

        if (update.hanja === "可謂孝子") {
            // Find 可謂孝矣 or 可謂孝子
            index = currentData.findIndex(item => item.hanja === "可謂孝矣" || item.hanja === "可謂孝子");
        } else if (update.hanja === "父母念之") {
            // 念 (U+F963) vs 念 (U+5FF5)
            index = currentData.findIndex(item => normalize(item.hanja) === normalize(update.hanja) || item.hanja.includes("父母") && item.hanja.includes("之") && (item.hanja.includes("念") || item.hanja.includes("念")));
        } else if (update.hanja === "父母不安") {
            // 不 (U+F967) vs 不 (U+4E0D)
            index = currentData.findIndex(item => normalize(item.hanja) === normalize(update.hanja));
        } else if (update.reading === "실당유진") {
            // File might be "당실유진"? Hanja is "室堂有塵". 
            // Room(실) Hall(당).
            // File: "室堂有塵", reading "당실유진".
            // User: "室堂有塵", reading "실당유진".
            // Match by Hanja.
            index = currentData.findIndex(item => item.hanja === update.hanja);
        } else {
            index = currentData.findIndex(item => normalize(item.hanja) === normalize(update.hanja));
        }

        if (index !== -1) {
            currentData[index].hanja = update.hanja; // Update in case of variants
            currentData[index].reading = update.reading;
            currentData[index].translation = update.translation;
            currentData[index].section = update.section;

            // Reconstruct original_line
            const suffix = currentData[index].suffix || '';
            currentData[index].original_line = `${update.hanja}(${update.reading})${suffix}        ${update.translation}`;
        } else {
            console.warn(`Original Item not found for: ${update.hanja} (${update.reading})`);
        }
    });

    const newContent = `const sajaSohakData = ${JSON.stringify(currentData, null, 4)};\n`;
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log("Successfully updated Saja Sohak (Sections 8-10)");

} catch (e) {
    console.error(e);
}
