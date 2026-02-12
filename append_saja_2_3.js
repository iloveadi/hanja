
const fs = require('fs');
const path = require('path');

const targetFile = 'saja_sohak_data.js';
const filePath = path.join(__dirname, targetFile);

const section2Title = "2. 추원편 (追遠篇): 조상과 제사";
const section3Title = "3. 충효편 (忠孝篇): 나라와 부부";

const rawData2 = `
追遠報本 (추원보본) 하고,먼 조상을 추모하고 나의 근본에 보답하며
祭祀必誠 (제사필성) 하라,조상을 모시는 제사는 반드시 정성을 다하라.
非有先祖 (비유선조) 면,만약 선조께서 계시지 않았다면
我身曷生 (아신갈생) 이리오,내 몸이 어찌 세상에 태어날 수 있었으리오.
事親如此 (사친여차) 면,부모님 모시기를 이와 같이 정성껏 한다면
可謂孝矣 (가위효의) 니라,진정한 효도라고 말할 수 있느니라.
不能如此 (불능여차) 면,만약 이처럼 도리를 다하지 못한다면
禽獸無異 (금수무이) 니라,사람이라 해도 짐승과 다를 바가 없느니라.
`;

const rawData3 = `
學優則仕 (학우즉사) 하야,배움이 넉넉해지면 사회에 나아가 일을 하여
爲國盡忠 (위국진충) 하라,나라를 위해 자신의 충성을 다해야 한다.
敬信節用 (경신절용) 하고,일을 공경히 처리해 신뢰를 얻고 아껴 쓰며
愛民如子 (애민여자) 하라,백성 보살피기를 자식 사랑하듯 하라.
人倫之中 (인륜지중) 에,사람이 지켜야 할 여러 도리 가운데서도
忠孝爲本 (충효위본) 이니,나라에 대한 충성과 부모에 대한 효도가 근본이다.
孝當竭力 (효당갈력) 하고,효도를 할 때는 마땅히 모든 힘을 쏟아야 하며
忠則盡命 (충즉진명) 하라,충성을 할 때는 진심을 다해 소명을 다하라.
夫婦之倫 (부부지륜) 은,남편과 아내 사이의 인연과 도리는
二姓之合 (이성지합) 이라,서로 다른 두 가문이 만나 하나를 이룬 것이다.
內外有別 (내외유별) 하야,집안일과 바깥일에 서로의 역할을 존중하며
相敬如賓 (상경여빈) 하라,서로를 손님 대하듯 늘 공경하고 예의를 갖추라.
夫道和義 (부도화의) 하고,남편의 도리는 화목하고 의로운 것이며
婦德柔順 (부덕유순) 하야,아내의 덕은 부드럽고 순종적인 것이니
夫唱婦隨 (부창부수) 면,남편이 이끌고 아내가 잘 조화롭게 따르면
家道成矣 (가도성의) 리라,비로소 집안의 도리가 바로 서게 될 것이다.
`;

function parseData(raw, section) {
    const lines = raw.trim().split('\n');
    return lines.map(line => {
        const commaIndex = line.indexOf(',');
        if (commaIndex === -1) return null;

        const phrasePart = line.substring(0, commaIndex).trim();
        const translation = line.substring(commaIndex + 1).trim();

        const match = phrasePart.match(/^(.+)\s\((.+)\)\s*(.*)$/);

        let hanja = '';
        let reading = '';
        let suffix = '';

        if (match) {
            hanja = match[1].trim();
            reading = match[2].trim();
            suffix = match[3] ? match[3].trim() : '';
        } else {
            hanja = phrasePart;
        }

        const original_line = `${hanja}(${reading})${suffix ? suffix : ''}        ${translation}`;

        return {
            section: section,
            hanja: hanja,
            reading: reading,
            suffix: suffix,
            translation: translation,
            original_line: original_line
        };
    }).filter(item => item !== null);
}

try {
    const existingContent = fs.readFileSync(filePath, 'utf8');
    const dataContent = existingContent.substring(existingContent.indexOf('['), existingContent.lastIndexOf(']') + 1);
    let currentData = JSON.parse(dataContent);

    const items2 = parseData(rawData2, section2Title);
    const items3 = parseData(rawData3, section3Title);

    currentData.push(...items2);
    currentData.push(...items3);

    const newContent = `const sajaSohakData = ${JSON.stringify(currentData, null, 4)};\n`;
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`Successfully appended ${items2.length + items3.length} items to Saja Sohak data.`);

} catch (e) {
    console.error("Error updating file:", e);
}
