// hanjaData is expected to be loaded via a script tag in index.html

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('hanja-container');
    const totalLearnedEl = document.getElementById('total-learned');
    const masteryRateEl = document.getElementById('mastery-rate');

    // Modal elements
    const modal = document.getElementById('hanja-modal');
    const closeBtn = document.querySelector('.close-btn');
    const writerContainer = document.getElementById('writer-container');
    const modalReading = document.getElementById('modal-reading');
    const modalMeaning = document.getElementById('modal-meaning');
    const animateBtn = document.getElementById('animate-btn');
    const quizBtn = document.getElementById('quiz-btn');
    const completeBtn = document.getElementById('complete-btn');

    let learnedCount = 0;
    let currentWriter = null;
    let currentHanja = null;
    let currentCard = null;

    function updateDashboard() {
        totalLearnedEl.textContent = learnedCount;
        const total = (typeof hanjaData !== 'undefined') ? hanjaData.length : 1;
        const rate = (learnedCount / total) * 100;
        masteryRateEl.textContent = `${Math.round(rate)}%`;
    }

    function openModal(hanja, card) {
        currentHanja = hanja;
        currentCard = card;
        modal.style.display = 'block';
        modalReading.textContent = hanja.reading;
        modalMeaning.textContent = hanja.meaning;

        // Clear previous writer
        writerContainer.innerHTML = '';

        currentWriter = HanziWriter.create('writer-container', hanja.kanji, {
            width: 250,
            height: 250,
            padding: 5,
            strokeAnimationSpeed: 1,
            delayBetweenStrokes: 200,
            strokeColor: '#d4af37', // Gold
            outlineColor: '#333',
            drawingColor: '#f0f0f0',
            showOutline: true
        });

        currentWriter.animateCharacter();

        // Update complete button text
        if (card.classList.contains('learned-card')) {
            completeBtn.textContent = '학습 취소';
            completeBtn.classList.remove('primary');
        } else {
            completeBtn.textContent = '학습 완료';
            completeBtn.classList.add('primary');
        }
    }

    function closeModal() {
        modal.style.display = 'none';
        currentWriter = null;
    }

    function toggleLearned(hanja, card) {
        if (!card.classList.contains('learned-card')) {
            card.classList.add('learned-card');
            learnedCount++;
        } else {
            card.classList.remove('learned-card');
            learnedCount--;
        }
        updateDashboard();
        closeModal();
    }

    // Event Listeners
    closeBtn.addEventListener('click', closeModal);
    window.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    animateBtn.addEventListener('click', () => {
        if (currentWriter) currentWriter.animateCharacter();
    });

    quizBtn.addEventListener('click', () => {
        if (currentWriter) {
            currentWriter.quiz();
        }
    });

    completeBtn.addEventListener('click', () => {
        if (currentHanja && currentCard) {
            toggleLearned(currentHanja, currentCard);
        }
    });

    function renderHanja() {
        if (typeof hanjaData === 'undefined') {
            container.innerHTML = '<p>데이터를 불러올 수 없습니다.</p>';
            return;
        }

        container.innerHTML = '';
        hanjaData.forEach((hanja, index) => {
            const card = document.createElement('div');
            card.className = 'hanja-card';
            card.innerHTML = `
                <span class="badge">Lv.${hanja.level}</span>
                <span class="hanja-char">${hanja.kanji}</span>
                <div class="hanja-reading">${hanja.reading}</div>
                <div class="hanja-meaning">${hanja.meaning}</div>
            `;

            card.addEventListener('click', () => {
                openModal(hanja, card);
            });

            container.appendChild(card);
        });
    }

    renderHanja();
    updateDashboard();
});
