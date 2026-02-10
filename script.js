let learnedHanja = JSON.parse(localStorage.getItem('learnedHanja')) || [];
let currentWriter = null;
let currentHanja = null;
let showReadings = true;

document.addEventListener('DOMContentLoaded', () => {
    updateDashboard();
    setupEventListeners();
});

function setupEventListeners() {
    // Menu Buttons
    document.getElementById('btn-middle').addEventListener('click', () => {
        showHanjaList('middle');
    });
    document.getElementById('btn-high').addEventListener('click', () => {
        showHanjaList('high');
    });
    document.getElementById('btn-analects').addEventListener('click', () => {
        showAnalects();
    });

    // Toggle Reading in Analects
    const toggleBtn = document.getElementById('toggle-reading-btn');
    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            showReadings = !showReadings;
            const container = document.getElementById('analects-container');
            if (showReadings) {
                container.classList.remove('hide-reading');
                toggleBtn.textContent = '독음 끄기';
            } else {
                container.classList.add('hide-reading');
                toggleBtn.textContent = '독음 켜기';
            }
        });
    }

    // Modal Close
    document.querySelector('.close-btn').addEventListener('click', closeModal);
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) closeModal();
    });

    // Animation & Quiz Controls
    document.getElementById('animate-btn').addEventListener('click', () => {
        if (currentWriter) currentWriter.animateCharacter();
    });

    document.getElementById('quiz-btn').addEventListener('click', () => {
        if (currentWriter) {
            currentWriter.quiz();
        }
    });
}

function showView(viewId) {
    const sections = document.querySelectorAll('.view-section');
    sections.forEach(s => s.style.display = 'none');
    document.getElementById(viewId).style.display = 'block';
    window.scrollTo(0, 0);
}

function showHanjaList(type) {
    const container = document.getElementById('hanja-container');
    const titleElem = document.getElementById('hanja-section-title');
    container.innerHTML = '';

    // Filter logic: middle (level 8,7), high (level 6)
    // Note: User said "currently rest is high school", so we split.
    // Middle school is 900, but we have 1119. Let's just group by level for now.
    const filteredData = hanjaData.filter(h => {
        if (type === 'middle') return h.level >= 7;
        if (type === 'high') return h.level <= 6;
        return true;
    });

    titleElem.innerText = type === 'middle' ? '중학교 기초 한자' : '고등학교 기초 한자';

    filteredData.forEach((hanja, index) => {
        const card = document.createElement('div');
        card.className = `hanja-card ${learnedHanja.includes(hanja.kanji) ? 'learned-card' : ''}`;
        card.innerHTML = `
            <span class="badge">Lv.${hanja.level}</span>
            <span class="hanja-char">${hanja.kanji}</span>
            <div class="hanja-reading">${hanja.reading}</div>
            <div class="hanja-meaning">${hanja.meaning}</div>
        `;
        card.addEventListener('click', () => openModal(hanja, card));
        container.appendChild(card);
    });

    showView('hanja-section');
}

function showAnalects() {
    const container = document.getElementById('analects-container');
    container.innerHTML = '';

    analectsData.forEach(item => {
        const card = document.createElement('div');
        card.className = 'analects-card';

        // Convert "X(reading)" pattern to <ruby> tags
        // This is now more robust by matching any character before the opening parenthesis
        const rubyContent = item.content.replace(/([^()\s,.;:“”"?!/])\(([^)]+)\)/g, '<ruby>$1<rt>$2</rt></ruby>');

        card.innerHTML = `
            <div class="analects-title">${item.chapter} ${item.index}</div>
            <div class="analects-content">${rubyContent}</div>
            <div class="analects-translation">${item.translation}</div>
        `;
        container.appendChild(card);
    });

    if (!showReadings) container.classList.add('hide-reading');
    showView('analects-section');
}

function openModal(hanja, cardElement) {
    currentHanja = hanja;
    const modal = document.getElementById('hanja-modal');
    const container = document.getElementById('writer-container');

    document.getElementById('modal-reading').textContent = hanja.reading;
    document.getElementById('modal-meaning').textContent = hanja.meaning;
    document.getElementById('modal-info').textContent = `급수: ${hanja.level}급 | 획수: ${hanja.strokeCount}획`;

    container.innerHTML = '';
    modal.style.display = 'block';

    currentWriter = HanziWriter.create('writer-container', hanja.kanji, {
        width: 250,
        height: 250,
        padding: 5,
        showOutline: true,
        strokeColor: '#D4AF37',
        outlineColor: '#333',
        drawingColor: '#D4AF37',
        showHintAfterMisses: 1
    });

    const markBtn = document.getElementById('mark-learned-btn');
    const isLearned = learnedHanja.includes(hanja.kanji);
    markBtn.textContent = isLearned ? '학습 취소' : '학습 완료';
    markBtn.onclick = () => toggleLearned(hanja, cardElement, markBtn);
}

function toggleLearned(hanja, cardElement, btn) {
    const index = learnedHanja.indexOf(hanja.kanji);
    if (index > -1) {
        learnedHanja.splice(index, 1);
        cardElement.classList.remove('learned-card');
        btn.textContent = '학습 완료';
    } else {
        learnedHanja.push(hanja.kanji);
        cardElement.classList.add('learned-card');
        btn.textContent = '학습 취소';
    }
    localStorage.setItem('learnedHanja', JSON.stringify(learnedHanja));
    updateDashboard();
}

function closeModal() {
    document.getElementById('hanja-modal').style.display = 'none';
}

function updateDashboard() {
    const total = hanjaData.length;
    const learned = learnedHanja.length;
    const percent = total > 0 ? Math.round((learned / total) * 100) : 0;

    document.getElementById('learned-count').textContent = learned;
    document.getElementById('total-count').textContent = total;
    document.getElementById('progress-percent').textContent = `${percent}%`;
}
