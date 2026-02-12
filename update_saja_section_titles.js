
const fs = require('fs');
const path = require('path');

const targetFile = 'saja_sohak_data.js';
const filePath = path.join(__dirname, targetFile);

try {
    const existingContent = fs.readFileSync(filePath, 'utf8');
    const dataContent = existingContent.substring(existingContent.indexOf('['), existingContent.lastIndexOf(']') + 1);
    let currentData = JSON.parse(dataContent);

    let updatedCount = 0;
    currentData.forEach(item => {
        if (item.section === "1-1. 부모 은총 (부모님의 깊은 사랑)") {
            item.section = "1-1. 효행편: 부모 은총 (부모님의 깊은 사랑)";
            updatedCount++;
        } else if (item.section === "1-2. 조석 예절 (일상에서 정성을 다하는 법)") {
            item.section = "1-2. 효행편: 조석 예절 (일상에서 정성을 다하는 법)";
            updatedCount++;
        } else if (item.section === "1-3. 신체와 명예 (나를 아끼고 부모님을 빛내는 길)") {
            item.section = "1-3. 효행편: 신체와 명예 (나를 아끼고 부모님을 빛내는 길)";
            updatedCount++;
        }
    });

    const newContent = `const sajaSohakData = ${JSON.stringify(currentData, null, 4)};\n`;
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`Successfully updated ${updatedCount} items in Saja Sohak data.`);

} catch (e) {
    console.error("Error updating file:", e);
}
