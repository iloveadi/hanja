const fs = require('fs');

// 30 sections based on the user's images
const sections = [
    { id: "sec1", title: "우주의 섭리와 자연", range: "1~32자" },
    { id: "sec2", title: "기상과 지형의 신비", range: "33~64자" },
    { id: "sec3", title: "생태계와 고대 역사", range: "65~100자" },
    { id: "sec4", title: "성군의 통치와 평화", range: "101~136자" },
    { id: "sec5", title: "덕화의 영향력", range: "137~168자" },
    { id: "sec6", title: "신체와 효도", range: "169~200자" },
    { id: "sec7", title: "자기 성찰과 허물 고치기", range: "201~232자" },
    { id: "sec8", title: "지혜로운 삶의 태도", range: "233~264자" },
    { id: "sec9", title: "언행의 조심과 물림", range: "265~300자" },
    { id: "sec10", title: "포도와 스승 섬기기", range: "301~336자" },
    { id: "sec11", title: "덕행과 명예의 향기", range: "337~368자" },
    { id: "sec12", title: "배움의 시작과 자세", range: "369~400자" },
    { id: "sec13", title: "정치적 지혜와 국가 경영", range: "401~432자" },
    { id: "sec14", title: "가르침과 실천의 조화", range: "433~464자" },
    { id: "sec15", title: "인자함과 공적의 기록", range: "465~500자" },
    { id: "sec16", title: "제왕의 도성과 화려한 궁궐", range: "501~536자" },
    { id: "sec17", title: "궁궐의 화려함과 장식", range: "537~568자" },
    { id: "sec18", title: "자식의 보고와 보물", range: "569~600자" },
    { id: "sec19", title: "조정의 위엄과 신하의 도리", range: "601~632자" },
    { id: "sec20", title: "궁적의 가득과 역사적 명성", range: "633~664자" },
    { id: "sec21", title: "지혜와 용맹의 장수들", range: "665~700자" },
    { id: "sec22", title: "법도와 뛰어난 장수들", range: "701~736자" },
    { id: "sec23", title: "광활한 국토의 모습", range: "737~768자" },
    { id: "sec24", title: "성군의 통치와 자연의 조화", range: "769~800자" },
    { id: "sec25", title: "부지런한 삶과 추석의 기쁨", range: "801~832자" },
    { id: "sec26", title: "중용의 도리와 겸손", range: "833~864자" },
    { id: "sec27", title: "인행의 경계와 임상의 도리", range: "865~900자" },
    { id: "sec28", title: "자연 속의 은거와 소박한 즐거움", range: "901~936자" },
    { id: "sec29", title: "소박한 전원생활의 풍경", range: "937~968자" },
    { id: "sec30", title: "학문의 완성(종결)", range: "969~1000자" }
];

// Calculate character indices (each section has 4-char phrases)
const chapters = sections.map((sec, idx) => {
    const match = sec.range.match(/(\d+)~(\d+)자/);
    const startChar = parseInt(match[1]);
    const endChar = parseInt(match[2]);
    const startIndex = Math.ceil(startChar / 4);
    const endIndex = Math.ceil(endChar / 4);

    return {
        id: sec.id,
        title: sec.title,
        subtitle: sec.range,
        description: `${sec.title}에 관한 내용입니다.`,
        startIndex: startIndex,
        endIndex: endIndex
    };
});

console.log(JSON.stringify(chapters, null, 2));
