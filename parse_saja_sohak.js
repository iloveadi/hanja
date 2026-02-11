const fs = require('fs');

const rawText = fs.readFileSync('saja_sohak_raw.txt', 'utf8');
const lines = rawText.split('\n');

const sajaSohakData = [];
let currentSection = 'Introduction'; // Default if no header found first

lines.forEach(line => {
    line = line.trim();
    if (!line) return;

    if (line.startsWith('⊙')) {
        currentSection = line.replace('⊙', '').trim();
        return;
    }

    // Parse line: 父生我身(부생아신)하시고        아버지는 내 몸을 낳으시고
    // Regex to capture: Hanja, Reading, Postposition/Suffix, Translation
    // The translation seems to be separated by multiple spaces or just clear visual gap.
    // Let's try splitting by multiple spaces first.

    // Split into HanjaPart and TranslationPart
    // The gap seems to be variable, maybe 2 or more spaces?
    // Let's use a regex that looks for the Hanja pattern first.

    const match = line.match(/^([^\(]+)\(([^\)]+)\)(\S*)\s+(.*)$/);

    if (match) {
        const hanja = match[1].trim();
        const reading = match[2].trim();
        const suffix = match[3].trim(); // 하시고, 이로다, etc.
        const translation = match[4].trim();

        sajaSohakData.push({
            section: currentSection,
            hanja: hanja,
            reading: reading,
            suffix: suffix,
            translation: translation,
            original_line: line
        });
    } else {
        console.log('Skipping line (no match):', line);
    }
});

const fileContent = `const sajaSohakData = ${JSON.stringify(sajaSohakData, null, 4)};`;

fs.writeFileSync('saja_sohak_data.js', fileContent);
console.log(`Parsed ${sajaSohakData.length} entries.`);
