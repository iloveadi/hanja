
const fs = require('fs');
const path = require('path');

const targetFile = 'saja_sohak_data.js';
const filePath = path.join(__dirname, targetFile);

const section5Title = "5. 사생편 (師生篇): 스승과 제자";
const section6Title = "6. 붕우편 (朋友篇): 어른과 친구";

const rawData5 = `
事師如親 (사사여친) 하야,스승 섬기기를 부모님 모시듯 정성을 다해
必恭必敬 (필공필경) 하라,반드시 공손하고 공경하는 마음을 가져야 한다.
先生施敎 (선생시교) 어시든,선생님께서 배움의 길을 열어 가르침을 주시면
弟子是則 (제자시칙) 하라,제자는 그 가르침을 삶의 올바른 본보기로 삼으라.
夙興夜寐 (숙흥야매) 하야,아침 일찍 일어나고 밤늦게 잠자리에 들 때까지
勿懶讀書 (물라독서) 하라,책 읽고 공부하는 일에 게으름을 피우지 말라.
勤勉工夫 (근면공부) 면,스스로 부지런히 힘써 학문에 정진하면
父母悅之 (부모열지) 시니라,부모님께서 그 모습을 보시고 마음 깊이 기뻐하시느니라.
始習文字 (시습문자) 어든,처음 글자를 배우고 익히기 시작할 때부터
字畫楷正 (자획해정) 하라,글자 한 획 한 획을 정성 들여 바르고 또박또박 써라.
書冊狼藉 (서책낭자) 어든,책들이 여기저기 어지럽게 흩어져 있다면
每必整頓 (매필정돈) 하라,매번 잊지 말고 반드시 깨끗하게 정리정돈하라.
能孝能悌 (능효능제) 는,부모님께 효도하고 형제와 화목하게 지낼 수 있음은
莫非師恩 (막비사은) 이요,스승의 가르침이 아니었다면 불가능했을 큰 은혜이며,
能知能行 (능지능행) 은,세상을 아는 지혜와 이를 실천할 수 있는 힘은
總是師功 (총시사공) 이니라,모두가 스승께서 이끌어주신 공덕이니라.
`;

const rawData6 = `
長者慈幼 (장자자유) 하고,어른은 아랫사람을 사랑으로 보듬어 주고
幼者敬長 (유자경장) 하라,아랫사람은 어른을 공경하며 예우를 다하라.
長者之前 (장자지전) 엔,나보다 어른인 분의 앞에서는
進退必恭 (진퇴필공) 하라,나아가고 물러날 때 반드시 공손히 행동하라.
年長以倍 (연장이배) 어든,나이가 나보다 두 배 정도 많으신 분은
父以事之 (부이사지) 하고,부모님을 섬기듯 정성을 다해 모시고,
十年以長 (십년이장) 어든,나보다 열 살 정도 위이신 분은
兄以事之 (형이사지) 하라,친형을 대하듯 깍듯이 예로써 모셔라.
我敬人親 (아경인친) 이면,내가 다른 사람의 부모를 공경한다면
人敬我親 (인경아친) 하고,다른 사람도 나의 부모를 공경해 줄 것이며,
我敬人兄 (아경인형) 이면,내가 다른 사람의 형을 존중한다면
人敬我兄 (인경아형) 하리라,그 사람도 나의 형을 존중해 줄 것이라.
賓客來訪 (빈객래방) 이어든,손님이 나를 찾아와 방문하신다면
接待必誠 (접대필성) 하라,정성을 다해 따뜻하게 맞이하고 대접하라.
賓客不來 (빈객불래) 면,찾아오는 손님이 끊겨 발길이 뜸해지면
門戶寂寞 (문호적막) 이니라,그 집안의 기운이 쓸쓸하고 적막해지느니라.
人之在世 (인지재세) 에,사람이 이 세상을 살아가는 데 있어
不可無友 (불가무유) 니,마음 나눌 진정한 친구가 없어서는 안 되니,
以文會友 (이문회유) 하고,학문과 배움으로써 좋은 벗들을 모으고
以友輔仁 (이우보인) 하라,그 벗과 함께 어진 덕을 쌓도록 서로 도와라.
友其正人 (우기정인) 이면,바른 사람을 골라 친구로 사귄다면
我亦自正 (아역자정) 하고,나 또한 저절로 바른 길을 걷게 될 것이요,
從遊邪人 (종유사인) 이면,그릇된 길을 가는 자를 따라 어울리면
我亦自邪 (아역자사) 하리라,나 또한 자연스럽게 나쁜 길에 빠지게 되리라.
蓬生麻中 (봉생마중) 이면,굽어 자라는 쑥도 곧은 삼밭에서 자라면
不扶自直 (불부자직) 하고,붙잡아주지 않아도 스스로 곧게 자라나며,
白沙在泥 (백사재니) 면,하얀 모래라도 진흙 속에 섞여 있으면
不染自汚 (불염자오) 니라,물들이려 하지 않아도 저절로 더러워지느니라.
近墨者黑 (근묵자흑) 이요,먹을 가까이하는 사람은 검게 물들기 마련이고
近朱者赤 (근주자적) 이니,붉은빛을 가까이하는 사람은 붉게 변하기 마련이다.
居必擇隣 (거필택린) 하고,살 곳을 정할 때는 반드시 이웃을 살피고
就必有德 (취필유덕) 하라,나아갈 때는 반드시 덕이 있는 곳을 향하라.
擇而交之 (택이교지) 면,친구를 가려서 사귀면
有所補益 (유소보익) 하고,나에게 큰 도움과 보탬이 될 것이나,
不擇而交 (불택이교) 면,가리지 않고 함부로 사귀게 되면
反有害矣 (반유해의) 리라,오히려 나에게 해로운 결과만 따를 것이라.
朋友有過 (붕우유과) 어든,친구에게 잘못이나 허물이 보인다면
忠告善導 (충고선도) 하라,진심 어린 조언으로 올바르게 이끌어주라.
人無責友 (인무책유) 면,곁에 잘못을 꾸짖어 주는 친구가 없다면
易陷不義 (이함불의) 니라,쉽게 옳지 못한 일에 빠져들고 마느니라.
面讚我善 (면찬아선) 이면,내 앞에서 나의 장점만 늘어놓으며 칭찬하면
諂諛之人 (첨유지인) 이요,그것은 아첨하며 비위를 맞추는 사람이고,
面責我過 (면책아과) 면,내 앞에서 나의 잘못을 따끔하게 꾸짖어주면
剛直之人 (강직지인) 이니라,그야말로 마음이 곧고 강직한 사람이라 할 수 있다.
言而不信 (언이불신) 이면,말만 앞세우고 믿음을 주지 못하는 자는
非直之友 (비직지유) 니라,결코 정직하고 올바른 친구라 할 수 없느니라.
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

    const items5 = parseData(rawData5, section5Title);
    const items6 = parseData(rawData6, section6Title);

    currentData.push(...items5);
    currentData.push(...items6);

    const newContent = `const sajaSohakData = ${JSON.stringify(currentData, null, 4)};\n`;
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`Successfully appended ${items5.length + items6.length} items to Saja Sohak data.`);

} catch (e) {
    console.error("Error updating file:", e);
}
