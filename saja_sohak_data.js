/**
 * 사람을 사랑하는 길부터 세상을 다스리는 법까지, 시대를 초월한 삶의 지침서
 * 
 * 본 해석은 특정 출판물의 저작권을 침해하지 않도록 표준 주해를 바탕으로 새롭게 작성되었습니다.
 */

// 사자소학 섹션 정보
const sajaSohakChapters = [
    { id: "sec1", title: "1-1. 효행편", subtitle: "부모 은총 (부모님의 깊은 사랑)", description: "1-1. 효행편: 부모 은총 (부모님의 깊은 사랑)에 관한 내용입니다." },
    { id: "sec2", title: "1-2. 효행편", subtitle: "조석 예절 (일상에서 정성을 다하는 법)", description: "1-2. 효행편: 조석 예절 (일상에서 정성을 다하는 법)에 관한 내용입니다." },
    { id: "sec3", title: "1-3. 효행편", subtitle: "신체와 명예 (나를 아끼고 부모님을 빛내는 길)", description: "1-3. 효행편: 신체와 명예 (나를 아끼고 부모님을 빛내는 길)에 관한 내용입니다." },
    { id: "sec4", title: "2. 추원편 (追遠篇)", subtitle: "조상과 제사", description: "2. 추원편 (追遠篇): 조상과 제사에 관한 내용입니다." },
    { id: "sec5", title: "3. 충효편 (忠孝篇)", subtitle: "나라와 부부", description: "3. 충효편 (忠孝篇): 나라와 부부에 관한 내용입니다." },
    { id: "sec6", title: "4. 우애편 (友愛篇)", subtitle: "형제와 자매", description: "4. 우애편 (友愛篇): 형제와 자매에 관한 내용입니다." },
    { id: "sec7", title: "5. 사생편 (師生篇)", subtitle: "스승과 제자", description: "5. 사생편 (師生篇): 스승과 제자에 관한 내용입니다." },
    { id: "sec8", title: "6. 붕우편 (朋友篇)", subtitle: "어른과 친구", description: "6. 붕우편 (朋友篇): 어른과 친구에 관한 내용입니다." },
    { id: "sec9", title: "7-1. 수신편", subtitle: "오륜과 삼강 (인간 사회의 다섯 줄기와 세 기둥)", description: "7-1. 수신편: 오륜과 삼강 (인간 사회의 다섯 줄기와 세 기둥)에 관한 내용입니다." },
    { id: "sec10", title: "7-2. 수신편", subtitle: "구용과 구사 (품격 있는 몸가짐과 지혜로운 생각)", description: "7-2. 수신편: 구용과 구사 (품격 있는 몸가짐과 지혜로운 생각)에 관한 내용입니다." },
    { id: "sec11", title: "7-3. 수신편", subtitle: "처세와 인과 (지혜로운 삶과 배움의 마무리)", description: "7-3. 수신편: 처세와 인과 (지혜로운 삶과 배움의 마무리)에 관한 내용입니다." }
];

const sajaSohakData = [
    {
        "section": "1-1. 효행편: 부모 은총 (부모님의 깊은 사랑)",
        "hanja": "父生我身",
        "reading": "부생아신",
        "suffix": "하시고",
        "translation": "아버지는 내 생명의 근원이 되어 주시고",
        "original_line": "父生我身(부생아신)        아버지는 내 생명의 근원이 되어 주시고"
    ,
        "index": "1",
        "chapter": "sec1"
    },
    {
        "section": "1-1. 효행편: 부모 은총 (부모님의 깊은 사랑)",
        "hanja": "母鞠吾身",
        "reading": "모국오신",
        "suffix": "이로다",
        "translation": "어머니는 정성으로 내 몸을 길러 주셨네.",
        "original_line": "母鞠吾身(모국오신)        어머니는 정성으로 내 몸을 길러 주셨네."
    ,
        "index": "2",
        "chapter": "sec1"
    },
    {
        "section": "1-1. 효행편: 부모 은총 (부모님의 깊은 사랑)",
        "hanja": "腹以懷我",
        "reading": "복이회아",
        "suffix": "하시고",
        "translation": "열 달 동안 배 속 가득 나를 품어 주시고",
        "original_line": "腹以懷我(복이회아)        열 달 동안 배 속 가득 나를 품어 주시고"
    ,
        "index": "3",
        "chapter": "sec1"
    },
    {
        "section": "1-1. 효행편: 부모 은총 (부모님의 깊은 사랑)",
        "hanja": "乳以哺我",
        "reading": "유이포아",
        "suffix": "로다",
        "translation": "따뜻한 젖으로 나를 먹여 키워 주셨도다.",
        "original_line": "乳以哺我(유이포아)        따뜻한 젖으로 나를 먹여 키워 주셨도다."
    ,
        "index": "4",
        "chapter": "sec1"
    },
    {
        "section": "1-1. 효행편: 부모 은총 (부모님의 깊은 사랑)",
        "hanja": "以衣溫我",
        "reading": "이의온아",
        "suffix": "하시고",
        "translation": "예쁜 옷 입혀 나를 따뜻하게 감싸 주시고",
        "original_line": "以衣溫我(이의온아)        예쁜 옷 입혀 나를 따뜻하게 감싸 주시고"
    ,
        "index": "5",
        "chapter": "sec1"
    },
    {
        "section": "1-1. 효행편: 부모 은총 (부모님의 깊은 사랑)",
        "hanja": "以食飽我",
        "reading": "이식포아",
        "suffix": "로다",
        "translation": "맛있는 음식으로 내 배를 든든하게 채워 주셨네.",
        "original_line": "以食飽我(이식포아)        맛있는 음식으로 내 배를 든든하게 채워 주셨네."
    ,
        "index": "6",
        "chapter": "sec1"
    },
    {
        "section": "1-1. 효행편: 부모 은총 (부모님의 깊은 사랑)",
        "hanja": "恩高如天",
        "reading": "은고여천",
        "suffix": "하시니",
        "translation": "그 은혜의 높음은 끝없는 하늘과 같고",
        "original_line": "恩高如天(은고여천)하시니        그 은혜의 높음은 끝없는 하늘과 같고"
    ,
        "index": "7",
        "chapter": "sec1"
    },
    {
        "section": "1-1. 효행편: 부모 은총 (부모님의 깊은 사랑)",
        "hanja": "德厚似地",
        "reading": "덕후사지",
        "suffix": "하시니",
        "translation": "그 사랑의 두터움은 넓은 대지와 같으니",
        "original_line": "德厚似地(덕후사지)하시니        그 사랑의 두터움은 넓은 대지와 같으니"
    ,
        "index": "8",
        "chapter": "sec1"
    },
    {
        "section": "1-1. 효행편: 부모 은총 (부모님의 깊은 사랑)",
        "hanja": "爲人子者",
        "reading": "위인자자",
        "suffix": "가",
        "translation": "사람의 자식으로 태어난 사람이라면",
        "original_line": "爲人子者(위인자자)가        사람의 자식으로 태어난 사람이라면"
    ,
        "index": "9",
        "chapter": "sec1"
    },
    {
        "section": "1-1. 효행편: 부모 은총 (부모님의 깊은 사랑)",
        "hanja": "曷不爲孝",
        "reading": "갈불위효",
        "suffix": "리오",
        "translation": "어찌 효도하는 마음을 갖지 않으리오.",
        "original_line": "曷不爲孝(갈불위효)리오        어찌 효도하는 마음을 갖지 않으리오."
    ,
        "index": "10",
        "chapter": "sec1"
    },
    {
        "section": "1-1. 효행편: 부모 은총 (부모님의 깊은 사랑)",
        "hanja": "欲報其德",
        "reading": "욕보기덕",
        "suffix": "인댄",
        "translation": "그 크신 덕을 조금이라도 갚으려 하니",
        "original_line": "欲報其德(욕보기덕)인댄        그 크신 덕을 조금이라도 갚으려 하니"
    ,
        "index": "11",
        "chapter": "sec1"
    },
    {
        "section": "1-1. 효행편: 부모 은총 (부모님의 깊은 사랑)",
        "hanja": "昊天罔極",
        "reading": "호천망극",
        "suffix": "이로다",
        "translation": "넓고 높은 하늘처럼 다함이 없구나.",
        "original_line": "昊天罔極(호천망극)이로다        넓고 높은 하늘처럼 다함이 없구나."
    ,
        "index": "12",
        "chapter": "sec1"
    },
    {
        "section": "1-2. 효행편: 조석 예절 (일상에서 정성을 다하는 법)",
        "hanja": "晨必先起",
        "reading": "신필선기",
        "suffix": "하야",
        "translation": "새벽에는 누구보다 먼저 일어나",
        "original_line": "晨必先起(신필선기)하야        새벽에는 누구보다 먼저 일어나"
    ,
        "index": "13",
        "chapter": "sec2"
    },
    {
        "section": "1-2. 효행편: 조석 예절 (일상에서 정성을 다하는 법)",
        "hanja": "必盥必漱",
        "reading": "필관필수",
        "suffix": "하며",
        "translation": "반드시 세수하고 입안을 깨끗이 헹구며,",
        "original_line": "必盥必漱(필관필수)하며        반드시 세수하고 입안을 깨끗이 헹구며,"
    ,
        "index": "14",
        "chapter": "sec2"
    },
    {
        "section": "1-2. 효행편: 조석 예절 (일상에서 정성을 다하는 법)",
        "hanja": "昏定晨省",
        "reading": "혼정신성",
        "suffix": "하고",
        "translation": "저녁엔 잠자리를 살피고 새벽엔 안부를 여쭈며",
        "original_line": "昏定晨省(혼정신성)하고        저녁엔 잠자리를 살피고 새벽엔 안부를 여쭈며"
    ,
        "index": "15",
        "chapter": "sec2"
    },
    {
        "section": "1-2. 효행편: 조석 예절 (일상에서 정성을 다하는 법)",
        "hanja": "冬溫夏凊",
        "reading": "동온하청",
        "suffix": "하라",
        "translation": "겨울엔 따뜻하게, 여름엔 시원하게 모셔야 한다.",
        "original_line": "冬溫夏凊(동온하청)하라        겨울엔 따뜻하게, 여름엔 시원하게 모셔야 한다."
    ,
        "index": "16",
        "chapter": "sec2"
    },
    {
        "section": "1-2. 효행편: 조석 예절 (일상에서 정성을 다하는 법)",
        "hanja": "父母呼我",
        "reading": "부모호아",
        "suffix": "어시든",
        "translation": "부모님이 나를 부르는 소리가 들리면",
        "original_line": "父母呼我(부모호아)어시든        부모님이 나를 부르는 소리가 들리면"
    ,
        "index": "17",
        "chapter": "sec2"
    },
    {
        "section": "1-2. 효행편: 조석 예절 (일상에서 정성을 다하는 법)",
        "hanja": "唯而趨進",
        "reading": "유이추진",
        "suffix": "하고",
        "translation": "곧바로 대답하며 기쁘게 달려 나가고,",
        "original_line": "唯而趨進(유이추진)하고        곧바로 대답하며 기쁘게 달려 나가고,"
    ,
        "index": "18",
        "chapter": "sec2"
    },
    {
        "section": "1-2. 효행편: 조석 예절 (일상에서 정성을 다하는 법)",
        "hanja": "父母使我",
        "reading": "부모사아",
        "suffix": "어시든",
        "translation": "부모님이 내게 일을 시키시거든",
        "original_line": "父母使我(부모사아)어시든        부모님이 내게 일을 시키시거든"
    ,
        "index": "19",
        "chapter": "sec2"
    },
    {
        "section": "1-2. 효행편: 조석 예절 (일상에서 정성을 다하는 법)",
        "hanja": "勿逆勿怠",
        "reading": "물역물태",
        "suffix": "하라",
        "translation": "거스르는 마음 없이 게으름 피우지 말라.",
        "original_line": "勿逆勿怠(물역물태)하라        거스르는 마음 없이 게으름 피우지 말라."
    ,
        "index": "20",
        "chapter": "sec2"
    },
    {
        "section": "1-2. 효행편: 조석 예절 (일상에서 정성을 다하는 법)",
        "hanja": "父母有命",
        "reading": "부모유명",
        "suffix": "이어시든",
        "translation": "부모님께서 일러주시는 말씀이 있을 땐",
        "original_line": "父母有命(부모유명)이어시든        부모님께서 일러주시는 말씀이 있을 땐"
    ,
        "index": "21",
        "chapter": "sec2"
    },
    {
        "section": "1-2. 효행편: 조석 예절 (일상에서 정성을 다하는 법)",
        "hanja": "俯首敬聽",
        "reading": "부수경청",
        "suffix": "하라",
        "translation": "머리를 숙여 공경하는 마음으로 귀담아듣고,",
        "original_line": "俯首敬聽(부수경청)하라        머리를 숙여 공경하는 마음으로 귀담아듣고,"
    ,
        "index": "22",
        "chapter": "sec2"
    },
    {
        "section": "1-2. 효행편: 조석 예절 (일상에서 정성을 다하는 법)",
        "hanja": "坐命坐聽",
        "reading": "좌명좌청",
        "suffix": "하고",
        "translation": "앉아서 명하시면 나도 앉아서 듣고",
        "original_line": "坐命坐聽(좌명좌청)하고        앉아서 명하시면 나도 앉아서 듣고"
    ,
        "index": "23",
        "chapter": "sec2"
    },
    {
        "section": "1-2. 효행편: 조석 예절 (일상에서 정성을 다하는 법)",
        "hanja": "立命立聽",
        "reading": "입명입청",
        "suffix": "하라",
        "translation": "서서 명하시면 나 또한 서서 들어야 한다.",
        "original_line": "立命立聽(입명입청)하라        서서 명하시면 나 또한 서서 들어야 한다."
    ,
        "index": "24",
        "chapter": "sec2"
    },
    {
        "section": "1-2. 효행편: 조석 예절 (일상에서 정성을 다하는 법)",
        "hanja": "父母出入",
        "reading": "부모출입",
        "suffix": "이어시든",
        "translation": "부모님이 나가시거나 들어오실 때면",
        "original_line": "父母出入(부모출입)이어시든        부모님이 나가시거나 들어오실 때면"
    ,
        "index": "25",
        "chapter": "sec2"
    },
    {
        "section": "1-2. 효행편: 조석 예절 (일상에서 정성을 다하는 법)",
        "hanja": "每必起立",
        "reading": "매필기립",
        "suffix": "하라",
        "translation": "매번 반드시 자리에서 일어나 예의를 갖추라.",
        "original_line": "每必起立(매필기립)하라        매번 반드시 자리에서 일어나 예의를 갖추라."
    ,
        "index": "26",
        "chapter": "sec2"
    },
    {
        "section": "1-2. 효행편: 조석 예절 (일상에서 정성을 다하는 법)",
        "hanja": "父母衣服",
        "reading": "부모의복",
        "suffix": "을",
        "translation": "부모님이 입으시는 소중한 옷가지는",
        "original_line": "父母衣服(부모의복)을        부모님이 입으시는 소중한 옷가지는"
    ,
        "index": "27",
        "chapter": "sec2"
    },
    {
        "section": "1-2. 효행편: 조석 예절 (일상에서 정성을 다하는 법)",
        "hanja": "勿踰勿踐",
        "reading": "물유물천",
        "suffix": "하라",
        "translation": "함부로 넘어 다니거나 밟지 말아야 한다.",
        "original_line": "勿踰勿踐(물유물천)하라        함부로 넘어 다니거나 밟지 말아야 한다."
    ,
        "index": "28",
        "chapter": "sec2"
    },
    {
        "section": "1-2. 효행편: 조석 예절 (일상에서 정성을 다하는 법)",
        "hanja": "父母有疾",
        "reading": "부모유질",
        "suffix": "이어시든",
        "translation": "부모님께서 몸이 편치 않아 앓으실 때면",
        "original_line": "父母有疾(부모유질)이어시든        부모님께서 몸이 편치 않아 앓으실 때면"
    ,
        "index": "29",
        "chapter": "sec2"
    },
    {
        "section": "1-2. 효행편: 조석 예절 (일상에서 정성을 다하는 법)",
        "hanja": "憂而謀瘳",
        "reading": "우이모추",
        "suffix": "하라",
        "translation": "진심으로 걱정하며 나으실 방도를 정성껏 찾으라.",
        "original_line": "憂而謀瘳(우이모추)하라        진심으로 걱정하며 나으실 방도를 정성껏 찾으라."
    ,
        "index": "30",
        "chapter": "sec2"
    },
    {
        "section": "1-2. 효행편: 조석 예절 (일상에서 정성을 다하는 법)",
        "hanja": "對案不食",
        "reading": "대안불식",
        "suffix": "이어시든",
        "translation": "상을 마주하고도 입맛이 없어 식사를 못 하시면",
        "original_line": "對案不食(대안불식)이어시든        상을 마주하고도 입맛이 없어 식사를 못 하시면"
    ,
        "index": "31",
        "chapter": "sec2"
    },
    {
        "section": "1-2. 효행편: 조석 예절 (일상에서 정성을 다하는 법)",
        "hanja": "思得良饌",
        "reading": "사득양찬",
        "suffix": "하라",
        "translation": "어떻게 좋은 음식을 대접할지 깊이 고민하라.",
        "original_line": "思得良饌(사득양찬)하라        어떻게 좋은 음식을 대접할지 깊이 고민하라."
    ,
        "index": "32",
        "chapter": "sec2"
    },
    {
        "section": "1-2. 효행편: 조석 예절 (일상에서 정성을 다하는 법)",
        "hanja": "出必告之",
        "reading": "출필곡지",
        "suffix": "하고",
        "translation": "밖으로 나갈 때는 반드시 행선지를 알리고",
        "original_line": "出必告之(출필곡지)하고        밖으로 나갈 때는 반드시 행선지를 알리고"
    ,
        "index": "33",
        "chapter": "sec2"
    },
    {
        "section": "1-2. 효행편: 조석 예절 (일상에서 정성을 다하는 법)",
        "hanja": "反必面之",
        "reading": "반필면지",
        "suffix": "하라",
        "translation": "돌아오면 곧바로 얼굴을 뵙고 인사를 드려라.",
        "original_line": "反必面之(반필면지)하라        돌아오면 곧바로 얼굴을 뵙고 인사를 드려라."
    ,
        "index": "34",
        "chapter": "sec2"
    },
    {
        "section": "1-2. 효행편: 조석 예절 (일상에서 정성을 다하는 법)",
        "hanja": "愼勿遠遊",
        "reading": "신물원유",
        "suffix": "하고",
        "translation": "부디 멀리 가서 부모님 걱정 끼치지 말고",
        "original_line": "愼勿遠遊(신물원유)하고        부디 멀리 가서 부모님 걱정 끼치지 말고"
    ,
        "index": "35",
        "chapter": "sec2"
    },
    {
        "section": "1-2. 효행편: 조석 예절 (일상에서 정성을 다하는 법)",
        "hanja": "遊必有方",
        "reading": "유필유방",
        "suffix": "하라",
        "translation": "놀러 가더라도 반드시 있는 곳을 분명히 하라.",
        "original_line": "遊必有方(유필유방)하라        놀러 가더라도 반드시 있는 곳을 분명히 하라."
    ,
        "index": "36",
        "chapter": "sec2"
    },
    {
        "section": "1-2. 효행편: 조석 예절 (일상에서 정성을 다하는 법)",
        "hanja": "出入門戶",
        "reading": "출입문호",
        "suffix": "어든",
        "translation": "집안 문을 드나들 때조차도",
        "original_line": "出入門戶(출입문호)어든        집안 문을 드나들 때조차도"
    ,
        "index": "37",
        "chapter": "sec2"
    },
    {
        "section": "1-2. 효행편: 조석 예절 (일상에서 정성을 다하는 법)",
        "hanja": "開閉必恭",
        "reading": "개폐필공",
        "suffix": "하라",
        "translation": "문을 여닫는 소리가 크지 않게 공손히 하라.",
        "original_line": "開閉必恭(개폐필공)하라        문을 여닫는 소리가 크지 않게 공손히 하라."
    ,
        "index": "38",
        "chapter": "sec2"
    },
    {
        "section": "1-2. 효행편: 조석 예절 (일상에서 정성을 다하는 법)",
        "hanja": "勿立門中",
        "reading": "물립문중",
        "suffix": "하고",
        "translation": "문 한가운데 서서 길을 막지 말고",
        "original_line": "勿立門中(물립문중)하고        문 한가운데 서서 길을 막지 말고"
    ,
        "index": "39",
        "chapter": "sec2"
    },
    {
        "section": "1-2. 효행편: 조석 예절 (일상에서 정성을 다하는 법)",
        "hanja": "勿坐房中",
        "reading": "물좌방중",
        "suffix": "하라",
        "translation": "방 한가운데 앉아 거만하게 굴지 말라.",
        "original_line": "勿坐房中(물좌방중)하라        방 한가운데 앉아 거만하게 굴지 말라."
    ,
        "index": "40",
        "chapter": "sec2"
    },
    {
        "section": "1-3. 효행편: 신체와 명예 (나를 아끼고 부모님을 빛내는 길)",
        "hanja": "行勿慢步",
        "reading": "행물만보",
        "suffix": "하고",
        "translation": "길을 걸을 때는 거만하게 걷지 않으며",
        "original_line": "行勿慢步(행물만보)하고        길을 걸을 때는 거만하게 걷지 않으며"
    ,
        "index": "41",
        "chapter": "sec3"
    },
    {
        "section": "1-3. 효행편: 신체와 명예 (나를 아끼고 부모님을 빛내는 길)",
        "hanja": "坐勿倚身",
        "reading": "좌물의신",
        "suffix": "하라",
        "translation": "앉을 때에도 몸을 비스듬히 기대지 말라.",
        "original_line": "坐勿倚身(좌물의신)하라        앉을 때에도 몸을 비스듬히 기대지 말라."
    ,
        "index": "42",
        "chapter": "sec3"
    },
    {
        "section": "1-3. 효행편: 신체와 명예 (나를 아끼고 부모님을 빛내는 길)",
        "hanja": "口勿雜談",
        "reading": "구물잡담",
        "suffix": "하고",
        "translation": "입으로는 실없는 잡담을 삼가고",
        "original_line": "口勿雜談(구물잡담)하고        입으로는 실없는 잡담을 삼가고"
    ,
        "index": "43",
        "chapter": "sec3"
    },
    {
        "section": "1-3. 효행편: 신체와 명예 (나를 아끼고 부모님을 빛내는 길)",
        "hanja": "手勿雜戱",
        "reading": "수물잡희",
        "suffix": "하라",
        "translation": "손으로는 장난스러운 행동을 하지 말라.",
        "original_line": "手勿雜戱(수물잡희)하라        손으로는 장난스러운 행동을 하지 말라."
    ,
        "index": "44",
        "chapter": "sec3"
    },
    {
        "section": "1-3. 효행편: 신체와 명예 (나를 아끼고 부모님을 빛내는 길)",
        "hanja": "膝前勿坐",
        "reading": "슬전물좌",
        "suffix": "하고",
        "translation": "부모님 무릎 바로 앞에 바짝 앉지 말고",
        "original_line": "膝前勿坐(슬전물좌)하고        부모님 무릎 바로 앞에 바짝 앉지 말고"
    ,
        "index": "45",
        "chapter": "sec3"
    },
    {
        "section": "1-3. 효행편: 신체와 명예 (나를 아끼고 부모님을 빛내는 길)",
        "hanja": "親面勿仰",
        "reading": "친면물앙",
        "suffix": "하라",
        "translation": "부모님의 얼굴을 똑바로 치켜뜨고 보지 말라.",
        "original_line": "親面勿仰(친면물앙)하라        부모님의 얼굴을 똑바로 치켜뜨고 보지 말라."
    ,
        "index": "46",
        "chapter": "sec3"
    },
    {
        "section": "1-3. 효행편: 신체와 명예 (나를 아끼고 부모님을 빛내는 길)",
        "hanja": "須勿放笑",
        "reading": "수물방소",
        "suffix": "하고",
        "translation": "모름지기 입을 크게 벌려 함부로 웃지 말며",
        "original_line": "須勿放笑(수물방소)하고        모름지기 입을 크게 벌려 함부로 웃지 말며"
    ,
        "index": "47",
        "chapter": "sec3"
    },
    {
        "section": "1-3. 효행편: 신체와 명예 (나를 아끼고 부모님을 빛내는 길)",
        "hanja": "亦勿高聲",
        "reading": "역물고성",
        "suffix": "하라",
        "translation": "또한 목소리를 높여 크게 말하지 말아야 한다.",
        "original_line": "亦勿高聲(역물고성)하라        또한 목소리를 높여 크게 말하지 말아야 한다."
    ,
        "index": "48",
        "chapter": "sec3"
    },
    {
        "section": "1-3. 효행편: 신체와 명예 (나를 아끼고 부모님을 빛내는 길)",
        "hanja": "侍坐父母",
        "reading": "시좌부모",
        "suffix": "어든",
        "translation": "부모님을 곁에 모시고 앉아 있을 때는",
        "original_line": "侍坐父母(시좌부모)어든        부모님을 곁에 모시고 앉아 있을 때는"
    ,
        "index": "49",
        "chapter": "sec3"
    },
    {
        "section": "1-3. 효행편: 신체와 명예 (나를 아끼고 부모님을 빛내는 길)",
        "hanja": "勿怒責人",
        "reading": "물노책인",
        "suffix": "하라",
        "translation": "화를 내며 다른 사람을 꾸짖지 말라.",
        "original_line": "勿怒責人(물노책인)하라        화를 내며 다른 사람을 꾸짖지 말라."
    ,
        "index": "50",
        "chapter": "sec3"
    },
    {
        "section": "1-3. 효행편: 신체와 명예 (나를 아끼고 부모님을 빛내는 길)",
        "hanja": "侍坐親前",
        "reading": "시좌친전",
        "suffix": "이어든",
        "translation": "부모님 앞에 모시고 앉아 있을 때는",
        "original_line": "侍坐親前(시좌친전)이어든        부모님 앞에 모시고 앉아 있을 때는"
    ,
        "index": "51",
        "chapter": "sec3"
    },
    {
        "section": "1-3. 효행편: 신체와 명예 (나를 아끼고 부모님을 빛내는 길)",
        "hanja": "勿踞勿臥",
        "reading": "물거물와",
        "suffix": "하라",
        "translation": "다리를 뻗고 걸터앉거나 눕지 말라.",
        "original_line": "勿踞勿臥(물거물와)하라        다리를 뻗고 걸터앉거나 눕지 말라."
    ,
        "index": "52",
        "chapter": "sec3"
    },
    {
        "section": "1-3. 효행편: 신체와 명예 (나를 아끼고 부모님을 빛내는 길)",
        "hanja": "獻物父母",
        "reading": "헌물부모",
        "suffix": "어든",
        "translation": "부모님께 물건을 올릴 때에는",
        "original_line": "獻物父母(헌물부모)어든        부모님께 물건을 올릴 때에는"
    ,
        "index": "53",
        "chapter": "sec3"
    },
    {
        "section": "1-3. 효행편: 신체와 명예 (나를 아끼고 부모님을 빛내는 길)",
        "hanja": "跪而進之",
        "reading": "궤이진지",
        "suffix": "하라",
        "translation": "공경히 꿇어앉아서 정중히 드려라.",
        "original_line": "跪而進之(궤이진지)하라        공경히 꿇어앉아서 정중히 드려라."
    ,
        "index": "54",
        "chapter": "sec3"
    },
    {
        "section": "1-3. 효행편: 신체와 명예 (나를 아끼고 부모님을 빛내는 길)",
        "hanja": "與我飮食",
        "reading": "여아음식",
        "suffix": "이어시든",
        "translation": "부모님께서 내게 음식을 주시거든",
        "original_line": "與我飮食(여아음식)이어시든        부모님께서 내게 음식을 주시거든"
    ,
        "index": "55",
        "chapter": "sec3"
    },
    {
        "section": "1-3. 효행편: 신체와 명예 (나를 아끼고 부모님을 빛내는 길)",
        "hanja": "跪而受之",
        "reading": "궤이수지",
        "suffix": "하라",
        "translation": "공손히 꿇어앉아서 감사히 받아라.",
        "original_line": "跪而受之(궤이수지)하라        공손히 꿇어앉아서 감사히 받아라."
    ,
        "index": "56",
        "chapter": "sec3"
    },
    {
        "section": "1-3. 효행편: 신체와 명예 (나를 아끼고 부모님을 빛내는 길)",
        "hanja": "器有飮食",
        "reading": "기유음식",
        "suffix": "이라도",
        "translation": "그릇에 맛난 음식이 담겨 있더라도",
        "original_line": "器有飮食(기유음식)이라도        그릇에 맛난 음식이 담겨 있더라도"
    ,
        "index": "57",
        "chapter": "sec3"
    },
    {
        "section": "1-3. 효행편: 신체와 명예 (나를 아끼고 부모님을 빛내는 길)",
        "hanja": "不與勿食",
        "reading": "불여물식",
        "suffix": "하라",
        "translation": "먼저 권해주시지 않으면 먹지 말라.",
        "original_line": "不與勿食(불여물식)하라        먼저 권해주시지 않으면 먹지 말라."
    ,
        "index": "58",
        "chapter": "sec3"
    },
    {
        "section": "1-3. 효행편: 신체와 명예 (나를 아끼고 부모님을 빛내는 길)",
        "hanja": "若得美味",
        "reading": "약득미미",
        "suffix": "어든",
        "translation": "혹시라도 맛있는 음식을 얻게 되면",
        "original_line": "若得美味(약득미미)어든        혹시라도 맛있는 음식을 얻게 되면"
    ,
        "index": "59",
        "chapter": "sec3"
    },
    {
        "section": "1-3. 효행편: 신체와 명예 (나를 아끼고 부모님을 빛내는 길)",
        "hanja": "歸獻父母",
        "reading": "귀헌부모",
        "suffix": "하라",
        "translation": "집으로 가져가 부모님께 먼저 대접하라.",
        "original_line": "歸獻父母(귀헌부모)하라        집으로 가져가 부모님께 먼저 대접하라."
    ,
        "index": "60",
        "chapter": "sec3"
    },
    {
        "section": "1-3. 효행편: 신체와 명예 (나를 아끼고 부모님을 빛내는 길)",
        "hanja": "衣服雖惡",
        "reading": "의복수악",
        "suffix": "이나",
        "translation": "옷이 비록 낡고 마음에 들지 않아도",
        "original_line": "衣服雖惡(의복수악)이나        옷이 비록 낡고 마음에 들지 않아도"
    ,
        "index": "61",
        "chapter": "sec3"
    },
    {
        "section": "1-3. 효행편: 신체와 명예 (나를 아끼고 부모님을 빛내는 길)",
        "hanja": "與之必著",
        "reading": "여지필착",
        "suffix": "하라",
        "translation": "부모님이 주신 것이라면 반드시 입어라.",
        "original_line": "與之必著(여지필착)하라        부모님이 주신 것이라면 반드시 입어라."
    ,
        "index": "62",
        "chapter": "sec3"
    },
    {
        "section": "1-3. 효행편: 신체와 명예 (나를 아끼고 부모님을 빛내는 길)",
        "hanja": "飮食雖厭",
        "reading": "음식수염",
        "suffix": "이나",
        "translation": "음식이 비록 먹기 싫고 입에 써도",
        "original_line": "飮食雖厭(음식수염)이나        음식이 비록 먹기 싫고 입에 써도"
    ,
        "index": "63",
        "chapter": "sec3"
    },
    {
        "section": "1-3. 효행편: 신체와 명예 (나를 아끼고 부모님을 빛내는 길)",
        "hanja": "與之必食",
        "reading": "여지필식",
        "suffix": "하라",
        "translation": "부모님이 챙겨주신 것이라면 반드시 먹어라.",
        "original_line": "與之必食(여지필식)하라        부모님이 챙겨주신 것이라면 반드시 먹어라."
    ,
        "index": "64",
        "chapter": "sec3"
    },
    {
        "section": "1-3. 효행편: 신체와 명예 (나를 아끼고 부모님을 빛내는 길)",
        "hanja": "父母無衣",
        "reading": "부모무의",
        "suffix": "어시든",
        "translation": "부모님 입으실 옷이 넉넉지 않다면",
        "original_line": "父母無衣(부모무의)어시든        부모님 입으실 옷이 넉넉지 않다면"
    ,
        "index": "65",
        "chapter": "sec3"
    },
    {
        "section": "1-3. 효행편: 신체와 명예 (나를 아끼고 부모님을 빛내는 길)",
        "hanja": "勿思我衣",
        "reading": "물사아의",
        "suffix": "하며",
        "translation": "내가 입을 새 옷을 탐내지 말 것이며,",
        "original_line": "勿思我衣(물사아의)하며        내가 입을 새 옷을 탐내지 말 것이며,"
    ,
        "index": "66",
        "chapter": "sec3"
    },
    {
        "section": "1-3. 효행편: 신체와 명예 (나를 아끼고 부모님을 빛내는 길)",
        "hanja": "父母無食",
        "reading": "부모무식",
        "suffix": "이어시든",
        "translation": "부모님 드실 음식이 부족하다면",
        "original_line": "父母無食(부모무식)이어시든        부모님 드실 음식이 부족하다면"
    ,
        "index": "67",
        "chapter": "sec3"
    },
    {
        "section": "1-3. 효행편: 신체와 명예 (나를 아끼고 부모님을 빛내는 길)",
        "hanja": "勿思我食",
        "reading": "물사아식",
        "suffix": "하라",
        "translation": "내가 먹을 좋은 음식을 생각지 말라.",
        "original_line": "勿思我食(물사아식)하라        내가 먹을 좋은 음식을 생각지 말라."
    ,
        "index": "68",
        "chapter": "sec3"
    },
    {
        "section": "1-3. 효행편: 신체와 명예 (나를 아끼고 부모님을 빛내는 길)",
        "hanja": "身體髮膚",
        "reading": "신체발부",
        "suffix": "를",
        "translation": "부모님께 받은 몸과 머리카락, 피부를",
        "original_line": "身體髮膚(신체발부)를        부모님께 받은 몸과 머리카락, 피부를"
    ,
        "index": "69",
        "chapter": "sec3"
    },
    {
        "section": "1-3. 효행편: 신체와 명예 (나를 아끼고 부모님을 빛내는 길)",
        "hanja": "勿毁勿傷",
        "reading": "물훼물상",
        "suffix": "하라",
        "translation": "함부로 훼손하거나 다치게 하지 말라.",
        "original_line": "勿毁勿傷(물훼물상)하라        함부로 훼손하거나 다치게 하지 말라."
    ,
        "index": "70",
        "chapter": "sec3"
    },
    {
        "section": "1-3. 효행편: 신체와 명예 (나를 아끼고 부모님을 빛내는 길)",
        "hanja": "衣服帶靴",
        "reading": "의복대화",
        "suffix": "를",
        "translation": "내가 입는 옷과 허리띠, 신발 등을",
        "original_line": "衣服帶靴(의복대화)를        내가 입는 옷과 허리띠, 신발 등을"
    ,
        "index": "71",
        "chapter": "sec3"
    },
    {
        "section": "1-3. 효행편: 신체와 명예 (나를 아끼고 부모님을 빛내는 길)",
        "hanja": "勿失勿裂",
        "reading": "물실물렬",
        "suffix": "하라",
        "translation": "잃어버리거나 찢어지지 않게 아껴라.",
        "original_line": "勿失勿裂(물실물렬)하라        잃어버리거나 찢어지지 않게 아껴라."
    ,
        "index": "72",
        "chapter": "sec3"
    },
    {
        "section": "1-3. 효행편: 신체와 명예 (나를 아끼고 부모님을 빛내는 길)",
        "hanja": "父母愛之",
        "reading": "부모애지",
        "suffix": "어시든",
        "translation": "부모님이 나를 사랑해 주신다면",
        "original_line": "父母愛之(부모애지)어시든        부모님이 나를 사랑해 주신다면"
    ,
        "index": "73",
        "chapter": "sec3"
    },
    {
        "section": "1-3. 효행편: 신체와 명예 (나를 아끼고 부모님을 빛내는 길)",
        "hanja": "喜而勿忘",
        "reading": "희이물망",
        "suffix": "하라",
        "translation": "기쁜 마음으로 그 사랑을 잊지 말고,",
        "original_line": "喜而勿忘(희이물망)하라        기쁜 마음으로 그 사랑을 잊지 말고,"
    ,
        "index": "74",
        "chapter": "sec3"
    },
    {
        "section": "1-3. 효행편: 신체와 명예 (나를 아끼고 부모님을 빛내는 길)",
        "hanja": "父母責之",
        "reading": "부모책지",
        "suffix": "어시든",
        "translation": "부모님이 나를 꾸짖으신다면",
        "original_line": "父母責之(부모책지)어시든        부모님이 나를 꾸짖으신다면"
    ,
        "index": "75",
        "chapter": "sec3"
    },
    {
        "section": "1-3. 효행편: 신체와 명예 (나를 아끼고 부모님을 빛내는 길)",
        "hanja": "反省勿怨",
        "reading": "반성물원",
        "suffix": "하라",
        "translation": "스스로를 돌아보며 원망하는 마음을 갖지 말라.",
        "original_line": "反省勿怨(반성물원)하라        스스로를 돌아보며 원망하는 마음을 갖지 말라."
    ,
        "index": "76",
        "chapter": "sec3"
    },
    {
        "section": "1-3. 효행편: 신체와 명예 (나를 아끼고 부모님을 빛내는 길)",
        "hanja": "勿登高樹",
        "reading": "물등고수",
        "suffix": "하라",
        "translation": "위험하게 높은 나무에 올라가지 말라",
        "original_line": "勿登高樹(물등고수)하라        위험하게 높은 나무에 올라가지 말라"
    ,
        "index": "77",
        "chapter": "sec3"
    },
    {
        "section": "1-3. 효행편: 신체와 명예 (나를 아끼고 부모님을 빛내는 길)",
        "hanja": "父母憂之",
        "reading": "부모우지",
        "suffix": "시니라",
        "translation": "부모님께서 행여 다칠까 걱정하시느니라.",
        "original_line": "父母憂之(부모우지)시니라        부모님께서 행여 다칠까 걱정하시느니라."
    ,
        "index": "78",
        "chapter": "sec3"
    },
    {
        "section": "1-3. 효행편: 신체와 명예 (나를 아끼고 부모님을 빛내는 길)",
        "hanja": "勿泳深淵",
        "reading": "물영심연",
        "suffix": "하라",
        "translation": "함부로 깊은 물에서 헤엄치지 말라",
        "original_line": "勿泳深淵(물영심연)하라        함부로 깊은 물에서 헤엄치지 말라"
    ,
        "index": "79",
        "chapter": "sec3"
    },
    {
        "section": "1-3. 효행편: 신체와 명예 (나를 아끼고 부모님을 빛내는 길)",
        "hanja": "父母念之",
        "reading": "부모념지",
        "suffix": "시니라",
        "translation": "부모님께서 늘 노심초사 염려하시느니라.",
        "original_line": "父母念之(부모념지)시니라        부모님께서 늘 노심초사 염려하시느니라."
    ,
        "index": "80",
        "chapter": "sec3"
    },
    {
        "section": "1-3. 효행편: 신체와 명예 (나를 아끼고 부모님을 빛내는 길)",
        "hanja": "勿與人鬪",
        "reading": "물여인투",
        "suffix": "하라",
        "translation": "다른 사람과 다투거나 싸우지 말라",
        "original_line": "勿與人鬪(물여인투)하라        다른 사람과 다투거나 싸우지 말라"
    ,
        "index": "81",
        "chapter": "sec3"
    },
    {
        "section": "1-3. 효행편: 신체와 명예 (나를 아끼고 부모님을 빛내는 길)",
        "hanja": "父母不安",
        "reading": "부모불안",
        "suffix": "이시니라",
        "translation": "부모님의 마음이 편치 않고 불안하시느니라.",
        "original_line": "父母不安(부모불안)이시니라        부모님의 마음이 편치 않고 불안하시느니라."
    ,
        "index": "82",
        "chapter": "sec3"
    },
    {
        "section": "1-3. 효행편: 신체와 명예 (나를 아끼고 부모님을 빛내는 길)",
        "hanja": "室堂有塵",
        "reading": "실당유진",
        "suffix": "이어든",
        "translation": "거실과 방에 먼지가 쌓여 있거든",
        "original_line": "室堂有塵(실당유진)이어든        거실과 방에 먼지가 쌓여 있거든"
    ,
        "index": "83",
        "chapter": "sec3"
    },
    {
        "section": "1-3. 효행편: 신체와 명예 (나를 아끼고 부모님을 빛내는 길)",
        "hanja": "常必灑掃",
        "reading": "상필쇄소",
        "suffix": "하라",
        "translation": "항상 깨끗이 물 뿌리고 정성껏 청소하라.",
        "original_line": "常必灑掃(상필쇄소)하라        항상 깨끗이 물 뿌리고 정성껏 청소하라."
    ,
        "index": "84",
        "chapter": "sec3"
    },
    {
        "section": "1-3. 효행편: 신체와 명예 (나를 아끼고 부모님을 빛내는 길)",
        "hanja": "事必稟行",
        "reading": "사필품행",
        "suffix": "하고",
        "translation": "무슨 일이든 반드시 여쭈어보고 행하며",
        "original_line": "事必稟行(사필품행)하고        무슨 일이든 반드시 여쭈어보고 행하며"
    ,
        "index": "85",
        "chapter": "sec3"
    },
    {
        "section": "1-3. 효행편: 신체와 명예 (나를 아끼고 부모님을 빛내는 길)",
        "hanja": "無敢自專",
        "reading": "무감자전",
        "suffix": "하라",
        "translation": "감히 자기 고집대로 마음대로 결정하지 말라.",
        "original_line": "無敢自專(무감자전)하라        감히 자기 고집대로 마음대로 결정하지 말라."
    ,
        "index": "86",
        "chapter": "sec3"
    },
    {
        "section": "1-3. 효행편: 신체와 명예 (나를 아끼고 부모님을 빛내는 길)",
        "hanja": "一欺父母",
        "reading": "일기부모",
        "suffix": "면",
        "translation": "단 한 번이라도 부모님을 속인다면",
        "original_line": "一欺父母(일기부모)면        단 한 번이라도 부모님을 속인다면"
    ,
        "index": "87",
        "chapter": "sec3"
    },
    {
        "section": "1-3. 효행편: 신체와 명예 (나를 아끼고 부모님을 빛내는 길)",
        "hanja": "其罪如山",
        "reading": "기죄여산",
        "suffix": "이니라",
        "translation": "그 정직하지 못한 죄가 산처럼 크니라.",
        "original_line": "其罪如山(기죄여산)이니라        그 정직하지 못한 죄가 산처럼 크니라."
    ,
        "index": "88",
        "chapter": "sec3"
    },
    {
        "section": "1-3. 효행편: 신체와 명예 (나를 아끼고 부모님을 빛내는 길)",
        "hanja": "雪裏求筍",
        "reading": "설리구순",
        "suffix": "은",
        "translation": "한겨울 눈 속에서 죽순을 구한 것은",
        "original_line": "雪裏求筍(설리구순)은        한겨울 눈 속에서 죽순을 구한 것은"
    ,
        "index": "89",
        "chapter": "sec3"
    },
    {
        "section": "1-3. 효행편: 신체와 명예 (나를 아끼고 부모님을 빛내는 길)",
        "hanja": "孟宗之孝",
        "reading": "맹종지효",
        "suffix": "요",
        "translation": "효자 맹종의 지극한 정성이었고,",
        "original_line": "孟宗之孝(맹종지효)요        효자 맹종의 지극한 정성이었고,"
    ,
        "index": "90",
        "chapter": "sec3"
    },
    {
        "section": "1-3. 효행편: 신체와 명예 (나를 아끼고 부모님을 빛내는 길)",
        "hanja": "剖氷得鯉",
        "reading": "부빙득리",
        "suffix": "는",
        "translation": "얼음을 깨고 잉어를 얻은 것은",
        "original_line": "剖氷得鯉(부빙득리)는        얼음을 깨고 잉어를 얻은 것은"
    ,
        "index": "91",
        "chapter": "sec3"
    },
    {
        "section": "1-3. 효행편: 신체와 명예 (나를 아끼고 부모님을 빛내는 길)",
        "hanja": "王祥之孝",
        "reading": "왕상지효",
        "suffix": "니라",
        "translation": "효자 왕상의 이름 높은 효심이었느니라.",
        "original_line": "王祥之孝(왕상지효)니라        효자 왕상의 이름 높은 효심이었느니라."
    ,
        "index": "92",
        "chapter": "sec3"
    },
    {
        "section": "1-3. 효행편: 신체와 명예 (나를 아끼고 부모님을 빛내는 길)",
        "hanja": "我身能賢",
        "reading": "아신능현",
        "suffix": "이면",
        "translation": "내 몸과 행실이 어질고 훌륭하면",
        "original_line": "我身能賢(아신능현)이면        내 몸과 행실이 어질고 훌륭하면"
    ,
        "index": "93",
        "chapter": "sec3"
    },
    {
        "section": "1-3. 효행편: 신체와 명예 (나를 아끼고 부모님을 빛내는 길)",
        "hanja": "譽及父母",
        "reading": "예급부모",
        "suffix": "니라",
        "translation": "그 명예와 기쁨이 부모님께 이르고,",
        "original_line": "譽及父母(예급부모)니라        그 명예와 기쁨이 부모님께 이르고,"
    ,
        "index": "94",
        "chapter": "sec3"
    },
    {
        "section": "1-3. 효행편: 신체와 명예 (나를 아끼고 부모님을 빛내는 길)",
        "hanja": "我身不賢",
        "reading": "아신불현",
        "suffix": "이면",
        "translation": "내가 바르게 행동하지 못하고 어질지 못하면",
        "original_line": "我身不賢(아신불현)이면        내가 바르게 행동하지 못하고 어질지 못하면"
    ,
        "index": "95",
        "chapter": "sec3"
    },
    {
        "section": "1-3. 효행편: 신체와 명예 (나를 아끼고 부모님을 빛내는 길)",
        "hanja": "辱及父母",
        "reading": "욕급부모",
        "suffix": "니라",
        "translation": "그 욕됨과 부끄러움이 부모님께 미치느니라.",
        "original_line": "辱及父母(욕급부모)니라        그 욕됨과 부끄러움이 부모님께 미치느니라."
    ,
        "index": "96",
        "chapter": "sec3"
    },
    {
        "section": "2. 추원편 (追遠篇): 조상과 제사",
        "hanja": "追遠報本",
        "reading": "추원보본",
        "suffix": "하고",
        "translation": "먼 조상을 추모하고 나의 근본에 보답하며",
        "original_line": "追遠報本(추원보본)하고        먼 조상을 추모하고 나의 근본에 보답하며"
    ,
        "index": "97",
        "chapter": "sec4"
    },
    {
        "section": "2. 추원편 (追遠篇): 조상과 제사",
        "hanja": "祭祀必誠",
        "reading": "제사필성",
        "suffix": "하라",
        "translation": "조상을 모시는 제사는 반드시 정성을 다하라.",
        "original_line": "祭祀必誠(제사필성)하라        조상을 모시는 제사는 반드시 정성을 다하라."
    ,
        "index": "98",
        "chapter": "sec4"
    },
    {
        "section": "2. 추원편 (追遠篇): 조상과 제사",
        "hanja": "非有先祖",
        "reading": "비유선조",
        "suffix": "면",
        "translation": "만약 선조께서 계시지 않았다면",
        "original_line": "非有先祖(비유선조)면        만약 선조께서 계시지 않았다면"
    ,
        "index": "99",
        "chapter": "sec4"
    },
    {
        "section": "2. 추원편 (追遠篇): 조상과 제사",
        "hanja": "我身曷生",
        "reading": "아신갈생",
        "suffix": "이리오",
        "translation": "내 몸이 어찌 세상에 태어날 수 있었으리오.",
        "original_line": "我身曷生(아신갈생)이리오        내 몸이 어찌 세상에 태어날 수 있었으리오."
    ,
        "index": "100",
        "chapter": "sec4"
    },
    {
        "section": "2. 추원편 (追遠篇): 조상과 제사",
        "hanja": "事親如此",
        "reading": "사친여차",
        "suffix": "면",
        "translation": "부모님 모시기를 이와 같이 정성껏 한다면",
        "original_line": "事親如此(사친여차)면        부모님 모시기를 이와 같이 정성껏 한다면"
    ,
        "index": "101",
        "chapter": "sec4"
    },
    {
        "section": "2. 추원편 (追遠篇): 조상과 제사",
        "hanja": "可謂孝矣",
        "reading": "가위효의",
        "suffix": "니라",
        "translation": "진정한 효도라고 말할 수 있느니라.",
        "original_line": "可謂孝矣(가위효의)니라        진정한 효도라고 말할 수 있느니라."
    ,
        "index": "102",
        "chapter": "sec4"
    },
    {
        "section": "2. 추원편 (追遠篇): 조상과 제사",
        "hanja": "不能如此",
        "reading": "불능여차",
        "suffix": "면",
        "translation": "만약 이처럼 도리를 다하지 못한다면",
        "original_line": "不能如此(불능여차)면        만약 이처럼 도리를 다하지 못한다면"
    ,
        "index": "103",
        "chapter": "sec4"
    },
    {
        "section": "2. 추원편 (追遠篇): 조상과 제사",
        "hanja": "禽獸無異",
        "reading": "금수무이",
        "suffix": "니라",
        "translation": "사람이라 해도 짐승과 다를 바가 없느니라.",
        "original_line": "禽獸無異(금수무이)니라        사람이라 해도 짐승과 다를 바가 없느니라."
    ,
        "index": "104",
        "chapter": "sec4"
    },
    {
        "section": "3. 충효편 (忠孝篇): 나라와 부부",
        "hanja": "學優則仕",
        "reading": "학우즉사",
        "suffix": "하야",
        "translation": "배움이 넉넉해지면 사회에 나아가 일을 하여",
        "original_line": "學優則仕(학우즉사)하야        배움이 넉넉해지면 사회에 나아가 일을 하여"
    ,
        "index": "105",
        "chapter": "sec5"
    },
    {
        "section": "3. 충효편 (忠孝篇): 나라와 부부",
        "hanja": "爲國盡忠",
        "reading": "위국진충",
        "suffix": "하라",
        "translation": "나라를 위해 자신의 충성을 다해야 한다.",
        "original_line": "爲國盡忠(위국진충)하라        나라를 위해 자신의 충성을 다해야 한다."
    ,
        "index": "106",
        "chapter": "sec5"
    },
    {
        "section": "3. 충효편 (忠孝篇): 나라와 부부",
        "hanja": "敬信節用",
        "reading": "경신절용",
        "suffix": "하고",
        "translation": "일을 공경히 처리해 신뢰를 얻고 아껴 쓰며",
        "original_line": "敬信節用(경신절용)하고        일을 공경히 처리해 신뢰를 얻고 아껴 쓰며"
    ,
        "index": "107",
        "chapter": "sec5"
    },
    {
        "section": "3. 충효편 (忠孝篇): 나라와 부부",
        "hanja": "愛民如子",
        "reading": "애민여자",
        "suffix": "하라",
        "translation": "백성 보살피기를 자식 사랑하듯 하라.",
        "original_line": "愛民如子(애민여자)하라        백성 보살피기를 자식 사랑하듯 하라."
    ,
        "index": "108",
        "chapter": "sec5"
    },
    {
        "section": "3. 충효편 (忠孝篇): 나라와 부부",
        "hanja": "人倫之中",
        "reading": "인륜지중",
        "suffix": "에",
        "translation": "사람이 지켜야 할 여러 도리 가운데서도",
        "original_line": "人倫之中(인륜지중)에        사람이 지켜야 할 여러 도리 가운데서도"
    ,
        "index": "109",
        "chapter": "sec5"
    },
    {
        "section": "3. 충효편 (忠孝篇): 나라와 부부",
        "hanja": "忠孝爲本",
        "reading": "충효위본",
        "suffix": "이니",
        "translation": "나라에 대한 충성과 부모에 대한 효도가 근본이다.",
        "original_line": "忠孝爲本(충효위본)이니        나라에 대한 충성과 부모에 대한 효도가 근본이다."
    ,
        "index": "110",
        "chapter": "sec5"
    },
    {
        "section": "3. 충효편 (忠孝篇): 나라와 부부",
        "hanja": "孝當竭力",
        "reading": "효당갈력",
        "suffix": "하고",
        "translation": "효도를 할 때는 마땅히 모든 힘을 쏟아야 하며",
        "original_line": "孝當竭力(효당갈력)하고        효도를 할 때는 마땅히 모든 힘을 쏟아야 하며"
    ,
        "index": "111",
        "chapter": "sec5"
    },
    {
        "section": "3. 충효편 (忠孝篇): 나라와 부부",
        "hanja": "忠則盡命",
        "reading": "충즉진명",
        "suffix": "하라",
        "translation": "충성을 할 때는 진심을 다해 소명을 다하라.",
        "original_line": "忠則盡命(충즉진명)하라        충성을 할 때는 진심을 다해 소명을 다하라."
    ,
        "index": "112",
        "chapter": "sec5"
    },
    {
        "section": "3. 충효편 (忠孝篇): 나라와 부부",
        "hanja": "夫婦之倫",
        "reading": "부부지륜",
        "suffix": "은",
        "translation": "남편과 아내 사이의 인연과 도리는",
        "original_line": "夫婦之倫(부부지륜)은        남편과 아내 사이의 인연과 도리는"
    ,
        "index": "113",
        "chapter": "sec5"
    },
    {
        "section": "3. 충효편 (忠孝篇): 나라와 부부",
        "hanja": "二姓之合",
        "reading": "이성지합",
        "suffix": "이라",
        "translation": "서로 다른 두 가문이 만나 하나를 이룬 것이다.",
        "original_line": "二姓之合(이성지합)이라        서로 다른 두 가문이 만나 하나를 이룬 것이다."
    ,
        "index": "114",
        "chapter": "sec5"
    },
    {
        "section": "3. 충효편 (忠孝篇): 나라와 부부",
        "hanja": "內外有別",
        "reading": "내외유별",
        "suffix": "하야",
        "translation": "집안일과 바깥일에 서로의 역할을 존중하며",
        "original_line": "內外有別(내외유별)하야        집안일과 바깥일에 서로의 역할을 존중하며"
    ,
        "index": "115",
        "chapter": "sec5"
    },
    {
        "section": "3. 충효편 (忠孝篇): 나라와 부부",
        "hanja": "相敬如賓",
        "reading": "상경여빈",
        "suffix": "하라",
        "translation": "서로를 손님 대하듯 늘 공경하고 예의를 갖추라.",
        "original_line": "相敬如賓(상경여빈)하라        서로를 손님 대하듯 늘 공경하고 예의를 갖추라."
    ,
        "index": "116",
        "chapter": "sec5"
    },
    {
        "section": "3. 충효편 (忠孝篇): 나라와 부부",
        "hanja": "夫道和義",
        "reading": "부도화의",
        "suffix": "하고",
        "translation": "남편의 도리는 화목하고 의로운 것이며",
        "original_line": "夫道和義(부도화의)하고        남편의 도리는 화목하고 의로운 것이며"
    ,
        "index": "117",
        "chapter": "sec5"
    },
    {
        "section": "3. 충효편 (忠孝篇): 나라와 부부",
        "hanja": "婦德柔順",
        "reading": "부덕유순",
        "suffix": "하야",
        "translation": "아내의 덕은 부드럽고 순종적인 것이니",
        "original_line": "婦德柔順(부덕유순)하야        아내의 덕은 부드럽고 순종적인 것이니"
    ,
        "index": "118",
        "chapter": "sec5"
    },
    {
        "section": "3. 충효편 (忠孝篇): 나라와 부부",
        "hanja": "夫唱婦隨",
        "reading": "부창부수",
        "suffix": "면",
        "translation": "남편이 이끌고 아내가 잘 조화롭게 따르면",
        "original_line": "夫唱婦隨(부창부수)면        남편이 이끌고 아내가 잘 조화롭게 따르면"
    ,
        "index": "119",
        "chapter": "sec5"
    },
    {
        "section": "3. 충효편 (忠孝篇): 나라와 부부",
        "hanja": "家道成矣",
        "reading": "가도성의",
        "suffix": "리라",
        "translation": "비로소 집안의 도리가 바로 서게 될 것이다.",
        "original_line": "家道成矣(가도성의)리라        비로소 집안의 도리가 바로 서게 될 것이다."
    ,
        "index": "120",
        "chapter": "sec5"
    },
    {
        "section": "4. 우애편 (友愛篇): 형제와 자매",
        "hanja": "兄弟姉妹",
        "reading": "형제자매",
        "suffix": "는",
        "translation": "형제와 자매는 부모님의",
        "original_line": "兄弟姉妹(형제자매)는        형제와 자매는 부모님의"
    ,
        "index": "121",
        "chapter": "sec6"
    },
    {
        "section": "4. 우애편 (友愛篇): 형제와 자매",
        "hanja": "同氣而生",
        "reading": "동기이생",
        "suffix": "하니",
        "translation": "같은 기운을 이어받아 태어난 사이이니,",
        "original_line": "同氣而生(동기이생)하니        같은 기운을 이어받아 태어난 사이이니,"
    ,
        "index": "122",
        "chapter": "sec6"
    },
    {
        "section": "4. 우애편 (友愛篇): 형제와 자매",
        "hanja": "兄友弟恭",
        "reading": "형우제공",
        "suffix": "하야",
        "translation": "형은 동생을 아끼고 동생은 형을 받들며",
        "original_line": "兄友弟恭(형우제공)하야        형은 동생을 아끼고 동생은 형을 받들며"
    ,
        "index": "123",
        "chapter": "sec6"
    },
    {
        "section": "4. 우애편 (友愛篇): 형제와 자매",
        "hanja": "不敢怨怒",
        "reading": "불감원노",
        "suffix": "하라",
        "translation": "감히 서로 원망하거나 화내지 말아야 한다.",
        "original_line": "不敢怨怒(불감원노)하라        감히 서로 원망하거나 화내지 말아야 한다."
    ,
        "index": "124",
        "chapter": "sec6"
    },
    {
        "section": "4. 우애편 (友愛篇): 형제와 자매",
        "hanja": "骨肉雖分",
        "reading": "골육수분",
        "suffix": "이나",
        "translation": "뼈와 살은 비록 나뉘어 있으나",
        "original_line": "骨肉雖分(골육수분)이나        뼈와 살은 비록 나뉘어 있으나"
    ,
        "index": "125",
        "chapter": "sec6"
    },
    {
        "section": "4. 우애편 (友愛篇): 형제와 자매",
        "hanja": "本生一氣",
        "reading": "본생일기",
        "suffix": "요",
        "translation": "본래 부모님의 한 기운에서 태어났으며,",
        "original_line": "本生一氣(본생일기)요        본래 부모님의 한 기운에서 태어났으며,"
    ,
        "index": "126",
        "chapter": "sec6"
    },
    {
        "section": "4. 우애편 (友愛篇): 형제와 자매",
        "hanja": "形體雖異",
        "reading": "형체수이",
        "suffix": "나",
        "translation": "겉모습과 몸은 비록 다르지만",
        "original_line": "形體雖異(형체수이)나        겉모습과 몸은 비록 다르지만"
    ,
        "index": "127",
        "chapter": "sec6"
    },
    {
        "section": "4. 우애편 (友愛篇): 형제와 자매",
        "hanja": "素受一血",
        "reading": "소수일혈",
        "suffix": "이니라",
        "translation": "본디 부모님의 같은 피를 받았느니라.",
        "original_line": "素受一血(소수일혈)이니라        본디 부모님의 같은 피를 받았느니라."
    ,
        "index": "128",
        "chapter": "sec6"
    },
    {
        "section": "4. 우애편 (友愛篇): 형제와 자매",
        "hanja": "比之於木",
        "reading": "비지어목",
        "suffix": "이면",
        "translation": "이를 나무에 비유하자면",
        "original_line": "比之於木(비지어목)이면        이를 나무에 비유하자면"
    ,
        "index": "129",
        "chapter": "sec6"
    },
    {
        "section": "4. 우애편 (友愛篇): 형제와 자매",
        "hanja": "同根異枝",
        "reading": "동근이지",
        "suffix": "요",
        "translation": "뿌리는 같으나 가지가 다른 것과 같고,",
        "original_line": "同根異枝(동근이지)요        뿌리는 같으나 가지가 다른 것과 같고,"
    ,
        "index": "130",
        "chapter": "sec6"
    },
    {
        "section": "4. 우애편 (友愛篇): 형제와 자매",
        "hanja": "比之於水",
        "reading": "비지어수",
        "suffix": "면",
        "translation": "이를 물에 비유하자면",
        "original_line": "比之於水(비지어수)면        이를 물에 비유하자면"
    ,
        "index": "131",
        "chapter": "sec6"
    },
    {
        "section": "4. 우애편 (友愛篇): 형제와 자매",
        "hanja": "同源異流",
        "reading": "동원이류",
        "suffix": "니라",
        "translation": "근원은 같으나 흐르는 줄기가 다른 것과 같네.",
        "original_line": "同源異流(동원이류)니라        근원은 같으나 흐르는 줄기가 다른 것과 같네."
    ,
        "index": "132",
        "chapter": "sec6"
    },
    {
        "section": "4. 우애편 (友愛篇): 형제와 자매",
        "hanja": "兄弟怡怡",
        "reading": "형제이이",
        "suffix": "하야",
        "translation": "형제는 서로 화목하고 즐겁게 지내며",
        "original_line": "兄弟怡怡(형제이이)하야        형제는 서로 화목하고 즐겁게 지내며"
    ,
        "index": "133",
        "chapter": "sec6"
    },
    {
        "section": "4. 우애편 (友愛篇): 형제와 자매",
        "hanja": "行則雁行",
        "reading": "행즉안행",
        "suffix": "하고",
        "translation": "길을 갈 때는 기러기 떼처럼 차례를 지키고,",
        "original_line": "行則雁行(행즉안행)하고        길을 갈 때는 기러기 떼처럼 차례를 지키고,"
    ,
        "index": "134",
        "chapter": "sec6"
    },
    {
        "section": "4. 우애편 (友愛篇): 형제와 자매",
        "hanja": "寢則連衾",
        "reading": "침즉연금",
        "suffix": "하며",
        "translation": "잠을 잘 때는 이불을 나란히 덮으며",
        "original_line": "寢則連衾(침즉연금)하며        잠을 잘 때는 이불을 나란히 덮으며"
    ,
        "index": "135",
        "chapter": "sec6"
    },
    {
        "section": "4. 우애편 (友愛篇): 형제와 자매",
        "hanja": "食則同牀",
        "reading": "식즉동상",
        "suffix": "하라",
        "translation": "밥을 먹을 때는 한 상에서 함께 먹어라.",
        "original_line": "食則同牀(식즉동상)하라        밥을 먹을 때는 한 상에서 함께 먹어라."
    ,
        "index": "136",
        "chapter": "sec6"
    },
    {
        "section": "4. 우애편 (友愛篇): 형제와 자매",
        "hanja": "分毋求多",
        "reading": "분무구다",
        "suffix": "하고",
        "translation": "몫을 나눌 때 더 많이 가지려 욕심내지 말고",
        "original_line": "分毋求多(분무구다)하고        몫을 나눌 때 더 많이 가지려 욕심내지 말고"
    ,
        "index": "137",
        "chapter": "sec6"
    },
    {
        "section": "4. 우애편 (友愛篇): 형제와 자매",
        "hanja": "有無相通",
        "reading": "유무상통",
        "suffix": "하라",
        "translation": "있는 것과 없는 것을 서로 나누어 써라.",
        "original_line": "有無相通(유무상통)하라        있는 것과 없는 것을 서로 나누어 써라."
    ,
        "index": "138",
        "chapter": "sec6"
    },
    {
        "section": "4. 우애편 (友愛篇): 형제와 자매",
        "hanja": "私其衣食",
        "reading": "사기의식",
        "suffix": "이면",
        "translation": "입을 것과 먹을 것을 제 욕심만 채워 아낀다면",
        "original_line": "私其衣食(사기의식)이면        입을 것과 먹을 것을 제 욕심만 채워 아낀다면"
    ,
        "index": "139",
        "chapter": "sec6"
    },
    {
        "section": "4. 우애편 (友愛篇): 형제와 자매",
        "hanja": "夷狄之徒",
        "reading": "이적지도",
        "suffix": "니라",
        "translation": "그것은 짐승이나 오랑캐와 다를 바 없느니라.",
        "original_line": "夷狄之徒(이적지도)니라        그것은 짐승이나 오랑캐와 다를 바 없느니라."
    ,
        "index": "140",
        "chapter": "sec6"
    },
    {
        "section": "4. 우애편 (友愛篇): 형제와 자매",
        "hanja": "兄無衣服",
        "reading": "형무의복",
        "suffix": "이면",
        "translation": "형에게 입을 옷이 없다면",
        "original_line": "兄無衣服(형무의복)이면        형에게 입을 옷이 없다면"
    ,
        "index": "141",
        "chapter": "sec6"
    },
    {
        "section": "4. 우애편 (友愛篇): 형제와 자매",
        "hanja": "弟必獻之",
        "reading": "제필헌지",
        "suffix": "하고",
        "translation": "동생은 반드시 자기 옷을 내어주고,",
        "original_line": "弟必獻之(제필헌지)하고        동생은 반드시 자기 옷을 내어주고,"
    ,
        "index": "142",
        "chapter": "sec6"
    },
    {
        "section": "4. 우애편 (友愛篇): 형제와 자매",
        "hanja": "弟無飮食",
        "reading": "제무음식",
        "suffix": "이면",
        "translation": "동생에게 먹을 음식이 없다면",
        "original_line": "弟無飮食(제무음식)이면        동생에게 먹을 음식이 없다면"
    ,
        "index": "143",
        "chapter": "sec6"
    },
    {
        "section": "4. 우애편 (友愛篇): 형제와 자매",
        "hanja": "兄必與之",
        "reading": "형필여지",
        "suffix": "하라",
        "translation": "형은 반드시 자기 음식을 나누어 주어라.",
        "original_line": "兄必與之(형필여지)하라        형은 반드시 자기 음식을 나누어 주어라."
    ,
        "index": "144",
        "chapter": "sec6"
    },
    {
        "section": "4. 우애편 (友愛篇): 형제와 자매",
        "hanja": "一杯之水",
        "reading": "일배지수",
        "suffix": "라도",
        "translation": "한 잔의 물이라 할지라도",
        "original_line": "一杯之水(일배지수)라도        한 잔의 물이라 할지라도"
    ,
        "index": "145",
        "chapter": "sec6"
    },
    {
        "section": "4. 우애편 (友愛篇): 형제와 자매",
        "hanja": "必分而飮",
        "reading": "필분이음",
        "suffix": "하고",
        "translation": "반드시 나누어 마시고,",
        "original_line": "必分而飮(필분이음)하고        반드시 나누어 마시고,"
    ,
        "index": "146",
        "chapter": "sec6"
    },
    {
        "section": "4. 우애편 (友愛篇): 형제와 자매",
        "hanja": "一粒之食",
        "reading": "일립지식",
        "suffix": "이라도",
        "translation": "한 알의 곡식이라 할지라도",
        "original_line": "一粒之食(일립지식)이라도        한 알의 곡식이라 할지라도"
    ,
        "index": "147",
        "chapter": "sec6"
    },
    {
        "section": "4. 우애편 (友愛篇): 형제와 자매",
        "hanja": "必分而食",
        "reading": "필분이식",
        "suffix": "하라",
        "translation": "반드시 나누어 먹어야 한다.",
        "original_line": "必分而食(필분이식)하라        반드시 나누어 먹어야 한다."
    ,
        "index": "148",
        "chapter": "sec6"
    },
    {
        "section": "4. 우애편 (友愛篇): 형제와 자매",
        "hanja": "兄雖責我",
        "reading": "형수책아",
        "suffix": "나",
        "translation": "형이 비록 나를 꾸짖더라도",
        "original_line": "兄雖責我(형수책아)나        형이 비록 나를 꾸짖더라도"
    ,
        "index": "149",
        "chapter": "sec6"
    },
    {
        "section": "4. 우애편 (友愛篇): 형제와 자매",
        "hanja": "莫敢抗怒",
        "reading": "막감항노",
        "suffix": "하고",
        "translation": "감히 맞서서 화내지 말 것이며,",
        "original_line": "莫敢抗怒(막감항노)하고        감히 맞서서 화내지 말 것이며,"
    ,
        "index": "150",
        "chapter": "sec6"
    },
    {
        "section": "4. 우애편 (友愛篇): 형제와 자매",
        "hanja": "弟雖有過",
        "reading": "제수유과",
        "suffix": "나",
        "translation": "동생이 비록 잘못을 저질렀더라도",
        "original_line": "弟雖有過(제수유과)나        동생이 비록 잘못을 저질렀더라도"
    ,
        "index": "151",
        "chapter": "sec6"
    },
    {
        "section": "4. 우애편 (友愛篇): 형제와 자매",
        "hanja": "須勿聲責",
        "reading": "수물성책",
        "suffix": "하라",
        "translation": "모름지기 큰 소리로 꾸짖지 말라.",
        "original_line": "須勿聲責(수물성책)하라        모름지기 큰 소리로 꾸짖지 말라."
    ,
        "index": "152",
        "chapter": "sec6"
    },
    {
        "section": "4. 우애편 (友愛篇): 형제와 자매",
        "hanja": "兄弟有善",
        "reading": "형제유선",
        "suffix": "이면",
        "translation": "형제에게 좋은 일이 생기면",
        "original_line": "兄弟有善(형제유선)이면        형제에게 좋은 일이 생기면"
    ,
        "index": "153",
        "chapter": "sec6"
    },
    {
        "section": "4. 우애편 (友愛篇): 형제와 자매",
        "hanja": "必譽于外",
        "reading": "필예우외",
        "suffix": "하고",
        "translation": "반드시 밖으로 널리 칭찬해 주고,",
        "original_line": "必譽于外(필예우외)하고        반드시 밖으로 널리 칭찬해 주고,"
    ,
        "index": "154",
        "chapter": "sec6"
    },
    {
        "section": "4. 우애편 (友愛篇): 형제와 자매",
        "hanja": "兄弟有失",
        "reading": "형제유실",
        "suffix": "이면",
        "translation": "형제에게 허물이 있다면",
        "original_line": "兄弟有失(형제유실)이면        형제에게 허물이 있다면"
    ,
        "index": "155",
        "chapter": "sec6"
    },
    {
        "section": "4. 우애편 (友愛篇): 형제와 자매",
        "hanja": "隱而勿揚",
        "reading": "은이물양",
        "suffix": "하라",
        "translation": "감싸주고 덮어주어 밖으로 드러내지 말라.",
        "original_line": "隱而勿揚(은이물양)하라        감싸주고 덮어주어 밖으로 드러내지 말라."
    ,
        "index": "156",
        "chapter": "sec6"
    },
    {
        "section": "4. 우애편 (友愛篇): 형제와 자매",
        "hanja": "兄弟有難",
        "reading": "형제유난",
        "suffix": "이면",
        "translation": "형제에게 어려운 일이 생기면",
        "original_line": "兄弟有難(형제유난)이면        형제에게 어려운 일이 생기면"
    ,
        "index": "157",
        "chapter": "sec6"
    },
    {
        "section": "4. 우애편 (友愛篇): 형제와 자매",
        "hanja": "悶而思救",
        "reading": "민이사구",
        "suffix": "하라",
        "translation": "함께 고민하며 도울 방법을 찾아내라.",
        "original_line": "悶而思救(민이사구)하라        함께 고민하며 도울 방법을 찾아내라."
    ,
        "index": "158",
        "chapter": "sec6"
    },
    {
        "section": "4. 우애편 (友愛篇): 형제와 자매",
        "hanja": "兄能如此",
        "reading": "형능여차",
        "suffix": "면",
        "translation": "형이 이처럼 동생을 아끼고 이끌어주면",
        "original_line": "兄能如此(형능여차)면        형이 이처럼 동생을 아끼고 이끌어주면"
    ,
        "index": "159",
        "chapter": "sec6"
    },
    {
        "section": "4. 우애편 (友愛篇): 형제와 자매",
        "hanja": "弟亦效之",
        "reading": "제역효지",
        "suffix": "리라",
        "translation": "동생 또한 그 모습을 본받게 될 것이라.",
        "original_line": "弟亦效之(제역효지)리라        동생 또한 그 모습을 본받게 될 것이라."
    ,
        "index": "160",
        "chapter": "sec6"
    },
    {
        "section": "4. 우애편 (友愛篇): 형제와 자매",
        "hanja": "我有歡樂",
        "reading": "아유환락",
        "suffix": "이면",
        "translation": "나에게 기쁘고 즐거운 일이 있으면",
        "original_line": "我有歡樂(아유환락)이면        나에게 기쁘고 즐거운 일이 있으면"
    ,
        "index": "161",
        "chapter": "sec6"
    },
    {
        "section": "4. 우애편 (友愛篇): 형제와 자매",
        "hanja": "兄弟亦樂",
        "reading": "형제역락",
        "suffix": "하고",
        "translation": "형제 또한 함께 즐거워하고,",
        "original_line": "兄弟亦樂(형제역락)하고        형제 또한 함께 즐거워하고,"
    ,
        "index": "162",
        "chapter": "sec6"
    },
    {
        "section": "4. 우애편 (友愛篇): 형제와 자매",
        "hanja": "我有憂患",
        "reading": "아유우환",
        "suffix": "이면",
        "translation": "나에게 근심과 걱정이 생기면",
        "original_line": "我有憂患(아유우환)이면        나에게 근심과 걱정이 생기면"
    ,
        "index": "163",
        "chapter": "sec6"
    },
    {
        "section": "4. 우애편 (友愛篇): 형제와 자매",
        "hanja": "兄弟亦憂",
        "reading": "형제역우",
        "suffix": "하라",
        "translation": "형제 또한 함께 걱정하며 마음을 나누라.",
        "original_line": "兄弟亦憂(형제역우)하라        형제 또한 함께 걱정하며 마음을 나누라."
    ,
        "index": "164",
        "chapter": "sec6"
    },
    {
        "section": "4. 우애편 (友愛篇): 형제와 자매",
        "hanja": "雖有他親",
        "reading": "수유타친",
        "suffix": "이나",
        "translation": "비록 다른 친척들이 많이 있다고 하나",
        "original_line": "雖有他親(수유타친)이나        비록 다른 친척들이 많이 있다고 하나"
    ,
        "index": "165",
        "chapter": "sec6"
    },
    {
        "section": "4. 우애편 (友愛篇): 형제와 자매",
        "hanja": "豈若兄弟",
        "reading": "기약형제",
        "suffix": "리오",
        "translation": "어찌 형제간의 두터운 정과 같겠는가.",
        "original_line": "豈若兄弟(기약형제)리오        어찌 형제간의 두터운 정과 같겠는가."
    ,
        "index": "166",
        "chapter": "sec6"
    },
    {
        "section": "4. 우애편 (友愛篇): 형제와 자매",
        "hanja": "兄弟和睦",
        "reading": "형제화목",
        "suffix": "이면",
        "translation": "형제들이 서로 화목하게 잘 지내면",
        "original_line": "兄弟和睦(형제화목)이면        형제들이 서로 화목하게 잘 지내면"
    ,
        "index": "167",
        "chapter": "sec6"
    },
    {
        "section": "4. 우애편 (友愛篇): 형제와 자매",
        "hanja": "父母喜之",
        "reading": "부모희지",
        "suffix": "시니라",
        "translation": "부모님께서 그것을 가장 기뻐하시느니라.",
        "original_line": "父母喜之(부모희지)시니라        부모님께서 그것을 가장 기뻐하시느니라."
    ,
        "index": "168",
        "chapter": "sec6"
    },
    {
        "section": "5. 사생편 (師生篇): 스승과 제자",
        "hanja": "事師如親",
        "reading": "사사여친",
        "suffix": "하야",
        "translation": "스승 섬기기를 부모님 모시듯 정성을 다해",
        "original_line": "事師如親(사사여친)하야        스승 섬기기를 부모님 모시듯 정성을 다해"
    ,
        "index": "169",
        "chapter": "sec7"
    },
    {
        "section": "5. 사생편 (師生篇): 스승과 제자",
        "hanja": "必恭必敬",
        "reading": "필공필경",
        "suffix": "하라",
        "translation": "반드시 공손하고 공경하는 마음을 가져야 한다.",
        "original_line": "必恭必敬(필공필경)하라        반드시 공손하고 공경하는 마음을 가져야 한다."
    ,
        "index": "170",
        "chapter": "sec7"
    },
    {
        "section": "5. 사생편 (師生篇): 스승과 제자",
        "hanja": "先生施敎",
        "reading": "선생시교",
        "suffix": "어시든",
        "translation": "선생님께서 배움의 길을 열어 가르침을 주시면",
        "original_line": "先生施敎(선생시교)어시든        선생님께서 배움의 길을 열어 가르침을 주시면"
    ,
        "index": "171",
        "chapter": "sec7"
    },
    {
        "section": "5. 사생편 (師生篇): 스승과 제자",
        "hanja": "弟子是則",
        "reading": "제자시칙",
        "suffix": "하라",
        "translation": "제자는 그 가르침을 삶의 올바른 본보기로 삼으라.",
        "original_line": "弟子是則(제자시칙)하라        제자는 그 가르침을 삶의 올바른 본보기로 삼으라."
    ,
        "index": "172",
        "chapter": "sec7"
    },
    {
        "section": "5. 사생편 (師生篇): 스승과 제자",
        "hanja": "夙興夜寐",
        "reading": "숙흥야매",
        "suffix": "하야",
        "translation": "아침 일찍 일어나고 밤늦게 잠자리에 들 때까지",
        "original_line": "夙興夜寐(숙흥야매)하야        아침 일찍 일어나고 밤늦게 잠자리에 들 때까지"
    ,
        "index": "173",
        "chapter": "sec7"
    },
    {
        "section": "5. 사생편 (師生篇): 스승과 제자",
        "hanja": "勿懶讀書",
        "reading": "물라독서",
        "suffix": "하라",
        "translation": "책 읽고 공부하는 일에 게으름을 피우지 말라.",
        "original_line": "勿懶讀書(물라독서)하라        책 읽고 공부하는 일에 게으름을 피우지 말라."
    ,
        "index": "174",
        "chapter": "sec7"
    },
    {
        "section": "5. 사생편 (師生篇): 스승과 제자",
        "hanja": "勤勉工夫",
        "reading": "근면공부",
        "suffix": "면",
        "translation": "스스로 부지런히 힘써 학문에 정진하면",
        "original_line": "勤勉工夫(근면공부)면        스스로 부지런히 힘써 학문에 정진하면"
    ,
        "index": "175",
        "chapter": "sec7"
    },
    {
        "section": "5. 사생편 (師生篇): 스승과 제자",
        "hanja": "父母悅之",
        "reading": "부모열지",
        "suffix": "시니라",
        "translation": "부모님께서 그 모습을 보시고 마음 깊이 기뻐하시느니라.",
        "original_line": "父母悅之(부모열지)시니라        부모님께서 그 모습을 보시고 마음 깊이 기뻐하시느니라."
    ,
        "index": "176",
        "chapter": "sec7"
    },
    {
        "section": "5. 사생편 (師生篇): 스승과 제자",
        "hanja": "始習文字",
        "reading": "시습문자",
        "suffix": "어든",
        "translation": "처음 글자를 배우고 익히기 시작할 때부터",
        "original_line": "始習文字(시습문자)어든        처음 글자를 배우고 익히기 시작할 때부터"
    ,
        "index": "177",
        "chapter": "sec7"
    },
    {
        "section": "5. 사생편 (師生篇): 스승과 제자",
        "hanja": "字畫楷正",
        "reading": "자획해정",
        "suffix": "하라",
        "translation": "글자 한 획 한 획을 정성 들여 바르고 또박또박 써라.",
        "original_line": "字畫楷正(자획해정)하라        글자 한 획 한 획을 정성 들여 바르고 또박또박 써라."
    ,
        "index": "178",
        "chapter": "sec7"
    },
    {
        "section": "5. 사생편 (師生篇): 스승과 제자",
        "hanja": "書冊狼藉",
        "reading": "서책낭자",
        "suffix": "어든",
        "translation": "책들이 여기저기 어지럽게 흩어져 있다면",
        "original_line": "書冊狼藉(서책낭자)어든        책들이 여기저기 어지럽게 흩어져 있다면"
    ,
        "index": "179",
        "chapter": "sec7"
    },
    {
        "section": "5. 사생편 (師生篇): 스승과 제자",
        "hanja": "每必整頓",
        "reading": "매필정돈",
        "suffix": "하라",
        "translation": "매번 잊지 말고 반드시 깨끗하게 정리정돈하라.",
        "original_line": "每必整頓(매필정돈)하라        매번 잊지 말고 반드시 깨끗하게 정리정돈하라."
    ,
        "index": "180",
        "chapter": "sec7"
    },
    {
        "section": "5. 사생편 (師生篇): 스승과 제자",
        "hanja": "能孝能悌",
        "reading": "능효능제",
        "suffix": "는",
        "translation": "부모님께 효도하고 형제와 화목하게 지낼 수 있음은",
        "original_line": "能孝能悌(능효능제)는        부모님께 효도하고 형제와 화목하게 지낼 수 있음은"
    ,
        "index": "181",
        "chapter": "sec7"
    },
    {
        "section": "5. 사생편 (師生篇): 스승과 제자",
        "hanja": "莫非師恩",
        "reading": "막비사은",
        "suffix": "이요",
        "translation": "스승의 가르침이 아니었다면 불가능했을 큰 은혜이며,",
        "original_line": "莫非師恩(막비사은)이요        스승의 가르침이 아니었다면 불가능했을 큰 은혜이며,"
    ,
        "index": "182",
        "chapter": "sec7"
    },
    {
        "section": "5. 사생편 (師生篇): 스승과 제자",
        "hanja": "能知能行",
        "reading": "능지능행",
        "suffix": "은",
        "translation": "세상을 아는 지혜와 이를 실천할 수 있는 힘은",
        "original_line": "能知能行(능지능행)은        세상을 아는 지혜와 이를 실천할 수 있는 힘은"
    ,
        "index": "183",
        "chapter": "sec7"
    },
    {
        "section": "5. 사생편 (師生篇): 스승과 제자",
        "hanja": "總是師功",
        "reading": "총시사공",
        "suffix": "이니라",
        "translation": "모두가 스승께서 이끌어주신 공덕이니라.",
        "original_line": "總是師功(총시사공)이니라        모두가 스승께서 이끌어주신 공덕이니라."
    ,
        "index": "184",
        "chapter": "sec7"
    },
    {
        "section": "6. 붕우편 (朋友篇): 어른과 친구",
        "hanja": "長者慈幼",
        "reading": "장자자유",
        "suffix": "하고",
        "translation": "어른은 아랫사람을 사랑으로 보듬어 주고",
        "original_line": "長者慈幼(장자자유)하고        어른은 아랫사람을 사랑으로 보듬어 주고"
    ,
        "index": "185",
        "chapter": "sec8"
    },
    {
        "section": "6. 붕우편 (朋友篇): 어른과 친구",
        "hanja": "幼者敬長",
        "reading": "유자경장",
        "suffix": "하라",
        "translation": "아랫사람은 어른을 공경하며 예우를 다하라.",
        "original_line": "幼者敬長(유자경장)하라        아랫사람은 어른을 공경하며 예우를 다하라."
    ,
        "index": "186",
        "chapter": "sec8"
    },
    {
        "section": "6. 붕우편 (朋友篇): 어른과 친구",
        "hanja": "長者之前",
        "reading": "장자지전",
        "suffix": "엔",
        "translation": "나보다 어른인 분의 앞에서는",
        "original_line": "長者之前(장자지전)엔        나보다 어른인 분의 앞에서는"
    ,
        "index": "187",
        "chapter": "sec8"
    },
    {
        "section": "6. 붕우편 (朋友篇): 어른과 친구",
        "hanja": "進退必恭",
        "reading": "진퇴필공",
        "suffix": "하라",
        "translation": "나아가고 물러날 때 반드시 공손히 행동하라.",
        "original_line": "進退必恭(진퇴필공)하라        나아가고 물러날 때 반드시 공손히 행동하라."
    ,
        "index": "188",
        "chapter": "sec8"
    },
    {
        "section": "6. 붕우편 (朋友篇): 어른과 친구",
        "hanja": "年長以倍",
        "reading": "연장이배",
        "suffix": "어든",
        "translation": "나이가 나보다 두 배 정도 많으신 분은",
        "original_line": "年長以倍(연장이배)어든        나이가 나보다 두 배 정도 많으신 분은"
    ,
        "index": "189",
        "chapter": "sec8"
    },
    {
        "section": "6. 붕우편 (朋友篇): 어른과 친구",
        "hanja": "父以事之",
        "reading": "부이사지",
        "suffix": "하고",
        "translation": "부모님을 섬기듯 정성을 다해 모시고,",
        "original_line": "父以事之(부이사지)하고        부모님을 섬기듯 정성을 다해 모시고,"
    ,
        "index": "190",
        "chapter": "sec8"
    },
    {
        "section": "6. 붕우편 (朋友篇): 어른과 친구",
        "hanja": "十年以長",
        "reading": "십년이장",
        "suffix": "어든",
        "translation": "나보다 열 살 정도 위이신 분은",
        "original_line": "十年以長(십년이장)어든        나보다 열 살 정도 위이신 분은"
    ,
        "index": "191",
        "chapter": "sec8"
    },
    {
        "section": "6. 붕우편 (朋友篇): 어른과 친구",
        "hanja": "兄以事之",
        "reading": "형이사지",
        "suffix": "하라",
        "translation": "친형을 대하듯 깍듯이 예로써 모셔라.",
        "original_line": "兄以事之(형이사지)하라        친형을 대하듯 깍듯이 예로써 모셔라."
    ,
        "index": "192",
        "chapter": "sec8"
    },
    {
        "section": "6. 붕우편 (朋友篇): 어른과 친구",
        "hanja": "我敬人親",
        "reading": "아경인친",
        "suffix": "이면",
        "translation": "내가 다른 사람의 부모를 공경한다면",
        "original_line": "我敬人親(아경인친)이면        내가 다른 사람의 부모를 공경한다면"
    ,
        "index": "193",
        "chapter": "sec8"
    },
    {
        "section": "6. 붕우편 (朋友篇): 어른과 친구",
        "hanja": "人敬我親",
        "reading": "인경아친",
        "suffix": "하고",
        "translation": "다른 사람도 나의 부모를 공경해 줄 것이며,",
        "original_line": "人敬我親(인경아친)하고        다른 사람도 나의 부모를 공경해 줄 것이며,"
    ,
        "index": "194",
        "chapter": "sec8"
    },
    {
        "section": "6. 붕우편 (朋友篇): 어른과 친구",
        "hanja": "我敬人兄",
        "reading": "아경인형",
        "suffix": "이면",
        "translation": "내가 다른 사람의 형을 존중한다면",
        "original_line": "我敬人兄(아경인형)이면        내가 다른 사람의 형을 존중한다면"
    ,
        "index": "195",
        "chapter": "sec8"
    },
    {
        "section": "6. 붕우편 (朋友篇): 어른과 친구",
        "hanja": "人敬我兄",
        "reading": "인경아형",
        "suffix": "하리라",
        "translation": "그 사람도 나의 형을 존중해 줄 것이라.",
        "original_line": "人敬我兄(인경아형)하리라        그 사람도 나의 형을 존중해 줄 것이라."
    ,
        "index": "196",
        "chapter": "sec8"
    },
    {
        "section": "6. 붕우편 (朋友篇): 어른과 친구",
        "hanja": "賓客來訪",
        "reading": "빈객래방",
        "suffix": "이어든",
        "translation": "손님이 나를 찾아와 방문하신다면",
        "original_line": "賓客來訪(빈객래방)이어든        손님이 나를 찾아와 방문하신다면"
    ,
        "index": "197",
        "chapter": "sec8"
    },
    {
        "section": "6. 붕우편 (朋友篇): 어른과 친구",
        "hanja": "接待必誠",
        "reading": "접대필성",
        "suffix": "하라",
        "translation": "정성을 다해 따뜻하게 맞이하고 대접하라.",
        "original_line": "接待必誠(접대필성)하라        정성을 다해 따뜻하게 맞이하고 대접하라."
    ,
        "index": "198",
        "chapter": "sec8"
    },
    {
        "section": "6. 붕우편 (朋友篇): 어른과 친구",
        "hanja": "賓客不來",
        "reading": "빈객불래",
        "suffix": "면",
        "translation": "찾아오는 손님이 끊겨 발길이 뜸해지면",
        "original_line": "賓客不來(빈객불래)면        찾아오는 손님이 끊겨 발길이 뜸해지면"
    ,
        "index": "199",
        "chapter": "sec8"
    },
    {
        "section": "6. 붕우편 (朋友篇): 어른과 친구",
        "hanja": "門戶寂寞",
        "reading": "문호적막",
        "suffix": "이니라",
        "translation": "그 집안의 기운이 쓸쓸하고 적막해지느니라.",
        "original_line": "門戶寂寞(문호적막)이니라        그 집안의 기운이 쓸쓸하고 적막해지느니라."
    ,
        "index": "200",
        "chapter": "sec8"
    },
    {
        "section": "6. 붕우편 (朋友篇): 어른과 친구",
        "hanja": "人之在世",
        "reading": "인지재세",
        "suffix": "에",
        "translation": "사람이 이 세상을 살아가는 데 있어",
        "original_line": "人之在世(인지재세)에        사람이 이 세상을 살아가는 데 있어"
    ,
        "index": "201",
        "chapter": "sec8"
    },
    {
        "section": "6. 붕우편 (朋友篇): 어른과 친구",
        "hanja": "不可無友",
        "reading": "불가무유",
        "suffix": "니",
        "translation": "마음 나눌 진정한 친구가 없어서는 안 되니,",
        "original_line": "不可無友(불가무유)니        마음 나눌 진정한 친구가 없어서는 안 되니,"
    ,
        "index": "202",
        "chapter": "sec8"
    },
    {
        "section": "6. 붕우편 (朋友篇): 어른과 친구",
        "hanja": "以文會友",
        "reading": "이문회유",
        "suffix": "하고",
        "translation": "학문과 배움으로써 좋은 벗들을 모으고",
        "original_line": "以文會友(이문회유)하고        학문과 배움으로써 좋은 벗들을 모으고"
    ,
        "index": "203",
        "chapter": "sec8"
    },
    {
        "section": "6. 붕우편 (朋友篇): 어른과 친구",
        "hanja": "以友輔仁",
        "reading": "이우보인",
        "suffix": "하라",
        "translation": "그 벗과 함께 어진 덕을 쌓도록 서로 도와라.",
        "original_line": "以友輔仁(이우보인)하라        그 벗과 함께 어진 덕을 쌓도록 서로 도와라."
    ,
        "index": "204",
        "chapter": "sec8"
    },
    {
        "section": "6. 붕우편 (朋友篇): 어른과 친구",
        "hanja": "友其正人",
        "reading": "우기정인",
        "suffix": "이면",
        "translation": "바른 사람을 골라 친구로 사귄다면",
        "original_line": "友其正人(우기정인)이면        바른 사람을 골라 친구로 사귄다면"
    ,
        "index": "205",
        "chapter": "sec8"
    },
    {
        "section": "6. 붕우편 (朋友篇): 어른과 친구",
        "hanja": "我亦自正",
        "reading": "아역자정",
        "suffix": "하고",
        "translation": "나 또한 저절로 바른 길을 걷게 될 것이요,",
        "original_line": "我亦自正(아역자정)하고        나 또한 저절로 바른 길을 걷게 될 것이요,"
    ,
        "index": "206",
        "chapter": "sec8"
    },
    {
        "section": "6. 붕우편 (朋友篇): 어른과 친구",
        "hanja": "從遊邪人",
        "reading": "종유사인",
        "suffix": "이면",
        "translation": "그릇된 길을 가는 자를 따라 어울리면",
        "original_line": "從遊邪人(종유사인)이면        그릇된 길을 가는 자를 따라 어울리면"
    ,
        "index": "207",
        "chapter": "sec8"
    },
    {
        "section": "6. 붕우편 (朋友篇): 어른과 친구",
        "hanja": "我亦自邪",
        "reading": "아역자사",
        "suffix": "하리라",
        "translation": "나 또한 자연스럽게 나쁜 길에 빠지게 되리라.",
        "original_line": "我亦自邪(아역자사)하리라        나 또한 자연스럽게 나쁜 길에 빠지게 되리라."
    ,
        "index": "208",
        "chapter": "sec8"
    },
    {
        "section": "6. 붕우편 (朋友篇): 어른과 친구",
        "hanja": "蓬生麻中",
        "reading": "봉생마중",
        "suffix": "이면",
        "translation": "굽어 자라는 쑥도 곧은 삼밭에서 자라면",
        "original_line": "蓬生麻中(봉생마중)이면        굽어 자라는 쑥도 곧은 삼밭에서 자라면"
    ,
        "index": "209",
        "chapter": "sec8"
    },
    {
        "section": "6. 붕우편 (朋友篇): 어른과 친구",
        "hanja": "不扶自直",
        "reading": "불부자직",
        "suffix": "하고",
        "translation": "붙잡아주지 않아도 스스로 곧게 자라나며,",
        "original_line": "不扶自直(불부자직)하고        붙잡아주지 않아도 스스로 곧게 자라나며,"
    ,
        "index": "210",
        "chapter": "sec8"
    },
    {
        "section": "6. 붕우편 (朋友篇): 어른과 친구",
        "hanja": "白沙在泥",
        "reading": "백사재니",
        "suffix": "면",
        "translation": "하얀 모래라도 진흙 속에 섞여 있으면",
        "original_line": "白沙在泥(백사재니)면        하얀 모래라도 진흙 속에 섞여 있으면"
    ,
        "index": "211",
        "chapter": "sec8"
    },
    {
        "section": "6. 붕우편 (朋友篇): 어른과 친구",
        "hanja": "不染自汚",
        "reading": "불염자오",
        "suffix": "니라",
        "translation": "물들이려 하지 않아도 저절로 더러워지느니라.",
        "original_line": "不染自汚(불염자오)니라        물들이려 하지 않아도 저절로 더러워지느니라."
    ,
        "index": "212",
        "chapter": "sec8"
    },
    {
        "section": "6. 붕우편 (朋友篇): 어른과 친구",
        "hanja": "近墨者黑",
        "reading": "근묵자흑",
        "suffix": "이요",
        "translation": "먹을 가까이하는 사람은 검게 물들기 마련이고",
        "original_line": "近墨者黑(근묵자흑)이요        먹을 가까이하는 사람은 검게 물들기 마련이고"
    ,
        "index": "213",
        "chapter": "sec8"
    },
    {
        "section": "6. 붕우편 (朋友篇): 어른과 친구",
        "hanja": "近朱者赤",
        "reading": "근주자적",
        "suffix": "이니",
        "translation": "붉은빛을 가까이하는 사람은 붉게 변하기 마련이다.",
        "original_line": "近朱者赤(근주자적)이니        붉은빛을 가까이하는 사람은 붉게 변하기 마련이다."
    ,
        "index": "214",
        "chapter": "sec8"
    },
    {
        "section": "6. 붕우편 (朋友篇): 어른과 친구",
        "hanja": "居必擇隣",
        "reading": "거필택린",
        "suffix": "하고",
        "translation": "살 곳을 정할 때는 반드시 이웃을 살피고",
        "original_line": "居必擇隣(거필택린)하고        살 곳을 정할 때는 반드시 이웃을 살피고"
    ,
        "index": "215",
        "chapter": "sec8"
    },
    {
        "section": "6. 붕우편 (朋友篇): 어른과 친구",
        "hanja": "就必有德",
        "reading": "취필유덕",
        "suffix": "하라",
        "translation": "나아갈 때는 반드시 덕이 있는 곳을 향하라.",
        "original_line": "就必有德(취필유덕)하라        나아갈 때는 반드시 덕이 있는 곳을 향하라."
    ,
        "index": "216",
        "chapter": "sec8"
    },
    {
        "section": "6. 붕우편 (朋友篇): 어른과 친구",
        "hanja": "擇而交之",
        "reading": "택이교지",
        "suffix": "면",
        "translation": "친구를 가려서 사귀면",
        "original_line": "擇而交之(택이교지)면        친구를 가려서 사귀면"
    ,
        "index": "217",
        "chapter": "sec8"
    },
    {
        "section": "6. 붕우편 (朋友篇): 어른과 친구",
        "hanja": "有所補益",
        "reading": "유소보익",
        "suffix": "하고",
        "translation": "나에게 큰 도움과 보탬이 될 것이나,",
        "original_line": "有所補益(유소보익)하고        나에게 큰 도움과 보탬이 될 것이나,"
    ,
        "index": "218",
        "chapter": "sec8"
    },
    {
        "section": "6. 붕우편 (朋友篇): 어른과 친구",
        "hanja": "不擇而交",
        "reading": "불택이교",
        "suffix": "면",
        "translation": "가리지 않고 함부로 사귀게 되면",
        "original_line": "不擇而交(불택이교)면        가리지 않고 함부로 사귀게 되면"
    ,
        "index": "219",
        "chapter": "sec8"
    },
    {
        "section": "6. 붕우편 (朋友篇): 어른과 친구",
        "hanja": "反有害矣",
        "reading": "반유해의",
        "suffix": "리라",
        "translation": "오히려 나에게 해로운 결과만 따를 것이라.",
        "original_line": "反有害矣(반유해의)리라        오히려 나에게 해로운 결과만 따를 것이라."
    ,
        "index": "220",
        "chapter": "sec8"
    },
    {
        "section": "6. 붕우편 (朋友篇): 어른과 친구",
        "hanja": "朋友有過",
        "reading": "붕우유과",
        "suffix": "어든",
        "translation": "친구에게 잘못이나 허물이 보인다면",
        "original_line": "朋友有過(붕우유과)어든        친구에게 잘못이나 허물이 보인다면"
    ,
        "index": "221",
        "chapter": "sec8"
    },
    {
        "section": "6. 붕우편 (朋友篇): 어른과 친구",
        "hanja": "忠告善導",
        "reading": "충고선도",
        "suffix": "하라",
        "translation": "진심 어린 조언으로 올바르게 이끌어주라.",
        "original_line": "忠告善導(충고선도)하라        진심 어린 조언으로 올바르게 이끌어주라."
    ,
        "index": "222",
        "chapter": "sec8"
    },
    {
        "section": "6. 붕우편 (朋友篇): 어른과 친구",
        "hanja": "人無責友",
        "reading": "인무책유",
        "suffix": "면",
        "translation": "곁에 잘못을 꾸짖어 주는 친구가 없다면",
        "original_line": "人無責友(인무책유)면        곁에 잘못을 꾸짖어 주는 친구가 없다면"
    ,
        "index": "223",
        "chapter": "sec8"
    },
    {
        "section": "6. 붕우편 (朋友篇): 어른과 친구",
        "hanja": "易陷不義",
        "reading": "이함불의",
        "suffix": "니라",
        "translation": "쉽게 옳지 못한 일에 빠져들고 마느니라.",
        "original_line": "易陷不義(이함불의)니라        쉽게 옳지 못한 일에 빠져들고 마느니라."
    ,
        "index": "224",
        "chapter": "sec8"
    },
    {
        "section": "6. 붕우편 (朋友篇): 어른과 친구",
        "hanja": "面讚我善",
        "reading": "면찬아선",
        "suffix": "이면",
        "translation": "내 앞에서 나의 장점만 늘어놓으며 칭찬하면",
        "original_line": "面讚我善(면찬아선)이면        내 앞에서 나의 장점만 늘어놓으며 칭찬하면"
    ,
        "index": "225",
        "chapter": "sec8"
    },
    {
        "section": "6. 붕우편 (朋友篇): 어른과 친구",
        "hanja": "諂諛之人",
        "reading": "첨유지인",
        "suffix": "이요",
        "translation": "그것은 아첨하며 비위를 맞추는 사람이고,",
        "original_line": "諂諛之人(첨유지인)이요        그것은 아첨하며 비위를 맞추는 사람이고,"
    ,
        "index": "226",
        "chapter": "sec8"
    },
    {
        "section": "6. 붕우편 (朋友篇): 어른과 친구",
        "hanja": "面責我過",
        "reading": "면책아과",
        "suffix": "면",
        "translation": "내 앞에서 나의 잘못을 따끔하게 꾸짖어주면",
        "original_line": "面責我過(면책아과)면        내 앞에서 나의 잘못을 따끔하게 꾸짖어주면"
    ,
        "index": "227",
        "chapter": "sec8"
    },
    {
        "section": "6. 붕우편 (朋友篇): 어른과 친구",
        "hanja": "剛直之人",
        "reading": "강직지인",
        "suffix": "이니라",
        "translation": "그야말로 마음이 곧고 강직한 사람이라 할 수 있다.",
        "original_line": "剛直之人(강직지인)이니라        그야말로 마음이 곧고 강직한 사람이라 할 수 있다."
    ,
        "index": "228",
        "chapter": "sec8"
    },
    {
        "section": "6. 붕우편 (朋友篇): 어른과 친구",
        "hanja": "言而不信",
        "reading": "언이불신",
        "suffix": "이면",
        "translation": "말만 앞세우고 믿음을 주지 못하는 자는",
        "original_line": "言而不信(언이불신)이면        말만 앞세우고 믿음을 주지 못하는 자는"
    ,
        "index": "229",
        "chapter": "sec8"
    },
    {
        "section": "6. 붕우편 (朋友篇): 어른과 친구",
        "hanja": "非直之友",
        "reading": "비직지유",
        "suffix": "니라",
        "translation": "결코 정직하고 올바른 친구라 할 수 없느니라.",
        "original_line": "非直之友(비직지유)니라        결코 정직하고 올바른 친구라 할 수 없느니라."
    ,
        "index": "230",
        "chapter": "sec8"
    },
    {
        "section": "7-1. 수신편: 오륜과 삼강 (인간 사회의 다섯 줄기와 세 기둥)",
        "hanja": "見善從之",
        "reading": "견선종지",
        "suffix": "하고",
        "translation": "좋은 선행을 보았다면 망설임 없이 본받고",
        "original_line": "見善從之(견선종지)하고        좋은 선행을 보았다면 망설임 없이 본받고"
    ,
        "index": "231",
        "chapter": "sec9"
    },
    {
        "section": "7-1. 수신편: 오륜과 삼강 (인간 사회의 다섯 줄기와 세 기둥)",
        "hanja": "知過必改",
        "reading": "지과필개",
        "suffix": "하라",
        "translation": "나의 잘못을 깨달았다면 반드시 즉시 고쳐라.",
        "original_line": "知過必改(지과필개)하라        나의 잘못을 깨달았다면 반드시 즉시 고쳐라."
    ,
        "index": "232",
        "chapter": "sec9"
    },
    {
        "section": "7-1. 수신편: 오륜과 삼강 (인간 사회의 다섯 줄기와 세 기둥)",
        "hanja": "悅人讚者",
        "reading": "열인찬자",
        "suffix": "는",
        "translation": "남의 칭찬만 달콤하게 즐기는 사람은",
        "original_line": "悅人讚者(열인찬자)는        남의 칭찬만 달콤하게 즐기는 사람은"
    ,
        "index": "233",
        "chapter": "sec9"
    },
    {
        "section": "7-1. 수신편: 오륜과 삼강 (인간 사회의 다섯 줄기와 세 기둥)",
        "hanja": "百事皆僞",
        "reading": "백사개위",
        "suffix": "요",
        "translation": "하는 일마다 겉치레와 거짓이 섞이게 되고,",
        "original_line": "百事皆僞(백사개위)요        하는 일마다 겉치레와 거짓이 섞이게 되고,"
    ,
        "index": "234",
        "chapter": "sec9"
    },
    {
        "section": "7-1. 수신편: 오륜과 삼강 (인간 사회의 다섯 줄기와 세 기둥)",
        "hanja": "厭人責者",
        "reading": "염인책자",
        "suffix": "는",
        "translation": "남의 따끔한 조언을 듣기 싫어하는 사람은",
        "original_line": "厭人責者(염인책자)는        남의 따끔한 조언을 듣기 싫어하는 사람은"
    ,
        "index": "235",
        "chapter": "sec9"
    },
    {
        "section": "7-1. 수신편: 오륜과 삼강 (인간 사회의 다섯 줄기와 세 기둥)",
        "hanja": "其行無進",
        "reading": "기행무진",
        "suffix": "이니라",
        "translation": "그 행실에 결코 더 나은 발전이 없느니라.",
        "original_line": "其行無進(기행무진)이니라        그 행실에 결코 더 나은 발전이 없느니라."
    ,
        "index": "236",
        "chapter": "sec9"
    },
    {
        "section": "7-1. 수신편: 오륜과 삼강 (인간 사회의 다섯 줄기와 세 기둥)",
        "hanja": "元亨利貞",
        "reading": "원형이정",
        "suffix": "은",
        "translation": "만물이 태어나고 자라 결실을 맺는 것은",
        "original_line": "元亨利貞(원형이정)은        만물이 태어나고 자라 결실을 맺는 것은"
    ,
        "index": "237",
        "chapter": "sec9"
    },
    {
        "section": "7-1. 수신편: 오륜과 삼강 (인간 사회의 다섯 줄기와 세 기둥)",
        "hanja": "天道之常",
        "reading": "천도지상",
        "suffix": "이요",
        "translation": "변하지 않는 자연과 하늘의 이치이며,",
        "original_line": "天道之常(천도지상)이요        변하지 않는 자연과 하늘의 이치이며,"
    ,
        "index": "238",
        "chapter": "sec9"
    },
    {
        "section": "7-1. 수신편: 오륜과 삼강 (인간 사회의 다섯 줄기와 세 기둥)",
        "hanja": "仁義禮智",
        "reading": "인의예지",
        "suffix": "는",
        "translation": "어짊과 의로움, 예의와 지혜는",
        "original_line": "仁義禮智(인의예지)는        어짊과 의로움, 예의와 지혜는"
    ,
        "index": "239",
        "chapter": "sec9"
    },
    {
        "section": "7-1. 수신편: 오륜과 삼강 (인간 사회의 다섯 줄기와 세 기둥)",
        "hanja": "人性之綱",
        "reading": "인성지강",
        "suffix": "이니라",
        "translation": "사람의 본성을 지탱하는 가장 큰 줄기니라.",
        "original_line": "人性之綱(인성지강)이니라        사람의 본성을 지탱하는 가장 큰 줄기니라."
    ,
        "index": "240",
        "chapter": "sec9"
    },
    {
        "section": "7-1. 수신편: 오륜과 삼강 (인간 사회의 다섯 줄기와 세 기둥)",
        "hanja": "父子有親",
        "reading": "부자유친",
        "suffix": "하며",
        "translation": "부모와 자식 사이에는 깊은 친애함이 있어야 하고",
        "original_line": "父子有親(부자유친)하며        부모와 자식 사이에는 깊은 친애함이 있어야 하고"
    ,
        "index": "241",
        "chapter": "sec9"
    },
    {
        "section": "7-1. 수신편: 오륜과 삼강 (인간 사회의 다섯 줄기와 세 기둥)",
        "hanja": "君臣有義",
        "reading": "군신유의",
        "suffix": "하며",
        "translation": "리더와 구성원 사이에는 굳건한 의리가 있어야 하며,",
        "original_line": "君臣有義(군신유의)하며        리더와 구성원 사이에는 굳건한 의리가 있어야 하며,"
    ,
        "index": "242",
        "chapter": "sec9"
    },
    {
        "section": "7-1. 수신편: 오륜과 삼강 (인간 사회의 다섯 줄기와 세 기둥)",
        "hanja": "夫婦有別",
        "reading": "부부유별",
        "suffix": "하며",
        "translation": "남편과 아내는 서로의 역할을 존중하며 분별이 있고",
        "original_line": "夫婦有別(부부유별)하며        남편과 아내는 서로의 역할을 존중하며 분별이 있고"
    ,
        "index": "243",
        "chapter": "sec9"
    },
    {
        "section": "7-1. 수신편: 오륜과 삼강 (인간 사회의 다섯 줄기와 세 기둥)",
        "hanja": "長幼有序",
        "reading": "장유유서",
        "suffix": "하며",
        "translation": "어른과 아이 사이에는 삶의 순서와 질서가 있으며,",
        "original_line": "長幼有序(장유유서)하며        어른과 아이 사이에는 삶의 순서와 질서가 있으며,"
    ,
        "index": "244",
        "chapter": "sec9"
    },
    {
        "section": "7-1. 수신편: 오륜과 삼강 (인간 사회의 다섯 줄기와 세 기둥)",
        "hanja": "朋友有信",
        "reading": "붕우유신",
        "suffix": "이니",
        "translation": "친구와 친구 사이에는 변치 않는 믿음이 있어야 하니",
        "original_line": "朋友有信(붕우유신)이니        친구와 친구 사이에는 변치 않는 믿음이 있어야 하니"
    ,
        "index": "245",
        "chapter": "sec9"
    },
    {
        "section": "7-1. 수신편: 오륜과 삼강 (인간 사회의 다섯 줄기와 세 기둥)",
        "hanja": "是非謂五倫",
        "reading": "시위오륜",
        "suffix": "이니라",
        "translation": "이것을 일컬어 사람이 지켜야 할 다섯 가지 도리라 한다.",
        "original_line": "是非謂五倫(시위오륜)이니라        이것을 일컬어 사람이 지켜야 할 다섯 가지 도리라 한다."
    ,
        "index": "246",
        "chapter": "sec9"
    },
    {
        "section": "7-1. 수신편: 오륜과 삼강 (인간 사회의 다섯 줄기와 세 기둥)",
        "hanja": "君爲臣綱",
        "reading": "군위신강",
        "suffix": "이요",
        "translation": "리더는 구성원의 모범이 되는 기둥이 되어야 하고",
        "original_line": "君爲臣綱(군위신강)이요        리더는 구성원의 모범이 되는 기둥이 되어야 하고"
    ,
        "index": "247",
        "chapter": "sec9"
    },
    {
        "section": "7-1. 수신편: 오륜과 삼강 (인간 사회의 다섯 줄기와 세 기둥)",
        "hanja": "父爲子綱",
        "reading": "부위자강",
        "suffix": "이요",
        "translation": "아버지는 자식의 삶을 이끄는 기둥이 되어야 하며,",
        "original_line": "父爲子綱(부위자강)이요        아버지는 자식의 삶을 이끄는 기둥이 되어야 하며,"
    ,
        "index": "248",
        "chapter": "sec9"
    },
    {
        "section": "7-1. 수신편: 오륜과 삼강 (인간 사회의 다섯 줄기와 세 기둥)",
        "hanja": "夫爲婦綱",
        "reading": "부위부강",
        "suffix": "이니",
        "translation": "남편은 아내와 가정의 든든한 기둥이 되어야 하니",
        "original_line": "夫爲婦綱(부위부강)이니        남편은 아내와 가정의 든든한 기둥이 되어야 하니"
    ,
        "index": "249",
        "chapter": "sec9"
    },
    {
        "section": "7-1. 수신편: 오륜과 삼강 (인간 사회의 다섯 줄기와 세 기둥)",
        "hanja": "是謂三綱",
        "reading": "시위삼강",
        "suffix": "이니라",
        "translation": "이것을 일컬어 사회를 지탱하는 세 가지 큰 기둥이라 한다.",
        "original_line": "是謂三綱(시위삼강)이니라        이것을 일컬어 사회를 지탱하는 세 가지 큰 기둥이라 한다."
    ,
        "index": "250",
        "chapter": "sec9"
    },
    {
        "section": "7-1. 수신편: 오륜과 삼강 (인간 사회의 다섯 줄기와 세 기둥)",
        "hanja": "人所以貴",
        "reading": "인소이귀",
        "suffix": "는",
        "translation": "사람이 만물 중에서 가장 귀하게 여겨지는 까닭은",
        "original_line": "人所以貴(인소이귀)는        사람이 만물 중에서 가장 귀하게 여겨지는 까닭은"
    ,
        "index": "251",
        "chapter": "sec9"
    },
    {
        "section": "7-1. 수신편: 오륜과 삼강 (인간 사회의 다섯 줄기와 세 기둥)",
        "hanja": "以其倫綱",
        "reading": "이기윤강",
        "suffix": "이니라",
        "translation": "바로 이러한 도리와 질서를 지키기 때문이니라.",
        "original_line": "以其倫綱(이기윤강)이니라        바로 이러한 도리와 질서를 지키기 때문이니라."
    ,
        "index": "252",
        "chapter": "sec9"
    },
    {
        "section": "7-2. 수신편: 구용과 구사 (품격 있는 몸가짐과 지혜로운 생각)",
        "hanja": "足容必重",
        "reading": "족용필중",
        "suffix": "하고",
        "translation": "발걸음은 모름지기 가볍지 않고 진중해야 하며,",
        "original_line": "足容必重(족용필중)하고        발걸음은 모름지기 가볍지 않고 진중해야 하며,"
    ,
        "index": "253",
        "chapter": "sec10"
    },
    {
        "section": "7-2. 수신편: 구용과 구사 (품격 있는 몸가짐과 지혜로운 생각)",
        "hanja": "手容必恭",
        "reading": "수용필공",
        "suffix": "하라",
        "translation": "손의 움직임은 언제나 공손하고 단정해야 한다.",
        "original_line": "手容必恭(수용필공)하라        손의 움직임은 언제나 공손하고 단정해야 한다."
    ,
        "index": "254",
        "chapter": "sec10"
    },
    {
        "section": "7-2. 수신편: 구용과 구사 (품격 있는 몸가짐과 지혜로운 생각)",
        "hanja": "目容必端",
        "reading": "목용필단",
        "suffix": "하고",
        "translation": "눈빛은 항상 바르고 곧게 유지해야 하며,",
        "original_line": "目容必端(목용필단)하고        눈빛은 항상 바르고 곧게 유지해야 하며,"
    ,
        "index": "255",
        "chapter": "sec10"
    },
    {
        "section": "7-2. 수신편: 구용과 구사 (품격 있는 몸가짐과 지혜로운 생각)",
        "hanja": "口容必止",
        "reading": "구용필지",
        "suffix": "하라",
        "translation": "입 모양은 함부로 놀리지 말고 굳게 다물어야 한다.",
        "original_line": "口容必止(구용필지)하라        입 모양은 함부로 놀리지 말고 굳게 다물어야 한다."
    ,
        "index": "256",
        "chapter": "sec10"
    },
    {
        "section": "7-2. 수신편: 구용과 구사 (품격 있는 몸가짐과 지혜로운 생각)",
        "hanja": "聲容必靜",
        "reading": "성용필정",
        "suffix": "하고",
        "translation": "목소리는 소란스럽지 않고 고요하고 맑아야 하며,",
        "original_line": "聲容必靜(성용필정)하고        목소리는 소란스럽지 않고 고요하고 맑아야 하며,"
    ,
        "index": "257",
        "chapter": "sec10"
    },
    {
        "section": "7-2. 수신편: 구용과 구사 (품격 있는 몸가짐과 지혜로운 생각)",
        "hanja": "頭容必直",
        "reading": "두용필직",
        "suffix": "하라",
        "translation": "머리 모양은 비뚤어지지 않게 바로 세워야 한다.",
        "original_line": "頭容必直(두용필직)하라        머리 모양은 비뚤어지지 않게 바로 세워야 한다."
    ,
        "index": "258",
        "chapter": "sec10"
    },
    {
        "section": "7-2. 수신편: 구용과 구사 (품격 있는 몸가짐과 지혜로운 생각)",
        "hanja": "氣容必肅",
        "reading": "기용필숙",
        "suffix": "하고",
        "translation": "숨쉬기와 기운은 엄숙하고 고르게 다스리며,",
        "original_line": "氣容必肅(기용필숙)하고        숨쉬기와 기운은 엄숙하고 고르게 다스리며,"
    ,
        "index": "259",
        "chapter": "sec10"
    },
    {
        "section": "7-2. 수신편: 구용과 구사 (품격 있는 몸가짐과 지혜로운 생각)",
        "hanja": "立容必德",
        "reading": "입용필덕",
        "suffix": "하라",
        "translation": "서 있는 모습은 덕망이 느껴지도록 당당해야 한다.",
        "original_line": "立容必德(입용필덕)하라        서 있는 모습은 덕망이 느껴지도록 당당해야 한다."
    ,
        "index": "260",
        "chapter": "sec10"
    },
    {
        "section": "7-2. 수신편: 구용과 구사 (품격 있는 몸가짐과 지혜로운 생각)",
        "hanja": "色容必莊",
        "reading": "색용필장",
        "suffix": "하니",
        "translation": "안색은 늘 씩씩하고 장중하게 가꾸어야 하니,",
        "original_line": "色容必莊(색용필장)하니        안색은 늘 씩씩하고 장중하게 가꾸어야 하니,"
    ,
        "index": "261",
        "chapter": "sec10"
    },
    {
        "section": "7-2. 수신편: 구용과 구사 (품격 있는 몸가짐과 지혜로운 생각)",
        "hanja": "是曰九容",
        "reading": "시왈구용",
        "suffix": "이니라",
        "translation": "이것이 바로 몸을 다스리는 아홉 가지 모습이다.",
        "original_line": "是曰九容(시왈구용)이니라        이것이 바로 몸을 다스리는 아홉 가지 모습이다."
    ,
        "index": "262",
        "chapter": "sec10"
    },
    {
        "section": "7-2. 수신편: 구용과 구사 (품격 있는 몸가짐과 지혜로운 생각)",
        "hanja": "視必思明",
        "reading": "시필사명",
        "suffix": "하고",
        "translation": "무언가를 볼 때는 편견 없이 밝게 보려 노력하고,",
        "original_line": "視必思明(시필사명)하고        무언가를 볼 때는 편견 없이 밝게 보려 노력하고,"
    ,
        "index": "263",
        "chapter": "sec10"
    },
    {
        "section": "7-2. 수신편: 구용과 구사 (품격 있는 몸가짐과 지혜로운 생각)",
        "hanja": "聽必思聰",
        "reading": "청필사총",
        "suffix": "하라",
        "translation": "남의 말을 들을 때는 그 본뜻을 막힘없이 귀담아듣라.",
        "original_line": "聽必思聰(청필사총)하라        남의 말을 들을 때는 그 본뜻을 막힘없이 귀담아듣라."
    ,
        "index": "264",
        "chapter": "sec10"
    },
    {
        "section": "7-2. 수신편: 구용과 구사 (품격 있는 몸가짐과 지혜로운 생각)",
        "hanja": "色必思溫",
        "reading": "색필사온",
        "suffix": "하고",
        "translation": "표정을 지을 때는 부드럽고 따뜻한 기운을 생각하며,",
        "original_line": "色必思溫(색필사온)하고        표정을 지을 때는 부드럽고 따뜻한 기운을 생각하며,"
    ,
        "index": "265",
        "chapter": "sec10"
    },
    {
        "section": "7-2. 수신편: 구용과 구사 (품격 있는 몸가짐과 지혜로운 생각)",
        "hanja": "貌必思恭",
        "reading": "모필사공",
        "suffix": "하라",
        "translation": "용모와 태도는 항상 상대에 대한 예의를 먼저 생각하라.",
        "original_line": "貌必思恭(모필사공)하라        용모와 태도는 항상 상대에 대한 예의를 먼저 생각하라."
    ,
        "index": "266",
        "chapter": "sec10"
    },
    {
        "section": "7-2. 수신편: 구용과 구사 (품격 있는 몸가짐과 지혜로운 생각)",
        "hanja": "言必思忠",
        "reading": "언필사충",
        "suffix": "하고",
        "translation": "말을 뱉을 때는 진심과 정성이 담겼는지 생각하고,",
        "original_line": "言必思忠(언필사충)하고        말을 뱉을 때는 진심과 정성이 담겼는지 생각하고,"
    ,
        "index": "267",
        "chapter": "sec10"
    },
    {
        "section": "7-2. 수신편: 구용과 구사 (품격 있는 몸가짐과 지혜로운 생각)",
        "hanja": "事必思敬",
        "reading": "사필사경",
        "suffix": "하라",
        "translation": "일을 처리할 때는 공경하고 조심스러운 태도를 유지하라.",
        "original_line": "事必思敬(사필사경)하라        일을 처리할 때는 공경하고 조심스러운 태도를 유지하라."
    ,
        "index": "268",
        "chapter": "sec10"
    },
    {
        "section": "7-2. 수신편: 구용과 구사 (품격 있는 몸가짐과 지혜로운 생각)",
        "hanja": "疑必思問",
        "reading": "의필사문",
        "suffix": "하고",
        "translation": "의문이 생기면 겸손하게 묻고 배우는 것을 생각하며,",
        "original_line": "疑必思問(의필사문)하고        의문이 생기면 겸손하게 묻고 배우는 것을 생각하며,"
    ,
        "index": "269",
        "chapter": "sec10"
    },
    {
        "section": "7-2. 수신편: 구용과 구사 (품격 있는 몸가짐과 지혜로운 생각)",
        "hanja": "忿必思難",
        "reading": "분필사난",
        "suffix": "하라",
        "translation": "화가 치밀 때는 이로 인해 닥칠 어려움을 미리 생각하라.",
        "original_line": "忿必思難(분필사난)하라        화가 치밀 때는 이로 인해 닥칠 어려움을 미리 생각하라."
    ,
        "index": "270",
        "chapter": "sec10"
    },
    {
        "section": "7-2. 수신편: 구용과 구사 (품격 있는 몸가짐과 지혜로운 생각)",
        "hanja": "見得思義",
        "reading": "견득사의",
        "suffix": "하니",
        "translation": "이득을 보게 되면 그것이 정의에 맞는지 생각해야 하니,",
        "original_line": "見得思義(견득사의)하니        이득을 보게 되면 그것이 정의에 맞는지 생각해야 하니,"
    ,
        "index": "271",
        "chapter": "sec10"
    },
    {
        "section": "7-2. 수신편: 구용과 구사 (품격 있는 몸가짐과 지혜로운 생각)",
        "hanja": "提曰九思",
        "reading": "제왈구사",
        "suffix": "니라",
        "translation": "이것이 바로 마음을 다스리는 아홉 가지 생각이다.",
        "original_line": "提曰九思(제왈구사)니라        이것이 바로 마음을 다스리는 아홉 가지 생각이다."
    ,
        "index": "272",
        "chapter": "sec10"
    },
    {
        "section": "7-3. 수신편: 처세와 인과 (지혜로운 삶과 배움의 마무리)",
        "hanja": "非禮勿視",
        "reading": "비례물시",
        "suffix": "하고",
        "translation": "예의에 어긋나는 것이라면 아예 보지를 말고",
        "original_line": "非禮勿視(비례물시)하고        예의에 어긋나는 것이라면 아예 보지를 말고"
    ,
        "index": "273",
        "chapter": "sec11"
    },
    {
        "section": "7-3. 수신편: 처세와 인과 (지혜로운 삶과 배움의 마무리)",
        "hanja": "非禮勿聽",
        "reading": "비례물청",
        "suffix": "하라",
        "translation": "도리에 어긋나는 소문이라면 아예 듣지를 말라.",
        "original_line": "非禮勿聽(비례물청)하라        도리에 어긋나는 소문이라면 아예 듣지를 말라."
    ,
        "index": "274",
        "chapter": "sec11"
    },
    {
        "section": "7-3. 수신편: 처세와 인과 (지혜로운 삶과 배움의 마무리)",
        "hanja": "非禮勿言",
        "reading": "비례물언",
        "suffix": "하고",
        "translation": "예의가 아닌 말이라면 입 밖으로 꺼내지 말고",
        "original_line": "非禮勿言(비례물언)하고        예의가 아닌 말이라면 입 밖으로 꺼내지 말고"
    ,
        "index": "275",
        "chapter": "sec11"
    },
    {
        "section": "7-3. 수신편: 처세와 인과 (지혜로운 삶과 배움의 마무리)",
        "hanja": "非禮勿動",
        "reading": "비례물동",
        "suffix": "하라",
        "translation": "도리가 아닌 일이라면 결코 움직이지 말아야 한다.",
        "original_line": "非禮勿動(비례물동)하라        도리가 아닌 일이라면 결코 움직이지 말아야 한다."
    ,
        "index": "276",
        "chapter": "sec11"
    },
    {
        "section": "7-3. 수신편: 처세와 인과 (지혜로운 삶과 배움의 마무리)",
        "hanja": "行必正直",
        "reading": "행필정직",
        "suffix": "하고",
        "translation": "행동은 반드시 바르고 곧게 해야 하며",
        "original_line": "行必正直(행필정직)하고        행동은 반드시 바르고 곧게 해야 하며"
    ,
        "index": "277",
        "chapter": "sec11"
    },
    {
        "section": "7-3. 수신편: 처세와 인과 (지혜로운 삶과 배움의 마무리)",
        "hanja": "言則信實",
        "reading": "언즉신실",
        "suffix": "하라",
        "translation": "말은 언제나 믿음직하고 진실해야 한다.",
        "original_line": "言則信實(언즉신실)하라        말은 언제나 믿음직하고 진실해야 한다."
    ,
        "index": "278",
        "chapter": "sec11"
    },
    {
        "section": "7-3. 수신편: 처세와 인과 (지혜로운 삶과 배움의 마무리)",
        "hanja": "容貌端正",
        "reading": "용모단정",
        "suffix": "하고",
        "translation": "겉모습은 항상 단정하고 깨끗하게 가꾸며",
        "original_line": "容貌端正(용모단정)하고        겉모습은 항상 단정하고 깨끗하게 가꾸며"
    ,
        "index": "279",
        "chapter": "sec11"
    },
    {
        "section": "7-3. 수신편: 처세와 인과 (지혜로운 삶과 배움의 마무리)",
        "hanja": "衣冠整齊",
        "reading": "의관정제",
        "suffix": "하라",
        "translation": "옷차림은 흐트러짐 없이 가지런히 하라.",
        "original_line": "衣冠整齊(의관정제)하라        옷차림은 흐트러짐 없이 가지런히 하라."
    ,
        "index": "280",
        "chapter": "sec11"
    },
    {
        "section": "7-3. 수신편: 처세와 인과 (지혜로운 삶과 배움의 마무리)",
        "hanja": "居處必恭",
        "reading": "거처필공",
        "suffix": "하고",
        "translation": "머무는 곳에서는 항상 공손한 자세를 유지하고",
        "original_line": "居處必恭(거처필공)하고        머무는 곳에서는 항상 공손한 자세를 유지하고"
    ,
        "index": "281",
        "chapter": "sec11"
    },
    {
        "section": "7-3. 수신편: 처세와 인과 (지혜로운 삶과 배움의 마무리)",
        "hanja": "步履安詳",
        "reading": "보리안상",
        "suffix": "하라",
        "translation": "걸음걸이는 서두르지 말고 천천히 여유 있게 하라.",
        "original_line": "步履安詳(보리안상)하라        걸음걸이는 서두르지 말고 천천히 여유 있게 하라."
    ,
        "index": "282",
        "chapter": "sec11"
    },
    {
        "section": "7-3. 수신편: 처세와 인과 (지혜로운 삶과 배움의 마무리)",
        "hanja": "作事謀始",
        "reading": "작사모시",
        "suffix": "하고",
        "translation": "일을 할 때는 처음 시작부터 치밀하게 계획하고",
        "original_line": "作事謀始(작사모시)하고        일을 할 때는 처음 시작부터 치밀하게 계획하고"
    ,
        "index": "283",
        "chapter": "sec11"
    },
    {
        "section": "7-3. 수신편: 처세와 인과 (지혜로운 삶과 배움의 마무리)",
        "hanja": "出言顧行",
        "reading": "출언고행",
        "suffix": "하라",
        "translation": "말을 내뱉을 때는 내 행동이 따를 수 있는지 돌아보라.",
        "original_line": "出言顧行(출언고행)하라        말을 내뱉을 때는 내 행동이 따를 수 있는지 돌아보라."
    ,
        "index": "284",
        "chapter": "sec11"
    },
    {
        "section": "7-3. 수신편: 처세와 인과 (지혜로운 삶과 배움의 마무리)",
        "hanja": "常德固持",
        "reading": "상덕고지",
        "suffix": "하고",
        "translation": "변치 않는 덕성을 굳게 지켜 나가며",
        "original_line": "常德固持(상덕고지)하고        변치 않는 덕성을 굳게 지켜 나가며"
    ,
        "index": "285",
        "chapter": "sec11"
    },
    {
        "section": "7-3. 수신편: 처세와 인과 (지혜로운 삶과 배움의 마무리)",
        "hanja": "然諾重應",
        "reading": "연낙중응",
        "suffix": "하라",
        "translation": "한번 승낙한 약속은 천금같이 무겁게 지켜라.",
        "original_line": "然諾重應(연낙중응)하라        한번 승낙한 약속은 천금같이 무겁게 지켜라."
    ,
        "index": "286",
        "chapter": "sec11"
    },
    {
        "section": "7-3. 수신편: 처세와 인과 (지혜로운 삶과 배움의 마무리)",
        "hanja": "飮食愼節",
        "reading": "음식신절",
        "suffix": "하고",
        "translation": "먹고 마시는 것은 절제하여 조심하고",
        "original_line": "飮食愼節(음식신절)하고        먹고 마시는 것은 절제하여 조심하고"
    ,
        "index": "287",
        "chapter": "sec11"
    },
    {
        "section": "7-3. 수신편: 처세와 인과 (지혜로운 삶과 배움의 마무리)",
        "hanja": "言語恭遜",
        "reading": "언어공손",
        "suffix": "하라",
        "translation": "주고받는 말씨는 언제나 겸손하고 부드럽게 하라.",
        "original_line": "言語恭遜(언어공손)하라        주고받는 말씨는 언제나 겸손하고 부드럽게 하라."
    ,
        "index": "288",
        "chapter": "sec11"
    },
    {
        "section": "7-3. 수신편: 처세와 인과 (지혜로운 삶과 배움의 마무리)",
        "hanja": "德業相勸",
        "reading": "덕업상권",
        "suffix": "하고",
        "translation": "좋은 일과 덕스러운 업은 서로 권장하며",
        "original_line": "德業相勸(덕업상권)하고        좋은 일과 덕스러운 업은 서로 권장하며"
    ,
        "index": "289",
        "chapter": "sec11"
    },
    {
        "section": "7-3. 수신편: 처세와 인과 (지혜로운 삶과 배움의 마무리)",
        "hanja": "過失相規",
        "reading": "과실상규",
        "suffix": "하라",
        "translation": "잘못과 실수는 서로 바로잡아 주며 깨우쳐 주라.",
        "original_line": "過失相規(과실상규)하라        잘못과 실수는 서로 바로잡아 주며 깨우쳐 주라."
    ,
        "index": "290",
        "chapter": "sec11"
    },
    {
        "section": "7-3. 수신편: 처세와 인과 (지혜로운 삶과 배움의 마무리)",
        "hanja": "禮俗相交",
        "reading": "예속상교",
        "suffix": "하고",
        "translation": "예의 바른 풍속으로 서로 교류하며 지내고",
        "original_line": "禮俗相交(예속상교)하고        예의 바른 풍속으로 서로 교류하며 지내고"
    ,
        "index": "291",
        "chapter": "sec11"
    },
    {
        "section": "7-3. 수신편: 처세와 인과 (지혜로운 삶과 배움의 마무리)",
        "hanja": "患難相恤",
        "reading": "환난상휼",
        "suffix": "하라",
        "translation": "어렵고 힘든 일은 서로 가여워하며 도와주라.",
        "original_line": "患難相恤(환난상휼)하라        어렵고 힘든 일은 서로 가여워하며 도와주라."
    ,
        "index": "292",
        "chapter": "sec11"
    },
    {
        "section": "7-3. 수신편: 처세와 인과 (지혜로운 삶과 배움의 마무리)",
        "hanja": "貧窮困厄",
        "reading": "빈궁곤액",
        "suffix": "엔",
        "translation": "가난하고 곤궁하여 처지가 딱할 때에는",
        "original_line": "貧窮困厄(빈궁곤액)엔        가난하고 곤궁하여 처지가 딱할 때에는"
    ,
        "index": "293",
        "chapter": "sec11"
    },
    {
        "section": "7-3. 수신편: 처세와 인과 (지혜로운 삶과 배움의 마무리)",
        "hanja": "親戚相救",
        "reading": "친척상구",
        "suffix": "하며",
        "translation": "친척들이 앞장서서 서로를 구제해 주어야 하며,",
        "original_line": "親戚相救(친척상구)하며        친척들이 앞장서서 서로를 구제해 주어야 하며,"
    ,
        "index": "294",
        "chapter": "sec11"
    },
    {
        "section": "7-3. 수신편: 처세와 인과 (지혜로운 삶과 배움의 마무리)",
        "hanja": "婚姻死喪",
        "reading": "혼인사상",
        "suffix": "엔",
        "translation": "결혼이나 장례 같은 집안의 큰일에는",
        "original_line": "婚姻死喪(혼인사상)엔        결혼이나 장례 같은 집안의 큰일에는"
    ,
        "index": "295",
        "chapter": "sec11"
    },
    {
        "section": "7-3. 수신편: 처세와 인과 (지혜로운 삶과 배움의 마무리)",
        "hanja": "相扶相助",
        "reading": "상부상조",
        "suffix": "하라",
        "translation": "이웃끼리 서로 힘을 보태고 도와야 한다.",
        "original_line": "相扶相助(상부상조)하라        이웃끼리 서로 힘을 보태고 도와야 한다."
    ,
        "index": "296",
        "chapter": "sec11"
    },
    {
        "section": "7-3. 수신편: 처세와 인과 (지혜로운 삶과 배움의 마무리)",
        "hanja": "修身齊家",
        "reading": "수신제가",
        "suffix": "는",
        "translation": "자신을 닦고 가정을 화목하게 가꾸는 것은",
        "original_line": "修身齊家(수신제가)는        자신을 닦고 가정을 화목하게 가꾸는 것은"
    ,
        "index": "297",
        "chapter": "sec11"
    },
    {
        "section": "7-3. 수신편: 처세와 인과 (지혜로운 삶과 배움의 마무리)",
        "hanja": "治國之本",
        "reading": "치국지본",
        "suffix": "이요",
        "translation": "나라를 평화롭게 다스리는 근본이 되는 것이며,",
        "original_line": "治國之本(치국지본)이요        나라를 평화롭게 다스리는 근본이 되는 것이며,"
    ,
        "index": "298",
        "chapter": "sec11"
    },
    {
        "section": "7-3. 수신편: 처세와 인과 (지혜로운 삶과 배움의 마무리)",
        "hanja": "讀書勤儉",
        "reading": "독서근검",
        "suffix": "은",
        "translation": "끊임없이 책을 읽고 부지런히 아끼는 것은",
        "original_line": "讀書勤儉(독서근검)은        끊임없이 책을 읽고 부지런히 아끼는 것은"
    ,
        "index": "299",
        "chapter": "sec11"
    },
    {
        "section": "7-3. 수신편: 처세와 인과 (지혜로운 삶과 배움의 마무리)",
        "hanja": "起家之本",
        "reading": "기가지본",
        "suffix": "이니라",
        "translation": "집안을 일으켜 세우는 든든한 뿌리가 되느니라.",
        "original_line": "起家之本(기가지본)이니라        집안을 일으켜 세우는 든든한 뿌리가 되느니라."
    ,
        "index": "300",
        "chapter": "sec11"
    },
    {
        "section": "7-3. 수신편: 처세와 인과 (지혜로운 삶과 배움의 마무리)",
        "hanja": "忠信慈祥",
        "reading": "충신자상",
        "suffix": "하고",
        "translation": "충실하고 신의가 있으며 따뜻하고 자상하며",
        "original_line": "忠信慈祥(충신자상)하고        충실하고 신의가 있으며 따뜻하고 자상하며"
    ,
        "index": "301",
        "chapter": "sec11"
    },
    {
        "section": "7-3. 수신편: 처세와 인과 (지혜로운 삶과 배움의 마무리)",
        "hanja": "溫良恭儉",
        "reading": "온량공검",
        "suffix": "은",
        "translation": "온유하고 어질며 공손하고 검소한 태도는",
        "original_line": "溫良恭儉(온량공검)은        온유하고 어질며 공손하고 검소한 태도는"
    ,
        "index": "302",
        "chapter": "sec11"
    },
    {
        "section": "7-3. 수신편: 처세와 인과 (지혜로운 삶과 배움의 마무리)",
        "hanja": "人之德行",
        "reading": "인지덕행",
        "suffix": "에",
        "translation": "사람이 갖추어야 할 훌륭한 덕목 중에서도",
        "original_line": "人之德行(인지덕행)에        사람이 갖추어야 할 훌륭한 덕목 중에서도"
    ,
        "index": "303",
        "chapter": "sec11"
    },
    {
        "section": "7-3. 수신편: 처세와 인과 (지혜로운 삶과 배움의 마무리)",
        "hanja": "謙讓爲上",
        "reading": "겸양위상",
        "suffix": "이니라",
        "translation": "자신을 낮추고 양보하는 '겸양'이 으뜸이니라.",
        "original_line": "謙讓爲上(겸양위상)이니라        자신을 낮추고 양보하는 '겸양'이 으뜸이니라."
    ,
        "index": "304",
        "chapter": "sec11"
    },
    {
        "section": "7-3. 수신편: 처세와 인과 (지혜로운 삶과 배움의 마무리)",
        "hanja": "莫談他短",
        "reading": "막담타단",
        "suffix": "하고",
        "translation": "남의 단점을 함부로 들추어 말하지 말고",
        "original_line": "莫談他短(막담타단)하고        남의 단점을 함부로 들추어 말하지 말고"
    ,
        "index": "305",
        "chapter": "sec11"
    },
    {
        "section": "7-3. 수신편: 처세와 인과 (지혜로운 삶과 배움의 마무리)",
        "hanja": "靡恃己長",
        "reading": "미시기장",
        "suffix": "하라",
        "translation": "나의 장점을 믿고 뽐내며 잘난 척하지 말라.",
        "original_line": "靡恃己長(미시기장)하라        나의 장점을 믿고 뽐내며 잘난 척하지 말라."
    ,
        "index": "306",
        "chapter": "sec11"
    },
    {
        "section": "7-3. 수신편: 처세와 인과 (지혜로운 삶과 배움의 마무리)",
        "hanja": "己所不欲",
        "reading": "기소불욕",
        "suffix": "을",
        "translation": "내가 하기 싫고 원하지 않는 일을",
        "original_line": "己所不欲(기소불욕)을        내가 하기 싫고 원하지 않는 일을"
    ,
        "index": "307",
        "chapter": "sec11"
    },
    {
        "section": "7-3. 수신편: 처세와 인과 (지혜로운 삶과 배움의 마무리)",
        "hanja": "勿施於人",
        "reading": "물시어인",
        "suffix": "하라",
        "translation": "다른 사람에게도 억지로 시키지 말라.",
        "original_line": "勿施於人(물시어인)하라        다른 사람에게도 억지로 시키지 말라."
    ,
        "index": "308",
        "chapter": "sec11"
    },
    {
        "section": "7-3. 수신편: 처세와 인과 (지혜로운 삶과 배움의 마무리)",
        "hanja": "積善之家",
        "reading": "적선지가",
        "suffix": "는",
        "translation": "선한 일을 꾸준히 쌓아가는 집안에는",
        "original_line": "積善之家(적선지가)는        선한 일을 꾸준히 쌓아가는 집안에는"
    ,
        "index": "309",
        "chapter": "sec11"
    },
    {
        "section": "7-3. 수신편: 처세와 인과 (지혜로운 삶과 배움의 마무리)",
        "hanja": "必有餘慶",
        "reading": "필유여경",
        "suffix": "이요",
        "translation": "반드시 대대로 넘치는 경사가 따를 것이나,",
        "original_line": "必有餘慶(필유여경)이요        반드시 대대로 넘치는 경사가 따를 것이나,"
    ,
        "index": "310",
        "chapter": "sec11"
    },
    {
        "section": "7-3. 수신편: 처세와 인과 (지혜로운 삶과 배움의 마무리)",
        "hanja": "不善之家",
        "reading": "불선지가",
        "suffix": "는",
        "translation": "선하지 못한 일을 일삼는 집안에는",
        "original_line": "不善之家(불선지가)는        선하지 못한 일을 일삼는 집안에는"
    ,
        "index": "311",
        "chapter": "sec11"
    },
    {
        "section": "7-3. 수신편: 처세와 인과 (지혜로운 삶과 배움의 마무리)",
        "hanja": "必有餘殃",
        "reading": "필유여앙",
        "suffix": "이니라",
        "translation": "반드시 뒤에까지 미치는 재앙이 따르느니라.",
        "original_line": "必有餘殃(필유여앙)이니라        반드시 뒤에까지 미치는 재앙이 따르느니라."
    ,
        "index": "312",
        "chapter": "sec11"
    },
    {
        "section": "7-3. 수신편: 처세와 인과 (지혜로운 삶과 배움의 마무리)",
        "hanja": "損人利己",
        "reading": "손인이기",
        "suffix": "면",
        "translation": "남에게 손해를 끼쳐 나만 이롭게 하려 한다면",
        "original_line": "損人利己(손인이기)면        남에게 손해를 끼쳐 나만 이롭게 하려 한다면"
    ,
        "index": "313",
        "chapter": "sec11"
    },
    {
        "section": "7-3. 수신편: 처세와 인과 (지혜로운 삶과 배움의 마무리)",
        "hanja": "終是自害",
        "reading": "종시자해",
        "suffix": "요",
        "translation": "그것은 결국 끝내 자신을 해치는 길이 될 것이요,",
        "original_line": "終是自害(종시자해)요        그것은 결국 끝내 자신을 해치는 길이 될 것이요,"
    ,
        "index": "314",
        "chapter": "sec11"
    },
    {
        "section": "7-3. 수신편: 처세와 인과 (지혜로운 삶과 배움의 마무리)",
        "hanja": "禍福無門",
        "reading": "화복무문",
        "suffix": "이라",
        "translation": "재앙과 복은 들어오는 문이 따로 정해져 있지 않고",
        "original_line": "禍福無門(화복무문)이라        재앙과 복은 들어오는 문이 따로 정해져 있지 않고"
    ,
        "index": "315",
        "chapter": "sec11"
    },
    {
        "section": "7-3. 수신편: 처세와 인과 (지혜로운 삶과 배움의 마무리)",
        "hanja": "惟人所召",
        "reading": "유인소조",
        "suffix": "니라",
        "translation": "오직 사람이 스스로 불러들이는 것이니라.",
        "original_line": "惟人所召(유인소조)니라        오직 사람이 스스로 불러들이는 것이니라."
    ,
        "index": "316",
        "chapter": "sec11"
    },
    {
        "section": "7-3. 수신편: 처세와 인과 (지혜로운 삶과 배움의 마무리)",
        "hanja": "嗟嗟小子",
        "reading": "차차소자",
        "suffix": "들아",
        "translation": "아, 배움을 시작하는 어린 학생들이여!",
        "original_line": "嗟嗟小子(차차소자)들아        아, 배움을 시작하는 어린 학생들이여!"
    ,
        "index": "317",
        "chapter": "sec11"
    },
    {
        "section": "7-3. 수신편: 처세와 인과 (지혜로운 삶과 배움의 마무리)",
        "hanja": "敬受此書",
        "reading": "경수차서",
        "suffix": "하라",
        "translation": "공경하는 마음으로 이 책의 가르침을 받들라.",
        "original_line": "敬受此書(경수차서)하라        공경하는 마음으로 이 책의 가르침을 받들라."
    ,
        "index": "318",
        "chapter": "sec11"
    },
    {
        "section": "7-3. 수신편: 처세와 인과 (지혜로운 삶과 배움의 마무리)",
        "hanja": "非我言耄",
        "reading": "비아언모",
        "suffix": "라",
        "translation": "내가 늙어 망령되게 하는 말이 아니라",
        "original_line": "非我言耄(비아언모)라        내가 늙어 망령되게 하는 말이 아니라"
    ,
        "index": "319",
        "chapter": "sec11"
    },
    {
        "section": "7-3. 수신편: 처세와 인과 (지혜로운 삶과 배움의 마무리)",
        "hanja": "惟聖之謨",
        "reading": "유성지모",
        "suffix": "니라",
        "translation": "오직 옛 성현들께서 남기신 거룩한 가르침이니라.",
        "original_line": "惟聖之謨(유성지모)니라        오직 옛 성현들께서 남기신 거룩한 가르침이니라."
    ,
        "index": "320",
        "chapter": "sec11"
    }
];
