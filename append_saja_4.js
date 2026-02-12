
const fs = require('fs');
const path = require('path');

const targetFile = 'saja_sohak_data.js';
const filePath = path.join(__dirname, targetFile);

const sectionTitle = "4. 우애편 (友愛篇): 형제와 자매";

const rawData = `
兄弟姉妹 (형제자매) 는,형제와 자매는 부모님의
同氣而生 (동기이생) 하니,같은 기운을 이어받아 태어난 사이이니,
兄友弟恭 (형우제공) 하야,형은 동생을 아끼고 동생은 형을 받들며
不敢怨怒 (불감원노) 하라,감히 서로 원망하거나 화내지 말아야 한다.
骨肉雖分 (골육수분) 이나,뼈와 살은 비록 나뉘어 있으나
本生一氣 (본생일기) 요,본래 부모님의 한 기운에서 태어났으며,
形體雖異 (형체수이) 나,겉모습과 몸은 비록 다르지만
素受一血 (소수일혈) 이니라,본디 부모님의 같은 피를 받았느니라.
比之於木 (비지어목) 이면,이를 나무에 비유하자면
同根異枝 (동근이지) 요,뿌리는 같으나 가지가 다른 것과 같고,
比之於水 (비지어수) 면,이를 물에 비유하자면
同源異流 (동원이류) 니라,근원은 같으나 흐르는 줄기가 다른 것과 같네.
兄弟怡怡 (형제이이) 하야,형제는 서로 화목하고 즐겁게 지내며
行則雁行 (행즉안행) 하고,길을 갈 때는 기러기 떼처럼 차례를 지키고,
寢則連衾 (침즉연금) 하며,잠을 잘 때는 이불을 나란히 덮으며
食則同牀 (식즉동상) 하라,밥을 먹을 때는 한 상에서 함께 먹어라.
分毋求多 (분무구다) 하고,몫을 나눌 때 더 많이 가지려 욕심내지 말고
有無相通 (유무상통) 하라,있는 것과 없는 것을 서로 나누어 써라.
私其衣食 (사기의식) 이면,입을 것과 먹을 것을 제 욕심만 채워 아낀다면
夷狄之徒 (이적지도) 니라,그것은 짐승이나 오랑캐와 다를 바 없느니라.
兄無衣服 (형무의복) 이면,형에게 입을 옷이 없다면
弟必獻之 (제필헌지) 하고,동생은 반드시 자기 옷을 내어주고,
弟無飮食 (제무음식) 이면,동생에게 먹을 음식이 없다면
兄必與之 (형필여지) 하라,형은 반드시 자기 음식을 나누어 주어라.
一杯之水 (일배지수) 라도,한 잔의 물이라 할지라도
必分而飮 (필분이음) 하고,반드시 나누어 마시고,
一粒之食 (일립지식) 이라도,한 알의 곡식이라 할지라도
必分而食 (필분이식) 하라,반드시 나누어 먹어야 한다.
兄雖責我 (형수책아) 나,형이 비록 나를 꾸짖더라도
莫敢抗怒 (막감항노) 하고,감히 맞서서 화내지 말 것이며,
弟雖有過 (제수유과) 나,동생이 비록 잘못을 저질렀더라도
須勿聲責 (수물성책) 하라,모름지기 큰 소리로 꾸짖지 말라.
兄弟有善 (형제유선) 이면,형제에게 좋은 일이 생기면
必譽于外 (필예우외) 하고,반드시 밖으로 널리 칭찬해 주고,
兄弟有失 (형제유실) 이면,형제에게 허물이 있다면
隱而勿揚 (은이물양) 하라,감싸주고 덮어주어 밖으로 드러내지 말라.
兄弟有難 (형제유난) 이면,형제에게 어려운 일이 생기면
悶而思救 (민이사구) 하라,함께 고민하며 도울 방법을 찾아내라.
兄能如此 (형능여차) 면,형이 이처럼 동생을 아끼고 이끌어주면
弟亦效之 (제역효지) 리라,동생 또한 그 모습을 본받게 될 것이라.
我有歡樂 (아유환락) 이면,나에게 기쁘고 즐거운 일이 있으면
兄弟亦樂 (형제역락) 하고,형제 또한 함께 즐거워하고,
我有憂患 (아유우환) 이면,나에게 근심과 걱정이 생기면
兄弟亦憂 (형제역우) 하라,형제 또한 함께 걱정하며 마음을 나누라.
雖有他親 (수유타친) 이나,비록 다른 친척들이 많이 있다고 하나
豈若兄弟 (기약형제) 리오,어찌 형제간의 두터운 정과 같겠는가.
兄弟和睦 (형제화목) 이면,형제들이 서로 화목하게 잘 지내면
父母喜之 (부모희지) 시니라,부모님께서 그것을 가장 기뻐하시느니라.
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

    const items = parseData(rawData, sectionTitle);

    currentData.push(...items);

    const newContent = `const sajaSohakData = ${JSON.stringify(currentData, null, 4)};\n`;
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`Successfully appended ${items.length} items to Saja Sohak data.`);

} catch (e) {
    console.error("Error updating file:", e);
}
