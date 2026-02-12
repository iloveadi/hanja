
const fs = require('fs');
const path = require('path');

const targetFile = 'saja_sohak_data.js';
const filePath = path.join(__dirname, targetFile);

const sectionTitle = "1-3. 신체와 명예 (나를 아끼고 부모님을 빛내는 길)";

const rawData = `
行勿慢步 (행물만보) 하고,길을 걸을 때는 거만하게 걷지 않으며
坐勿倚身 (좌물의신) 하라,앉을 때에도 몸을 비스듬히 기대지 말라.
口勿雜談 (구물잡담) 하고,입으로는 실없는 잡담을 삼가고
手勿雜戱 (수물잡희) 하라,손으로는 장난스러운 행동을 하지 말라.
膝前勿坐 (슬전물좌) 하고,부모님 무릎 바로 앞에 바짝 앉지 말고
親面勿仰 (친면물앙) 하라,부모님의 얼굴을 똑바로 치켜뜨고 보지 말라.
須勿放笑 (수물방소) 하고,모름지기 입을 크게 벌려 함부로 웃지 말며
亦勿高聲 (역물고성) 하라,또한 목소리를 높여 크게 말하지 말아야 한다.
侍坐父母 (시좌부모) 어든,부모님을 곁에 모시고 앉아 있을 때는
勿怒責人 (물노책인) 하라,화를 내며 다른 사람을 꾸짖지 말라.
侍坐親前 (시좌친전) 이어든,부모님 앞에 모시고 앉아 있을 때는
勿踞勿臥 (물거물와) 하라,다리를 뻗고 걸터앉거나 눕지 말라.
獻物父母 (헌물부모) 어든,부모님께 물건을 올릴 때에는
跪而進之 (궤이진지) 하라,공경히 꿇어앉아서 정중히 드려라.
與我飮食 (여아음식) 이어시든,부모님께서 내게 음식을 주시거든
跪而受之 (궤이수지) 하라,공손히 꿇어앉아서 감사히 받아라.
器有飮食 (기유음식) 이라도,그릇에 맛난 음식이 담겨 있더라도
不與勿食 (불여물식) 하라,먼저 권해주시지 않으면 먹지 말라.
若得美味 (약득미미) 어든,혹시라도 맛있는 음식을 얻게 되면
歸獻父母 (귀헌부모)하라,집으로 가져가 부모님께 먼저 대접하라.
衣服雖惡 (의복수악) 이나,옷이 비록 낡고 마음에 들지 않아도
與之必著 (여지필착) 하라,부모님이 주신 것이라면 반드시 입어라.
飮食雖厭 (음식수염) 이나,음식이 비록 먹기 싫고 입에 써도
與之必食 (여지필식) 하라,부모님이 챙겨주신 것이라면 반드시 먹어라.
父母無衣 (부모무의) 어시든,부모님 입으실 옷이 넉넉지 않다면
勿思我衣 (물사아의) 하며,내가 입을 새 옷을 탐내지 말 것이며,
父母無食 (부모무식) 이어시든,부모님 드실 음식이 부족하다면
勿思我食 (물사아식) 하라,내가 먹을 좋은 음식을 생각지 말라.
身體髮膚 (신체발부) 를,부모님께 받은 몸과 머리카락, 피부를
勿毁勿傷 (물훼물상) 하라,함부로 훼손하거나 다치게 하지 말라.
衣服帶靴 (의복대화) 를,내가 입는 옷과 허리띠, 신발 등을
勿失勿裂 (물실물렬) 하라,잃어버리거나 찢어지지 않게 아껴라.
父母愛之 (부모애지) 어시든,부모님이 나를 사랑해 주신다면
喜而勿忘 (희이물망) 하라,기쁜 마음으로 그 사랑을 잊지 말고,
父母責之 (부모책지) 어시든,부모님이 나를 꾸짖으신다면
反省勿怨 (반성물원) 하라,스스로를 돌아보며 원망하는 마음을 갖지 말라.
勿登高樹 (물등고수) 하라,위험하게 높은 나무에 올라가지 말라
父母憂之 (부모우지) 시니라,부모님께서 행여 다칠까 걱정하시느니라.
勿泳深淵 (물영심연) 하라,함부로 깊은 물에서 헤엄치지 말라
父母念之 (부모념지) 시니라,부모님께서 늘 노심초사 염려하시느니라.
勿與人鬪 (물여인투) 하라,다른 사람과 다투거나 싸우지 말라
父母不安 (부모불안) 이시니라,부모님의 마음이 편치 않고 불안하시느니라.
室堂有塵 (실당유진) 이어든,거실과 방에 먼지가 쌓여 있거든
常必灑掃 (상필쇄소) 하라,항상 깨끗이 물 뿌리고 정성껏 청소하라.
事必稟行 (사필품행) 하고,무슨 일이든 반드시 여쭈어보고 행하며
無敢自專 (무감자전) 하라,감히 자기 고집대로 마음대로 결정하지 말라.
一欺父母 (일기부모) 면,단 한 번이라도 부모님을 속인다면
其罪如山 (기죄여산) 이니라,그 정직하지 못한 죄가 산처럼 크니라.
雪裏求筍 (설리구순) 은,한겨울 눈 속에서 죽순을 구한 것은
孟宗之孝 (맹종지효) 요,효자 맹종의 지극한 정성이었고,
剖氷得鯉 (부빙득리) 는,얼음을 깨고 잉어를 얻은 것은
王祥之孝 (왕상지효) 니라,효자 왕상의 이름 높은 효심이었느니라.
我身能賢 (아신능현) 이면,내 몸과 행실이 어질고 훌륭하면
譽及父母 (예급부모) 니라,그 명예와 기쁨이 부모님께 이르고,
我身不賢 (아신불현) 이면,내가 바르게 행동하지 못하고 어질지 못하면
辱及父母 (욕급부모) 니라,그 욕됨과 부끄러움이 부모님께 미치느니라.
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
