let learnedHanja = JSON.parse(localStorage.getItem('learnedHanja')) || [];
let currentWriter = null;
let currentHanja = null;
let showReadings = true;
let showSajaReadings = true;
let showCheonjamunReadings = true;

document.addEventListener('DOMContentLoaded', () => {
    updateDashboard();
    setupEventListeners();

    // Initial History State
    if (!history.state) {
        history.replaceState({ view: 'landing-page' }, '', '');
    }
});

// History API Support
window.addEventListener('popstate', (event) => {
    if (event.state) {
        handleState(event.state);
    } else {
        showView('landing-page');
    }
});

function handleState(state) {
    if (!state) return;
    switch (state.view) {
        case 'hanja-section':
            showHanjaList(state.type, false);
            break;
        case 'analects-section':
            if (state.chapterId) {
                const chapter = analectsChapters.find(c => c.id === state.chapterId);
                if (chapter) showAnalectsChapter(chapter, false);
            } else {
                showAnalects(false);
            }
            break;
        case 'saja-sohak-section':
            showSajaSohak(false);
            break;
        case 'cheonjamun-section':
            showCheonjamun(false);
            break;
        case 'landing-page':
        default:
            showView('landing-page');
            break;
    }
}

function goHome() {
    showView('landing-page');
    history.pushState({ view: 'landing-page' }, '', '');
}

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

    // Saja Sohaka Button
    const sajaBtn = document.getElementById('btn-saja-sohak');
    if (sajaBtn) {
        sajaBtn.addEventListener('click', () => {
            if (typeof sajaSohakData === 'undefined') {
                alert('데이터를 불러오지 못했습니다.');
                return;
            }
            showSajaSohak();
        });
    }

    // Placeholders for other books - Disabled in CSS now
    // ['btn-daxue', 'btn-mencius', 'btn-zhongyong', 'btn-shijing', 'btn-shujing', 'btn-yijing'].forEach(id => {
    //     const btn = document.getElementById(id);
    //     if(btn) {
    //          // No listener needed as pointer-events: none in CSS handles it
    //     }
    // });

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

    // Toggle Reading in Saja Sohak
    const toggleSajaBtn = document.getElementById('toggle-saja-reading-btn');
    if (toggleSajaBtn) {
        toggleSajaBtn.addEventListener('click', () => {
            showSajaReadings = !showSajaReadings;
            const container = document.getElementById('saja-sohak-container');
            if (showSajaReadings) {
                container.classList.remove('hide-reading');
                toggleSajaBtn.textContent = '독음 끄기';
            } else {
                container.classList.add('hide-reading');
                toggleSajaBtn.textContent = '독음 켜기';
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

    // Cheonjamun Button
    const cheonjamunBtn = document.getElementById('btn-cheonjamun');
    if (cheonjamunBtn) {
        cheonjamunBtn.addEventListener('click', () => {
            if (typeof cheonjamunData === 'undefined') {
                alert('데이터를 불러오지 못했습니다.');
                return;
            }
            showCheonjamun();
        });
    }

    // Toggle Reading in Cheonjamun
    const toggleCheonjamunBtn = document.getElementById('toggle-cheonjamun-reading-btn');
    if (toggleCheonjamunBtn) {
        toggleCheonjamunBtn.addEventListener('click', () => {
            showCheonjamunReadings = !showCheonjamunReadings;
            const container = document.getElementById('cheonjamun-container');
            if (showCheonjamunReadings) {
                container.classList.remove('hide-reading');
                toggleCheonjamunBtn.textContent = '독음 끄기';
            } else {
                container.classList.add('hide-reading');
                toggleCheonjamunBtn.textContent = '독음 켜기';
            }
        });
    }
}

function showView(viewId) {
    const sections = document.querySelectorAll('.view-section');
    sections.forEach(s => s.style.display = 'none');
    document.getElementById(viewId).style.display = 'block';
    window.scrollTo(0, 0);
}

function showHanjaList(type, pushState = true) {
    const container = document.getElementById('hanja-container');
    const navContainer = document.getElementById('hanja-index-nav'); // New container
    const titleElem = document.getElementById('hanja-section-title');

    container.innerHTML = '';
    navContainer.innerHTML = ''; // Clear previous nav

    const filteredData = hanjaData.filter(h => {
        if (type === 'middle') return h.grade_level === 'middle';
        if (type === 'high') return h.grade_level === 'high';
        return true;
    });

    // 1. Sort by Reading (Ga-Na-Da order)
    filteredData.sort((a, b) => a.reading.localeCompare(b.reading));

    titleElem.innerText = type === 'middle' ? '중학교 기초 한자' : '고등학교 기초 한자';

    // 2. Generate Nav & Render Cards
    const initials = ['가', '나', '다', '라', '마', '바', '사', '아', '자', '차', '카', '타', '파', '하'];
    const activeInitials = new Set();

    // We need to group them or just check the first char of reading.
    // Let's create a map or just iterate.

    let currentInitialIndex = -1;

    filteredData.forEach((hanja, index) => {
        const reading = hanja.reading;
        // Determine which initial this belongs to. 
        // Simple optimization: Just check if it matches the "next" initial or current.
        // Actually, "Ga" covers everything starting with G/K sound range? 
        // No, user wants "Ga, Na, Da". 
        // Let's check the first char's Hangul compatibility Jamo or just range.

        // Simpler approach: Detect change in the first Hangul syllable's initial sound?
        // Or just map specific start characters.
        // Let's rely on standard Korean ordering.
        // We will stick headers for '가', '나', '다'... when we encounter the first char that starts with that sound.

        // Helper to get initial sound (Chosung)
        const chosung = getChosung(reading.charAt(0));

        // Create Nav Link if new
        if (!activeInitials.has(chosung)) {
            activeInitials.add(chosung);
            const btn = document.createElement('button');
            btn.className = 'nav-char-btn';
            btn.textContent = chosung;
            btn.onclick = () => {
                const target = document.getElementById(`anchor-${chosung}`);
                if (target) {
                    // Adjust for sticky header offset if needed
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            };
            navContainer.appendChild(btn);

            // Add Section Anchor in the grid? 
            // Better: Add a full-width header or invisible anchor.
            // Since it's a grid, a full width element might break layout unless we use col-span.
            // Or just put ID on the first card.
            // Let's put ID on the card, but maybe also visual separator?
            // "Displaying 'Ga' section" might be nice.
            // Let's just put ID on the card for now to keep grid simple.
        }

        const card = document.createElement('div');
        // If this is the first card of this Chosung, add ID
        if (activeInitials.has(chosung) && !document.getElementById(`anchor-${chosung}`)) {
            card.id = `anchor-${chosung}`;
        }

        card.className = `hanja-card ${learnedHanja.includes(hanja.kanji) ? 'learned-card' : ''}`;
        card.innerHTML = `
            <span class="badge">Lv.${hanja.level}</span>
            <span class="hanja-radical">${hanja.radical || ''}</span>
            <span class="hanja-char">${hanja.kanji}</span>
            <div class="hanja-reading">${hanja.reading}</div>
            <div class="hanja-meaning">${hanja.meaning}</div>
        `;
        card.addEventListener('click', () => openModal(hanja, card));
        container.appendChild(card);
    });

    showView('hanja-section');
    if (pushState) history.pushState({ view: 'hanja-section', type: type }, '', '');
}

// Helper for Hangul Chosung
function getChosung(char) {
    const code = char.charCodeAt(0) - 44032;
    if (code < 0 || code > 11171) return char; // Not Hangul
    const chosungIndex = Math.floor(code / 588);
    const chosungs = ['가', '나', '다', '라', '마', '바', '사', '아', '자', '차', '카', '타', '파', '하'];
    // The standard chosung list is ㄱ, ㄲ, ㄴ, ㄷ, ㄸ...
    // But user asked for "Ga, Na, Da...". 
    // Let's map chosung index to representative syllable.
    const realChosungs = ['ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];

    // Map 'ㄱ' -> '가', 'ㄴ' -> '나' ...
    // 'ㄲ' usually grouped with 'ㄱ' or separate? Usually dictionary has '까'.
    // Let's return the representative hangul 'Ga', 'Na' etc.
    // Simple Mapping:
    const map = {
        'ㄱ': '가', 'ㄲ': '가',
        'ㄴ': '나',
        'ㄷ': '다', 'ㄸ': '다',
        'ㄹ': '라',
        'ㅁ': '마',
        'ㅂ': '바', 'ㅃ': '바',
        'ㅅ': '사', 'ㅆ': '사',
        'ㅇ': '아',
        'ㅈ': '자', 'ㅉ': '자',
        'ㅊ': '차',
        'ㅋ': '카',
        'ㅌ': '타',
        'ㅍ': '파',
        'ㅎ': '하'
    };
    return map[realChosungs[chosungIndex]] || char;
}

function showAnalects(pushState = true) {
    const menu = document.getElementById('analects-menu');
    const content = document.getElementById('analects-content');
    const toggleBtn = document.getElementById('toggle-reading-btn');
    const title = document.getElementById('analects-section-title');

    menu.style.display = 'grid';
    content.style.display = 'none';
    toggleBtn.style.display = 'none';
    title.innerText = '論語 (논어) 목차';

    menu.innerHTML = '';
    analectsChapters.forEach(ch => {
        const hasData = analectsData.some(item => item.chapter.includes(ch.id));

        const btn = document.createElement('button');
        if (hasData) {
            btn.className = 'menu-btn';
            btn.innerHTML = `
                <span class="btn-title">${ch.title}</span>
                <span class="btn-desc">${ch.subtitle}</span>
            `;
            btn.onclick = () => showAnalectsChapter(ch);
        } else {
            btn.className = 'menu-btn disabled';
            btn.innerHTML = `
                <span class="coming-soon-badge">준비 중</span>
                <span class="btn-title">${ch.title}</span>
                <span class="btn-desc">${ch.subtitle}</span>
            `;
        }
        menu.appendChild(btn);
    });

    showView('analects-section');
    if (pushState) history.pushState({ view: 'analects-section' }, '', '');
}

function showAnalectsChapter(chapter, pushState = true) {
    const menu = document.getElementById('analects-menu');
    const content = document.getElementById('analects-content');
    const toggleBtn = document.getElementById('toggle-reading-btn');
    const title = document.getElementById('analects-section-title');
    const container = document.getElementById('analects-container');

    menu.style.display = 'none';
    content.style.display = 'block';
    toggleBtn.style.display = 'block';
    title.innerText = chapter.title;

    container.innerHTML = '';
    const filteredData = analectsData.filter(item => item.chapter.includes(chapter.id));

    if (filteredData.length === 0) {
        container.innerHTML = '<p style="text-align:center; padding: 3rem; color:var(--text-secondary);">데이터 준비 중입니다.</p>';
    } else {
        filteredData.forEach(item => {
            const card = document.createElement('div');
            card.className = 'analects-card';

            const rubyContent = item.content.replace(/([^()\s,.;:“”"?!/])\(([^)]+)\)/g, '<ruby>$1<rt>$2</rt></ruby>');

            card.innerHTML = `
                <div class="analects-title">${item.chapter} ${item.index}</div>
                <div class="analects-content">${rubyContent}</div>
                <div class="analects-translation">${item.translation}</div>
            `;
            container.appendChild(card);
        });
    }

    if (!showReadings) container.classList.add('hide-reading');

    // Ensure section is visible (needed if navigating via history)
    showView('analects-section');
    window.scrollTo(0, 0);

    if (pushState) history.pushState({ view: 'analects-section', chapterId: chapter.id }, '', '');
}

function goBackFromAnalects() {
    const menu = document.getElementById('analects-menu');
    if (menu.style.display === 'none') {
        showAnalects();
    } else {
        goHome();
    }
}

function openModal(hanja, cardElement) {
    currentHanja = hanja;
    const modal = document.getElementById('hanja-modal');
    const container = document.getElementById('writer-container');

    document.getElementById('modal-reading').textContent = hanja.reading;
    document.getElementById('modal-meaning').textContent = hanja.meaning;
    document.getElementById('modal-info').innerHTML = `급수: ${hanja.level}급 | 획수: ${hanja.strokeCount}획 ${hanja.radical ? ` | 부수: ${hanja.radical}` : ''}`;

    container.innerHTML = '';
    modal.style.display = 'block';

    // Adding a small delay to ensure modal is rendered for size calculation
    setTimeout(() => {
        if (typeof HanziWriter === 'undefined') {
            container.innerHTML = '<p style="color:red;">HanziWriter 라이브러리를 로드하지 못했습니다.</p>';
            return;
        }

        currentWriter = HanziWriter.create('writer-container', hanja.kanji, {
            width: 250,
            height: 250,
            padding: 5,
            showOutline: true,
            strokeColor: '#D4AF37',
            outlineColor: '#333',
            drawingColor: '#D4AF37',
            showHintAfterMisses: 1,
            strokeAnimationSpeed: 1, // 1x normal speed
            delayBetweenStrokes: 200, // standard delay
            delayBeforeAnimations: 500 // standard delay
        });

        // Trigger animation automatically
        currentWriter.animateCharacter();
    }, 50);

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
    closeModal();
}

function closeModal() {
    document.getElementById('hanja-modal').style.display = 'none';
}

function updateDashboard() {
    let middleLearned = 0;
    let highLearned = 0;
    const middleTotal = 900;
    const highTotal = 900;

    learnedHanja.forEach(char => {
        const entry = hanjaData.find(h => h.kanji === char);
        if (entry) {
            if (entry.grade_level === 'middle') middleLearned++;
            else if (entry.grade_level === 'high') highLearned++;
        }
    });

    const updateChart = (prefix, learned, total) => {
        const percent = Math.round((learned / total) * 100);
        const deg = percent * 3.6;

        const chart = document.getElementById(`${prefix}-chart`);
        const percentText = document.getElementById(`${prefix}-percent`);
        const statsText = document.getElementById(`${prefix}-stats`);

        if (chart) {
            chart.style.background = `conic-gradient(var(--accent-color) ${deg}deg, rgba(255, 255, 255, 0.05) 0deg)`;
            percentText.innerText = `${percent}%`;
            statsText.innerText = `${learned} / ${total}`;
        }
    };

    updateChart('middle', middleLearned, middleTotal);
    updateChart('high', highLearned, highTotal);
}

// Helper to create detailed ruby (char by char)
function createDetailedRuby(hanja, reading) {
    if (hanja.length === reading.length) {
        let html = '';
        for (let i = 0; i < hanja.length; i++) {
            html += `<ruby>${hanja[i]}<rt>${reading[i]}</rt></ruby>`;
        }
        return html;
    }
    return `<ruby>${hanja}<rt>${reading}</rt></ruby>`;
}

function showSajaSohak(pushState = true) {
    const container = document.getElementById('saja-sohak-container');
    container.innerHTML = '';

    // Reset toggle state
    showSajaReadings = true;
    const toggleBtn = document.getElementById('toggle-saja-reading-btn');
    if (toggleBtn) toggleBtn.innerText = '독음 끄기';
    container.classList.remove('hide-reading');

    if (!sajaSohakData || sajaSohakData.length === 0) {
        container.innerHTML = '<p style="text-align:center; padding: 3rem;">데이터가 없습니다.</p>';
        showView('saja-sohak-section');
        return;
    }

    let currentSection = '';
    sajaSohakData.forEach(item => {
        if (item.section !== currentSection) {
            // Skip "Introduction" header
            if (item.section !== 'Introduction') {
                const sectionHeader = document.createElement('h3');
                sectionHeader.className = 'saja-section-header';
                sectionHeader.innerText = item.section;
                sectionHeader.style.marginTop = '3rem';
                sectionHeader.style.marginBottom = '1.5rem';
                sectionHeader.style.color = 'var(--accent-color)';
                sectionHeader.style.borderBottom = '1px solid var(--border-color)';
                sectionHeader.style.paddingBottom = '0.5rem';
                sectionHeader.style.fontSize = '1.4rem';
                container.appendChild(sectionHeader);
            }
            currentSection = item.section;
        }

        const card = document.createElement('div');
        card.className = 'analects-card';

        // Ruby format: detailed char by char
        const rubyHtml = createDetailedRuby(item.hanja, item.reading);

        card.innerHTML = `
            <div class="analects-content" style="font-size: 1.6rem; margin-bottom: 0.8rem; line-height: 2.2;">
                ${rubyHtml} <span class="saja-suffix" style="font-size: 1.2rem; color: var(--text-secondary); margin-left: 5px;">${item.suffix}</span>
            </div>
            <div class="analects-translation" style="font-size: 1.1rem; color: #ddd;">${item.translation}</div>
        `;
        container.appendChild(card);
    });

    showView('saja-sohak-section');
    if (pushState) history.pushState({ view: 'saja-sohak-section' }, '', '');
}

function showCheonjamun(pushState = true) {
    const container = document.getElementById('cheonjamun-container');
    container.innerHTML = '';

    // Reset toggle state
    showCheonjamunReadings = true;
    const toggleBtn = document.getElementById('toggle-cheonjamun-reading-btn');
    if (toggleBtn) toggleBtn.innerText = '독음 끄기';
    container.classList.remove('hide-reading');

    if (!cheonjamunData || cheonjamunData.length === 0) {
        container.innerHTML = '<p style="text-align:center; padding: 3rem;">데이터가 없습니다.</p>';
        showView('cheonjamun-section');
        return;
    }

    cheonjamunData.forEach(item => {
        const card = document.createElement('div');
        card.className = 'analects-card';

        const rubyHtml = createDetailedRuby(item.hanja, item.reading);

        let contentStyle = "font-size: 1.6rem; margin-bottom: 0.8rem; line-height: 2.2;";
        if (item.hanja.length > 4) {
            // 8 char couplet
            // Increase width or adjust style? Standard style should wrap or fit.
        }

        card.innerHTML = `
            <div class="analects-content" style="${contentStyle}">
                ${rubyHtml}
            </div>
            <div class="analects-translation" style="font-size: 1.1rem; color: #ddd;">${item.translation}</div>
        `;
        container.appendChild(card);
    });

    showView('cheonjamun-section');
    if (pushState) history.pushState({ view: 'cheonjamun-section' }, '', '');
}
