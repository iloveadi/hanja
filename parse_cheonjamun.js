const fs = require('fs');

const raw = fs.readFileSync('cheonjamun_raw.txt', 'utf8');
const lines = raw.split('\n').map(l => l.trim()).filter(l => l);

const entries = [];

function isHanja(str) {
    return /^[\u3400-\u4DBF\u4E00-\u9FFF]{4}$/.test(str.replace(/\s/g, ''));
}

function isHangeul(str) {
    return /^[가-힣]{4}$/.test(str.replace(/\s/g, ''));
}

for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Case 1: Tab separated inline (e.g. "Hanja Reading Translation")
    // Some lines in raw text are: "Hanja \t Reading \t Translation"
    // Or just spaces: "Hanja Reading Translation" -- risky split by space

    // Let's look at the structure.
    // "恭惟鞠養 豈敢毁傷\t 공유국양 기감훼상\t살피고 길러 주신 것을..."
    // This line has 8 chars! The user paste has 8-char blocks sometimes.

    // Check if line has tab
    if (line.includes('\t')) {
        const parts = line.split('\t').map(s => s.trim());
        if (parts.length >= 3) {
            // Might be 8 char block?
            const hanjaPart = parts[0].replace(/\s/g, '');
            const readingPart = parts[1].replace(/\s/g, '');
            const transPart = parts[2];

            if (hanjaPart.length === 8) {
                // Split into two 4-char entries
                entries.push({
                    hanja: hanjaPart.substring(0, 4),
                    reading: readingPart.substring(0, 4),
                    translation: transPart // Translation might apply to both or first half? 
                    // Usually 8-char lines are coupelets.
                    // Let's just keep them as 8 chars?
                    // No, standard is 4.
                    // But translation usually covers the full sentences (8 chars).
                    // If I split, I duplicate translation? Or split translation?
                    // "살피고 길러 주신 것을 ... 어찌 함부로..."
                    // Hard to split translation.
                    // Maybe keep as 8 char entry?
                    // Saja Sohaka was 4. 
                    // Let's store as 8 for now if it comes as 8.
                    // Actually, let's treat it as a special "couplet" entry.
                });

                // Add the whole thing
                entries.push({
                    hanja: hanjaPart.substring(0, 4),
                    reading: readingPart.substring(0, 4),
                    translation: transPart,
                    type: 'couplet_first'
                });
                entries.push({
                    hanja: hanjaPart.substring(4, 8),
                    reading: readingPart.substring(4, 8),
                    translation: "...", // Placeholder or empty
                    type: 'couplet_second'
                });
                // Wait, display logic handles 4 chars.
                // If I have 8 chars, maybe I should just display 8 chars in one card?
                // The requested Cheonjamun usually is 4 chars.
                // Let's stick to 4 chars.
                // For the translation, I'll attach it to the first one, or better verify manually.

                // Let's just store exactly what we parsed and handle display later.
                // Actually, looking at raw text:
                // "天地玄黃 宇宙洪荒" -> 8 chars on one line
                // " 천지현황 우주홍황" -> reading on next
                // "하늘은 검고..." -> translation on next

                // So the block is 8 chars.
                // I should consume lines.
                continue;
            }
        }
    }

    // New parsing logic for the 3-line blocks (8 chars each line)
    // Line 1: 8 Hanja (with spaces)
    // Line 2: 8 Hangul (with spaces)
    // Line 3: Translation

    const cleanLine = line.replace(/\s/g, '');
    if (cleanLine.length === 8 && isHanja(cleanLine.substring(0, 4))) {
        // It's a Hanja line.
        const hanja8 = cleanLine;

        // Look for Reading
        let reading8 = '';
        let translation = '';

        let j = i + 1;
        if (j < lines.length) {
            const nextLine = lines[j].replace(/\s/g, '');
            if (nextLine.length === 8 && isHangeul(nextLine.substring(0, 4))) {
                reading8 = nextLine;
                j++; // Consumed reading

                // Translation
                if (j < lines.length && !isHanja(lines[j].replace(/\s/g, '').substring(0, 4))) {
                    translation = lines[j];
                    j++;
                }
            }
        }

        if (reading8) {
            // We have a set.
            // Split into two 4-char entries?
            // "天地玄黃" (Heaven Earth Black Yellow)
            // "宇宙洪荒" (Universe Cosmos Vast Rough)
            // Translation: "하늘은 검고 땅은 누르며, 우주는 넓고 거칠다."
            // The translation has a comma usually separating the two concepts.
            // Let's try to split translation by comma if possible, else just duplicate.

            const partsHanja = [hanja8.substring(0, 4), hanja8.substring(4, 8)];
            const partsReading = [reading8.substring(0, 4), reading8.substring(4, 8)];

            let partsTrans = [translation, ""];
            if (translation.includes(',')) {
                const commaIdx = translation.indexOf(',');
                partsTrans[0] = translation.substring(0, commaIdx + 1).trim();
                partsTrans[1] = translation.substring(commaIdx + 1).trim();
            } else if (translation.includes('하고')) {
                // heuristic split
            }

            // Actually, for Cheonjamun, displaying 8 chars (a couplet) is often better context.
            // But my UI is designed for 4 chars (Saja Sohaka).
            // Let's produce 4-char entries.

            entries.push({
                hanja: partsHanja[0],
                reading: partsReading[0],
                translation: partsTrans[0]
            });
            entries.push({
                hanja: partsHanja[1],
                reading: partsReading[1],
                translation: partsTrans[1] || "(이어짐)"
            });

            i = j - 1; // Update outer loop index
            continue;
        }
    }

    // Fallback for Tab separated lines "恭惟鞠養 豈敢毁傷	 공유국양 기감훼상	살피고 길러..."
    if (line.includes('\t')) {
        const parts = line.split('\t').map(s => s.trim());
        // parts[0] = 8 hanja
        // parts[1] = 8 reading
        // parts[2] = translation
        if (parts.length >= 3) {
            const h = parts[0].replace(/\s/g, '');
            const r = parts[1].replace(/\s/g, '');
            const t = parts[2];

            entries.push({
                hanja: h.substring(0, 4),
                reading: r.substring(0, 4),
                translation: t // Just put full translation on first?
            });
            entries.push({
                hanja: h.substring(4, 8),
                reading: r.substring(4, 8),
                translation: "..." // On second
            });
        }
    }
}

const outputContent = `const cheonjamunData = ${JSON.stringify(entries, null, 4)};`;
fs.writeFileSync('cheonjamun_data.js', outputContent);
console.log(`Parsed ${entries.length} entries.`);
