
const fs = require('fs');
const path = require('path');

const targetFile = 'saja_sohak_data.js';
const filePath = path.join(__dirname, targetFile);

const sectionTitle = "1-1. 부모 은총 (부모님의 깊은 사랑)";

// User provided raw data
const rawData = `
父生我身 (부생아신),아버지는 내 생명의 근원이 되어 주시고
母鞠吾身 (모국오신),어머니는 정성으로 내 몸을 길러 주셨네.
腹以懷我 (복이회아),열 달 동안 배 속 가득 나를 품어 주시고
乳以哺我 (유이포아),따뜻한 젖으로 나를 먹여 키워 주셨도다.
以衣溫我 (이의온아),예쁜 옷 입혀 나를 따뜻하게 감싸 주시고
以食飽我 (이식포아),맛있는 음식으로 내 배를 든든하게 채워 주셨네.
恩高如天 (은고여천) 하시니,그 은혜의 높음은 끝없는 하늘과 같고
德厚似地 (덕후사지) 하시니,그 사랑의 두터움은 넓은 대지와 같으니
爲人子者 (위인자자) 가,사람의 자식으로 태어난 사람이라면
曷不爲孝 (갈불위효) 리오,어찌 효도하는 마음을 갖지 않으리오.
欲報其德 (욕보기덕) 인댄,그 크신 덕을 조금이라도 갚으려 하니
昊天罔極 (호천망극) 이로다,넓고 높은 하늘처럼 다함이 없구나.
`;

const lines = rawData.trim().split('\n');
const parsedData = lines.map(line => {
    // Split by comma first (assuming comma separates Phrase and Translation)
    const commaIndex = line.indexOf(',');
    const phrasePart = line.substring(0, commaIndex).trim();
    const translation = line.substring(commaIndex + 1).trim();

    // Parse phrase part: "父生我身 (부생아신)" or "恩高如天 (은고여천) 하시니"
    // Regex to capture Hanja, Reading, and optional Suffix
    // Structure: Hanja space (Reading) space? Suffix?
    // Let's use a regex that handles the parenthesis
    const match = phrasePart.match(/^(.+)\s\((.+)\)\s*(.*)$/);

    let hanja = '';
    let reading = '';
    let suffix = '';

    if (match) {
        hanja = match[1].trim();
        reading = match[2].trim();
        suffix = match[3] ? match[3].trim() : '';
    } else {
        // Fallback or error
        console.warn("Could not parse line format:", phrasePart);
        hanja = phrasePart;
    }

    // Construct original_line
    // Padded for visual consistency if desired, or just space
    const original_line = `${hanja}(${reading})${suffix ? suffix : ''}        ${translation}`;

    return {
        section: sectionTitle,
        hanja: hanja,
        reading: reading,
        suffix: suffix,
        translation: translation,
        original_line: original_line
    };
});

const fileContent = `const sajaSohakData = ${JSON.stringify(parsedData, null, 4)};\n`;

try {
    fs.writeFileSync(filePath, fileContent, 'utf8');
    console.log("Successfully reset and populated Saja Sohak data.");
} catch (e) {
    console.error("Error writing file:", e);
}
