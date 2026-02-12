
const fs = require('fs');
const path = require('path');

const targetFile = 'saja_sohak_data.js';
const filePath = path.join(__dirname, targetFile);

const sectionTitle = "1-2. 조석 예절 (일상에서 정성을 다하는 법)";

const rawData = `
晨必先起 (신필선기) 하야,새벽에는 누구보다 먼저 일어나
必盥必漱 (필관필수) 하며,반드시 세수하고 입안을 깨끗이 헹구며,
昏定晨省 (혼정신성) 하고,저녁엔 잠자리를 살피고 새벽엔 안부를 여쭈며
冬溫夏凊 (동온하청) 하라,겨울엔 따뜻하게, 여름엔 시원하게 모셔야 한다.
父母呼我 (부모호아) 어시든,부모님이 나를 부르는 소리가 들리면
唯而趨進 (유이추진) 하고,곧바로 대답하며 기쁘게 달려 나가고,
父母使我 (부모사아) 어시든,부모님이 내게 일을 시키시거든
勿逆勿怠 (물역물태) 하라,거스르는 마음 없이 게으름 피우지 말라.
父母有命 (부모유명) 이어시든,부모님께서 일러주시는 말씀이 있을 땐
俯首敬聽 (부수경청) 하라,머리를 숙여 공경하는 마음으로 귀담아듣고,
坐命坐聽 (좌명좌청) 하고,앉아서 명하시면 나도 앉아서 듣고
立命立聽 (입명입청) 하라,서서 명하시면 나 또한 서서 들어야 한다.
父母出入 (부모출입) 이어시든,부모님이 나가시거나 들어오실 때면
每必起立 (매필기립) 하라,매번 반드시 자리에서 일어나 예의를 갖추라.
父母衣服 (부모의복) 을,부모님이 입으시는 소중한 옷가지는
勿踰勿踐 (물유물천) 하라,함부로 넘어 다니거나 밟지 말아야 한다.
父母有疾 (부모유질) 이어시든,부모님께서 몸이 편치 않아 앓으실 때면
憂而謀瘳 (우이모추) 하라,진심으로 걱정하며 나으실 방도를 정성껏 찾으라.
對案不食 (대안불식) 이어시든,상을 마주하고도 입맛이 없어 식사를 못 하시면
思得良饌 (사득양찬) 하라,어떻게 좋은 음식을 대접할지 깊이 고민하라.
出必告之 (출필곡지) 하고,밖으로 나갈 때는 반드시 행선지를 알리고
反必面之 (반필면지) 하라,돌아오면 곧바로 얼굴을 뵙고 인사를 드려라.
愼勿遠遊 (신물원유) 하고,부디 멀리 가서 부모님 걱정 끼치지 말고
遊必有方 (유필유방) 하라,놀러 가더라도 반드시 있는 곳을 분명히 하라.
出入門戶 (출입문호) 어든,집안 문을 드나들 때조차도
開閉必恭 (개폐필공) 하라,문을 여닫는 소리가 크지 않게 공손히 하라.
勿立門中 (물립문중) 하고,문 한가운데 서서 길을 막지 말고
勿坐房中 (물좌방중) 하라,방 한가운데 앉아 거만하게 굴지 말라.
`;

try {
    const existingContent = fs.readFileSync(filePath, 'utf8');
    const dataContent = existingContent.substring(existingContent.indexOf('['), existingContent.lastIndexOf(']') + 1);
    let currentData = JSON.parse(dataContent);

    const lines = rawData.trim().split('\n');
    lines.forEach(line => {
        const commaIndex = line.indexOf(',');
        if (commaIndex === -1) return;

        const phrasePart = line.substring(0, commaIndex).trim();
        const translation = line.substring(commaIndex + 1).trim();

        // Regex to capture Hanja, Reading, and Suffix
        // Matches: "Characters (Reading) Suffix"
        const match = phrasePart.match(/^(.+)\s\((.+)\)\s*(.*)$/);

        let hanja = '';
        let reading = '';
        let suffix = '';

        if (match) {
            hanja = match[1].trim();
            reading = match[2].trim();
            suffix = match[3] ? match[3].trim() : '';
        } else {
            console.warn("Could not parse line format:", phrasePart);
            hanja = phrasePart;
        }

        // Align Original Line visually 
        const original_line = `${hanja}(${reading})${suffix ? suffix : ''}        ${translation}`;

        currentData.push({
            section: sectionTitle,
            hanja: hanja,
            reading: reading,
            suffix: suffix,
            translation: translation,
            original_line: original_line
        });
    });

    const newContent = `const sajaSohakData = ${JSON.stringify(currentData, null, 4)};\n`;
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`Successfully appended ${lines.length} items to Saja Sohak data.`);

} catch (e) {
    console.error("Error updating file:", e);
}
