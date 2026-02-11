const fs = require('fs');

const HANJA_DATA_PATH = 'c:/@app-dev/web-hanja/hanja_data.js';

// User's explicit list (19 chars)
const userList = [
    '佳', '街', '가', '可', '歌', '加', '價', '假',
    '各', '角', '脚',
    '干', '間', '看',
    '渴', '甘', '減', '감', '感', '敢', '甲'
];
// Note: User wrote '가', '감' as hangul in the prompt? "佳 아름다울 가".
// Ah, prompt: "佳 아름다울 가 ... 甘 달 감 ...".
// My previous script added: 
// 佳, 街, 可, 歌, 加, 價, 假, 各, 角, 脚, 干, 間, 看, 渴, 甘, 減, 感, 敢, 甲
// that's 19 unique kanji.

const explicitKanji = new Set([
    '佳', '街', '可', '歌', '加', '價', '假',
    '各', '角', '脚',
    '干', '間', '看',
    '渴', '甘', '減', '感', '敢', '甲'
]);

try {
    let content = fs.readFileSync(HANJA_DATA_PATH, 'utf8');
    const match = content.match(/const hanjaData = \[([\s\S]*)\];/);
    if (!match) throw new Error("Format error");

    let hanjaData = eval(match[0].replace('const hanjaData = ', ''));

    // We want to KEEP:
    // 1. Level 8 (Base)
    // 2. Level 7 (Base)
    // 3. Any kanji in 'explicitKanji' (User approved)

    // We want to REMOVE:
    // 1. Level 6, 5, 4... that are NOT in 'explicitKanji'.(These were likely the fillers I added)

    // However, we must ensure we rely on the object's properties.
    // Also, duplicate handling: The explicit list was APPENDED. So we might have duplicates of 'Level 6' fillers and 'Explicit' ones.
    // Actually, my add script checked for duplicates before adding.
    // "if (hanjaData.find(h => h.kanji === char)) console.log('Skipping...')"
    // So if '各' (Level 6) was already in the filler list, it was NOT added again with the new (potentially different) metadata?
    // Wait, if it was in filler list, it was kept.
    // If it was NOT in filler list, it was added.
    // So 'hanjaData' contains: [Level8] + [Level7] + [Level6 Fillers] + [User Added (that weren't in fillers)]

    // So to cleanup:
    // Filter hanjaData:
    // Keep if (Level >= 7) OR (kanji in explicitKanji).
    // Note: Level 8 is highest? No, usually 8 is lowest (simplest), 1 is highest in proficiency tests.
    // But in my sorting/filtering logic earlier: "Level 8 + 7 = 803".
    // So Level 8 and 7 are the "Basic".
    // "High School" is usually 6, 5, 4...
    // So usually numeric Value: 8 > 7 > 6 ? No, 8th grade vs 1st grade. 8 is entry.
    // So "Level >= 7" numerically means 7, 8. (Assuming data uses 8, 7 integers).

    // Let's verify levels in data.
    // Level 8: 161
    // Level 7: 642
    // Level 6: ...

    const keptData = hanjaData.filter(h => {
        // Keep if strictly Level 7 or 8 (numeric)
        // OR if it is in the explicit list.

        const isCore = (h.level === 8 || h.level === 7);
        const isExplicit = explicitKanji.has(h.kanji);

        return isCore || isExplicit;
    });

    // Remove duplicates just in case (prefer the one with 'radical' if that matters, but they all should have it now or not)
    // Use a Map to dedup by Kanji
    const uniqueMap = new Map();
    keptData.forEach(h => {
        // If duplicate, overwrite? or keep first?
        // Let's keep first usually.
        if (!uniqueMap.has(h.kanji)) {
            uniqueMap.set(h.kanji, h);
        }
    });

    const finalData = Array.from(uniqueMap.values());

    // Check if we lost any explicit ones?
    // If '各' was a filler (Level 6), and we removed Level 6 fillers, but '各' is in explicit list.
    // My filter logic: "return isCore || isExplicit".
    // So '各' (Level 6) will be TRUE because isExplicit is true.
    // So it will be kept.
    // 'SomeOtherChar' (Level 6) NOT in explicit list will be FALSE. -> Removed.
    // This seems correct.

    console.log(`Original Count: ${hanjaData.length}`);
    console.log(`Filtered Count: ${finalData.length}`);

    // Sort? Standard order (Level 8 -> 7 -> others?) OR simple Korean alphabetical?
    // Let's sort by Level (descending: 8, 7...) then Reading?
    // Actually, user might prefer Reading order.
    // Existing list seemed roughly grouped.
    // Let's just keep roughly existing order, but maybe put Level 8/7 first?
    // Or just sort by reading (Ga-Na-Da) for easier lookups?
    // "가나다순" is standard.

    finalData.sort((a, b) => a.reading.localeCompare(b.reading));

    // Save
    const jsonContent = finalData.map(h => {
        return `    { kanji: '${h.kanji}', reading: '${h.reading}', meaning: '${h.meaning}', level: ${h.level}, strokeCount: ${h.strokeCount}, radical: '${h.radical}' }`;
    }).join(',\n');

    const fileContent = `const hanjaData = [\n${jsonContent}\n];\n`;
    fs.writeFileSync(HANJA_DATA_PATH, fileContent, 'utf8');
    console.log("Cleanup complete.");

} catch (e) {
    console.error(e);
}
