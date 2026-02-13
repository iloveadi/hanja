let learnedHanja = JSON.parse(localStorage.getItem('learnedHanja')) || [];
let currentWriter = null;
let currentHanja = null;
let showReadings = true;
let showSajaReadings = true;
let showDongmongReadings = true;
let showCheonjamunReadings = true;
let showChuguReadings = true;
let hideLearned = false;

document.addEventListener('DOMContentLoaded', () => {
    updateDashboard();
    setupEventListeners();
    initFirebase();

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
            if (state.chapterId) {
                const chapter = sajaSohakChapters.find(c => c.id === state.chapterId);
                if (chapter) showSajaSohakChapter(chapter, false);
            } else {
                showSajaSohak(false);
            }
            break;
        case 'dongmong-section':
            if (state.chapterId) {
                const chapter = dongmongChapters.find(c => c.id === state.chapterId);
                if (chapter) showDongmongChapter(chapter, false);
            } else {
                showDongmong(false);
            }
            break;
        case 'cheonjamun-section':
            if (state.chapterId) {
                const chapter = cheonjamunChapters.find(c => c.id === state.chapterId);
                if (chapter) showCheonjamunChapter(chapter, false);
            } else {
                showCheonjamun(false);
            }
            break;
        case 'chugu-section':
            if (state.chapterId) {
                const chapter = chuguChapters.find(c => c.id === state.chapterId);
                if (chapter) showChuguChapter(chapter, false);
            } else {
                showChugu(false);
            }
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

// --- Firebase Auth & Sync ---
let currentUser = null;
const SESSION_TIMEOUT_MS = 30 * 60 * 1000; // 30 minutes
let sessionCheckInterval = null;

function initFirebase() {
    if (typeof firebase === 'undefined' || !firebase.apps.length) return;

    firebase.auth().onAuthStateChanged(async (user) => {
        currentUser = user;
        updateAuthUI(user);
        if (user) {
            await syncUserData(user);
            startSessionMonitoring();
        } else {
            stopSessionMonitoring();
        }
    });
}

function updateAuthUI(user) {
    const loginBtn = document.getElementById('btn-login');
    const logoutBtn = document.getElementById('btn-logout');
    const userDisplay = document.getElementById('user-display');

    if (user) {
        if (loginBtn) loginBtn.style.display = 'none';
        if (logoutBtn) logoutBtn.style.display = 'inline-block';
        if (userDisplay) {
            userDisplay.style.display = 'inline-block';
            userDisplay.textContent = user.displayName || user.email.split('@')[0];
        }
    } else {
        if (loginBtn) loginBtn.style.display = 'inline-block';
        if (logoutBtn) logoutBtn.style.display = 'none';
        if (userDisplay) userDisplay.style.display = 'none';

        // Clear learning data on logout
        learnedHanja = [];
        localStorage.removeItem('learnedHanja');
        updateDashboard();
    }
}

async function login() {
    if (typeof firebase === 'undefined') {
        alert('Firebase 설정이 필요합니다.');
        return;
    }
    const provider = new firebase.auth.GoogleAuthProvider();
    try {
        await firebase.auth().signInWithPopup(provider);
    } catch (error) {
        console.error("Login failed", error);
        alert('로그인 실패: ' + error.message);
    }
}

async function logout() {
    if (typeof firebase === 'undefined') return;
    await firebase.auth().signOut();
    location.reload();
}

async function syncUserData(user) {
    const db = firebase.firestore();
    const docRef = db.collection('users').doc(user.uid);

    try {
        const doc = await docRef.get();
        if (doc.exists) {
            const remoteData = doc.data().learnedHanja || [];
            // Merge: Union of local and remote
            const merged = [...new Set([...learnedHanja, ...remoteData])];

            // If merged is different or remote is different, sync both ways
            if (merged.length !== learnedHanja.length || merged.length !== remoteData.length) {
                learnedHanja = merged;
                localStorage.setItem('learnedHanja', JSON.stringify(learnedHanja));

                await docRef.set({ learnedHanja: merged }, { merge: true });
                updateDashboard();
                console.log("Data synced and merged.");
            }
        } else {
            // First time: Upload local data
            await docRef.set({
                email: user.email,
                learnedHanja: learnedHanja,
                lastUpdated: firebase.firestore.FieldValue.serverTimestamp()
            });
            console.log("Initial data uploaded.");
        }
    } catch (error) {
        console.error("Sync error:", error);
    }
}


function startSessionMonitoring() {
    // Set initial activity if not present
    if (!localStorage.getItem('lastActivity')) {
        updateLastActivity();
    }

    // Setup event listeners for activity
    window.addEventListener('mousemove', updateLastActivity);
    window.addEventListener('keydown', updateLastActivity);
    window.addEventListener('click', updateLastActivity);
    window.addEventListener('touchstart', updateLastActivity);

    // Check timeout every 1 minute
    sessionCheckInterval = setInterval(checkSessionTimeout, 60 * 1000);
}

function stopSessionMonitoring() {
    window.removeEventListener('mousemove', updateLastActivity);
    window.removeEventListener('keydown', updateLastActivity);
    window.removeEventListener('click', updateLastActivity);
    window.removeEventListener('touchstart', updateLastActivity);

    if (sessionCheckInterval) {
        clearInterval(sessionCheckInterval);
        sessionCheckInterval = null;
    }
}

function updateLastActivity() {
    localStorage.setItem('lastActivity', Date.now().toString());
}

function checkSessionTimeout() {
    const lastActivity = localStorage.getItem('lastActivity');
    if (lastActivity) {
        const inactiveTime = Date.now() - parseInt(lastActivity, 10);
        if (inactiveTime > SESSION_TIMEOUT_MS) {
            console.log("Session timed out. Logging out...");
            alert("장시간 활동이 없어 로그아웃 되었습니다.");
            logout();
        }
    }
}

function setupEventListeners() {
    // Auth Buttons
    const loginBtn = document.getElementById('btn-login');
    if (loginBtn) loginBtn.addEventListener('click', login);

    const logoutBtn = document.getElementById('btn-logout');
    if (logoutBtn) logoutBtn.addEventListener('click', logout);

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
    document.getElementById('btn-chugu').addEventListener('click', () => {
        showChugu();
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

    // Toggle Hide Learned in Hanja List
    const toggleHideLearnedBtn = document.getElementById('toggle-hide-learned-btn');
    if (toggleHideLearnedBtn) {
        toggleHideLearnedBtn.addEventListener('click', () => {
            hideLearned = !hideLearned;
            const type = history.state.type || 'middle';
            showHanjaList(type, false);
            toggleHideLearnedBtn.textContent = hideLearned ? '전체 한자 보기' : '학습 완료 숨기기';
        });
    }

    // Toggle Reading in Chugu
    const toggleChuguBtn = document.getElementById('toggle-chugu-reading-btn');
    if (toggleChuguBtn) {
        toggleChuguBtn.addEventListener('click', () => {
            showChuguReadings = !showChuguReadings;
            const container = document.getElementById('chugu-container');
            if (showChuguReadings) {
                container.classList.remove('hide-reading');
                toggleChuguBtn.innerText = '독음 끄기';
            } else {
                container.classList.add('hide-reading');
                toggleChuguBtn.innerText = '독음 켜기';
            }
        });
    }

    // Toggle Reading in Dongmong
    const toggleDongmongBtn = document.getElementById('toggle-dongmong-reading-btn');
    if (toggleDongmongBtn) {
        toggleDongmongBtn.addEventListener('click', () => {
            showDongmongReadings = !showDongmongReadings;
            const container = document.getElementById('dongmong-container');
            if (showDongmongReadings) {
                container.classList.remove('hide-reading');
                toggleDongmongBtn.innerText = '독음 끄기';
            } else {
                container.classList.add('hide-reading');
                toggleDongmongBtn.innerText = '독음 켜기';
            }
        });
    }
}

// 한자 텍스트에서 한글 조사를 작고 흐리게 표시
function styleHanjaWithParticles(text) {
    // 한글 조사 패턴
    const particlePattern = /(는|이라|하고|하며|하나니|하여|하면|리오|이나|에|라|나|니라|로|로다|이로되|하사|이어늘|하시니|라하시니라)/g;
    return text.replace(particlePattern, '<span class="particle">$1</span>');
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
        const matchesLevel = type === 'middle' ? h.grade_level === 'middle' : h.grade_level === 'high';
        if (!matchesLevel) return false;
        if (hideLearned && learnedHanja.includes(h.kanji)) return false;
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

    // Insert Intro Text
    const introDiv = document.createElement('div');
    introDiv.className = 'intro-text';
    introDiv.style.gridColumn = '1 / -1'; // Span full width of the grid
    introDiv.style.marginBottom = '2rem';
    introDiv.innerHTML = `
        <p style="font-size: 1.1rem; color: var(--accent-color); margin-bottom: 0.5rem;">사람을 사랑하는 길부터 세상을 다스리는 법까지, 시대를 초월한 삶의 지침서</p>
        <p style="font-size: 0.9rem; opacity: 0.8;">본 해석은 특정 출판물의 저작권을 침해하지 않도록 표준 주해를 바탕으로 새롭게 작성되었습니다.</p>
    `;
    menu.appendChild(introDiv);

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
        // Insert Intro Text
        const introDiv = document.createElement('div');
        introDiv.className = 'intro-text';

        // Use custom description if available, otherwise fallback to default
        const displayIntro = chapter.description || "사람을 사랑하는 길부터 세상을 다스리는 법까지, 시대를 초월한 삶의 지침서";

        introDiv.innerHTML = `
            <p style="font-size: 1.1rem; color: var(--accent-color); margin-bottom: 0.5rem;">${displayIntro}</p>
            <p style="font-size: 0.9rem; opacity: 0.8;">본 해석은 특정 출판물의 저작권을 침해하지 않도록 표준 주해를 바탕으로 새롭게 작성되었습니다.</p>
        `;
        container.appendChild(introDiv);

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

// --- Chugu Section ---
function showChugu(pushState = true) {
    const menu = document.getElementById('chugu-menu');
    const content = document.getElementById('chugu-content');
    const toggleBtn = document.getElementById('toggle-chugu-reading-btn');
    const title = document.getElementById('chugu-section-title');

    menu.style.display = 'grid';
    content.style.display = 'none';
    toggleBtn.style.display = 'none';
    title.innerText = '推句 (추구) 목차';

    menu.innerHTML = '';

    // Insert Intro Text
    const introDiv = document.createElement('div');
    introDiv.className = 'intro-text';
    introDiv.style.gridColumn = '1 / -1';
    introDiv.style.marginBottom = '2rem';
    introDiv.innerHTML = `
        <p style="font-size: 1.1rem; color: var(--accent-color); margin-bottom: 0.5rem;">자연의 풍경과 인간의 도리를 노래하는 5언 절구의 정수</p>
        <p style="font-size: 0.9rem; opacity: 0.8;">본 해석은 특정 출판물의 저작권을 침해하지 않도록 표준 주해를 바탕으로 새롭게 작성되었습니다.</p>
    `;
    menu.appendChild(introDiv);

    chuguChapters.forEach(ch => {
        const hasData = chuguData.some(item => item.chapter.includes(ch.id));

        const btn = document.createElement('button');
        if (hasData) {
            btn.className = 'menu-btn';
            btn.innerHTML = `
                <span class="btn-title">${ch.title}</span>
                <span class="btn-desc">${ch.subtitle}</span>
            `;
            btn.onclick = () => showChuguChapter(ch);
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

    showView('chugu-section');
    if (pushState) history.pushState({ view: 'chugu-section' }, '', '');
}

function showChuguChapter(chapter, pushState = true) {
    const menu = document.getElementById('chugu-menu');
    const content = document.getElementById('chugu-content');
    const toggleBtn = document.getElementById('toggle-chugu-reading-btn');
    const title = document.getElementById('chugu-section-title');
    const container = document.getElementById('chugu-container');

    menu.style.display = 'none';
    content.style.display = 'block';
    toggleBtn.style.display = 'block';
    toggleBtn.textContent = showChuguReadings ? '독음 끄기' : '독음 켜기';
    title.innerText = chapter.title;

    container.innerHTML = '';
    if (!showChuguReadings) {
        container.classList.add('hide-reading');
    } else {
        container.classList.remove('hide-reading');
    }
    const filteredData = chuguData.filter(item => item.chapter.includes(chapter.id));

    if (filteredData.length === 0) {
        // Insert Intro Text even for empty state
        const introDiv = document.createElement('div');
        introDiv.className = 'intro-text';
        introDiv.innerHTML = `
            <p style="font-size: 1.1rem; color: var(--accent-color); margin-bottom: 0.5rem;">${chapter.description}</p>
            <p style="font-size: 0.9rem; opacity: 0.8;">본 해석은 특정 출판물의 저작권을 침해하지 않도록 표준 주해를 바탕으로 새롭게 작성되었습니다.</p>
        `;
        container.appendChild(introDiv);
        container.innerHTML += '<p style="text-align:center; padding: 3rem; color:var(--text-secondary);">데이터 준비 중입니다.</p>';
    } else {
        // Insert Intro Text
        const introDiv = document.createElement('div');
        introDiv.className = 'intro-text';
        introDiv.innerHTML = `
            <p style="font-size: 1.1rem; color: var(--accent-color); margin-bottom: 0.5rem;">${chapter.description}</p>
            <p style="font-size: 0.9rem; opacity: 0.8;">본 해석은 특정 출판물의 저작권을 침해하지 않도록 표준 주해를 바탕으로 새롭게 작성되었습니다.</p>
        `;
        container.appendChild(introDiv);

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

    showView('chugu-section');
    window.scrollTo(0, 0);

    if (pushState) history.pushState({ view: 'chugu-section', chapterId: chapter.id }, '', '');
}

function goBackFromChugu() {
    const menu = document.getElementById('chugu-menu');
    if (menu.style.display === 'none') {
        showChugu();
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

    // Disable button if not logged in
    if (!currentUser) {
        markBtn.disabled = true;
        markBtn.style.opacity = '0.5';
        markBtn.style.cursor = 'not-allowed';
        markBtn.title = '로그인이 필요합니다';
    } else {
        markBtn.disabled = false;
        markBtn.style.opacity = '1';
        markBtn.style.cursor = 'pointer';
        markBtn.title = '';
    }

    markBtn.onclick = () => toggleLearned(hanja, cardElement, markBtn);
}

function toggleLearned(hanja, cardElement, btn) {
    // Check if user is logged in
    if (!currentUser) {
        alert('학습 진행 상황을 저장하려면 로그인이 필요합니다.');
        return;
    }

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

    // If hideLearned is active, refresh the list to remove the card
    if (hideLearned) {
        const type = history.state.type || 'middle';
        showHanjaList(type, false);
    }

    // Sync to Firebase
    if (currentUser) {
        const db = firebase.firestore();
        db.collection('users').doc(currentUser.uid).set({
            learnedHanja: learnedHanja,
            lastUpdated: firebase.firestore.FieldValue.serverTimestamp()
        }, { merge: true });
    }

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
    const menu = document.getElementById('saja-sohak-menu');
    const content = document.getElementById('saja-sohak-content');
    const toggleBtn = document.getElementById('toggle-saja-reading-btn');
    const title = document.getElementById('saja-sohak-section-title');

    menu.style.display = 'grid';
    content.style.display = 'none';
    toggleBtn.style.display = 'none';
    title.innerText = '四字小學 (사자소학) 목차';

    menu.innerHTML = '';

    const introDiv = document.createElement('div');
    introDiv.className = 'intro-text';
    introDiv.style.gridColumn = '1 / -1';
    introDiv.style.marginBottom = '2rem';
    introDiv.innerHTML = `
        <p style="font-size: 1.1rem; color: var(--accent-color); margin-bottom: 0.5rem;">사람을 사랑하는 길부터 세상을 다스리는 법까지, 시대를 초월한 삶의 지침서</p>
        <p style="font-size: 0.9rem; opacity: 0.8;">본 해석은 특정 출판물의 저작권을 침해하지 않도록 표준 주해를 바탕으로 새롭게 작성되었습니다.</p>
    `;
    menu.appendChild(introDiv);

    sajaSohakChapters.forEach(ch => {
        const hasData = sajaSohakData.some(item => item.chapter === ch.id);
        const btn = document.createElement('button');
        if (hasData) {
            btn.className = 'menu-btn';
            btn.innerHTML = `
                <span class="btn-title">${ch.title}</span>
                <span class="btn-desc">${ch.subtitle}</span>
            `;
            btn.onclick = () => showSajaSohakChapter(ch);
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

    showView('saja-sohak-section');
    if (pushState) history.pushState({ view: 'saja-sohak-section' }, '', '');
}

function showSajaSohakChapter(chapter, pushState = true) {
    const menu = document.getElementById('saja-sohak-menu');
    const content = document.getElementById('saja-sohak-content');
    const toggleBtn = document.getElementById('toggle-saja-reading-btn');
    const title = document.getElementById('saja-sohak-section-title');
    const container = document.getElementById('saja-sohak-container');

    menu.style.display = 'none';
    content.style.display = 'block';
    toggleBtn.style.display = 'block';
    toggleBtn.textContent = showSajaReadings ? '독음 끄기' : '독음 켜기';
    title.innerText = chapter.title;

    container.innerHTML = '';
    if (!showSajaReadings) {
        container.classList.add('hide-reading');
    } else {
        container.classList.remove('hide-reading');
    }

    const filteredData = sajaSohakData.filter(item => item.chapter === chapter.id);

    if (filteredData.length === 0) {
        container.innerHTML = '<p style="text-align:center; padding: 3rem; color:var(--text-secondary);">데이터 준비 중입니다.</p>';
    } else {
        const introDiv = document.createElement('div');
        introDiv.className = 'intro-text';
        introDiv.innerHTML = `
            <p style="font-size: 1.1rem; color: var(--accent-color); margin-bottom: 0.5rem;">${chapter.description}</p>
            <p style="font-size: 0.9rem; opacity: 0.8;">본 해석은 특정 출판물의 저작권을 침해하지 않도록 표준 주해를 바탕으로 새롭게 작성되었습니다.</p>
        `;
        container.appendChild(introDiv);

        filteredData.forEach(item => {
            const card = document.createElement('div');
            card.className = 'analects-card';
            const rubyHtml = createDetailedRuby(item.hanja, item.reading);
            card.innerHTML = `
                <div class="analects-title">사자소학 ${item.index}</div>
                <div class="analects-content">${rubyHtml} <span class="saja-suffix" style="font-size: 1.2rem; color: var(--text-secondary); margin-left: 5px;">${item.suffix || ''}</span></div>
                <div class="analects-translation">${item.translation}</div>
            `;
            container.appendChild(card);
        });
    }

    showView('saja-sohak-section');
    window.scrollTo(0, 0);

    if (pushState) history.pushState({ view: 'saja-sohak-section', chapterId: chapter.id }, '', '');
}

function goBackFromSajaSohak() {
    const menu = document.getElementById('saja-sohak-menu');
    if (menu.style.display === 'none') {
        showSajaSohak();
    } else {
        goHome();
    }
}

function showDongmong(pushState = true) {
    const menu = document.getElementById('dongmong-menu');
    const content = document.getElementById('dongmong-content');
    const toggleBtn = document.getElementById('toggle-dongmong-reading-btn');
    const title = document.getElementById('dongmong-section-title');

    menu.style.display = 'grid';
    content.style.display = 'none';
    toggleBtn.style.display = 'none';
    title.innerText = '童蒙先習 (동몽선습) 목차';

    menu.innerHTML = '';

    const introDiv = document.createElement('div');
    introDiv.className = 'intro-text';
    introDiv.style.gridColumn = '1 / -1';
    introDiv.style.marginBottom = '2rem';
    introDiv.innerHTML = `
        <p style="font-size: 1.1rem; color: var(--accent-color); margin-bottom: 0.5rem;">어린이를 위한 유교 윤리 입문서</p>
        <p style="font-size: 0.9rem; opacity: 0.8;">본 해석은 특정 출판물의 저작권을 침해하지 않도록 표준 주해를 바탕으로 새롭게 작성되었습니다.</p>
    `;
    menu.appendChild(introDiv);

    dongmongChapters.forEach(ch => {
        const hasData = dongmongData.some(item => item.chapter === ch.id);
        const btn = document.createElement('button');
        if (hasData) {
            btn.className = 'menu-btn';
            btn.innerHTML = `
                <span class="btn-title">${ch.title}</span>
                <span class="btn-desc">${ch.subtitle}</span>
            `;
            btn.onclick = () => showDongmongChapter(ch);
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

    showView('dongmong-section');
    if (pushState) history.pushState({ view: 'dongmong-section' }, '', '');
}

function showDongmongChapter(chapter, pushState = true) {
    const menu = document.getElementById('dongmong-menu');
    const content = document.getElementById('dongmong-content');
    const toggleBtn = document.getElementById('toggle-dongmong-reading-btn');
    const title = document.getElementById('dongmong-section-title');
    const container = document.getElementById('dongmong-container');

    menu.style.display = 'none';
    content.style.display = 'block';
    toggleBtn.style.display = 'block';
    toggleBtn.textContent = showDongmongReadings ? '독음 끄기' : '독음 켜기';
    title.innerText = chapter.title;

    container.innerHTML = '';
    if (!showDongmongReadings) {
        container.classList.add('hide-reading');
    } else {
        container.classList.remove('hide-reading');
    }

    const filteredData = dongmongData.filter(item => item.chapter === chapter.id);

    if (filteredData.length === 0) {
        container.innerHTML = '<p style="text-align:center; padding: 3rem; color:var(--text-secondary);">데이터 준비 중입니다.</p>';
    } else {
        const introDiv = document.createElement('div');
        introDiv.className = 'intro-text';
        introDiv.innerHTML = `
            <p style="font-size: 1.1rem; color: var(--accent-color); margin-bottom: 0.5rem;">${chapter.description}</p>
            <p style="font-size: 0.9rem; opacity: 0.8;">본 해석은 특정 출판물의 저작권을 침해하지 않도록 표준 주해를 바탕으로 새롭게 작성되었습니다.</p>
        `;
        container.appendChild(introDiv);

        filteredData.forEach(item => {
            const card = document.createElement('div');
            card.className = 'analects-card';
            const rubyHtml = createDetailedRuby(item.hanja, item.reading);
            const styledHanja = styleHanjaWithParticles(rubyHtml);
            card.innerHTML = `
                <div class="analects-title">동몽선습 ${item.index}</div>
                <div class="analects-content">${styledHanja}</div>
                <div class="analects-translation">${item.translation}</div>
                ${item.description ? `<div style="font-size: 0.9rem; color: var(--text-secondary); margin-top: 0.5rem; font-style: italic;">${item.description}</div>` : ''}
            `;
            container.appendChild(card);
        });
    }

    showView('dongmong-section');
    window.scrollTo(0, 0);

    if (pushState) history.pushState({ view: 'dongmong-section', chapterId: chapter.id }, '', '');
}

function goBackFromDongmong() {
    const menu = document.getElementById('dongmong-menu');
    if (menu.style.display === 'none') {
        showDongmong();
    } else {
        goHome();
    }
}

function showCheonjamun(pushState = true) {
    const menu = document.getElementById('cheonjamun-menu');
    const content = document.getElementById('cheonjamun-content');
    const toggleBtn = document.getElementById('toggle-cheonjamun-reading-btn');
    const title = document.getElementById('cheonjamun-section-title');

    menu.style.display = 'grid';
    content.style.display = 'none';
    toggleBtn.style.display = 'none';
    title.innerText = '千字文 (천자문) 목차';

    menu.innerHTML = '';

    // Insert Intro Text
    const introDiv = document.createElement('div');
    introDiv.className = 'intro-text';
    introDiv.style.gridColumn = '1 / -1';
    introDiv.style.marginBottom = '2rem';
    introDiv.innerHTML = `
        <p style="font-size: 1.1rem; color: var(--accent-color); margin-bottom: 0.5rem;">사람을 사랑하는 길부터 세상을 다스리는 법까지, 시대를 초월한 삶의 지침서</p>
        <p style="font-size: 0.9rem; opacity: 0.8;">본 해석은 특정 출판물의 저작권을 침해하지 않도록 표준 주해를 바탕으로 새롭게 작성되었습니다.</p>
    `;
    menu.appendChild(introDiv);

    cheonjamunChapters.forEach(ch => {
        const hasData = cheonjamunData.some(item => item.chapter === ch.id);

        const btn = document.createElement('button');
        if (hasData) {
            btn.className = 'menu-btn';
            btn.innerHTML = `
                <span class="btn-title">${ch.title}</span>
                <span class="btn-desc">${ch.subtitle}</span>
            `;
            btn.onclick = () => showCheonjamunChapter(ch);
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

    showView('cheonjamun-section');
    if (pushState) history.pushState({ view: 'cheonjamun-section' }, '', '');
}

function showCheonjamunChapter(chapter, pushState = true) {
    const menu = document.getElementById('cheonjamun-menu');
    const content = document.getElementById('cheonjamun-content');
    const toggleBtn = document.getElementById('toggle-cheonjamun-reading-btn');
    const title = document.getElementById('cheonjamun-section-title');
    const container = document.getElementById('cheonjamun-container');

    menu.style.display = 'none';
    content.style.display = 'block';
    toggleBtn.style.display = 'block';
    toggleBtn.textContent = showCheonjamunReadings ? '독음 끄기' : '독음 켜기';
    title.innerText = chapter.title;

    container.innerHTML = '';
    if (!showCheonjamunReadings) {
        container.classList.add('hide-reading');
    } else {
        container.classList.remove('hide-reading');
    }

    const filteredData = cheonjamunData.filter(item => item.chapter === chapter.id);

    if (filteredData.length === 0) {
        const introDiv = document.createElement('div');
        introDiv.className = 'intro-text';
        introDiv.innerHTML = `
            <p style="font-size: 1.1rem; color: var(--accent-color); margin-bottom: 0.5rem;">${chapter.description}</p>
            <p style="font-size: 0.9rem; opacity: 0.8;">본 해석은 특정 출판물의 저작권을 침해하지 않도록 표준 주해를 바탕으로 새롭게 작성되었습니다.</p>
        `;
        container.appendChild(introDiv);
        container.innerHTML += '<p style="text-align:center; padding: 3rem; color:var(--text-secondary);">데이터 준비 중입니다.</p>';
    } else {
        // Insert Intro Text
        const introDiv = document.createElement('div');
        introDiv.className = 'intro-text';
        introDiv.innerHTML = `
            <p style="font-size: 1.1rem; color: var(--accent-color); margin-bottom: 0.5rem;">${chapter.description}</p>
            <p style="font-size: 0.9rem; opacity: 0.8;">본 해석은 특정 출판물의 저작권을 침해하지 않도록 표준 주해를 바탕으로 새롭게 작성되었습니다.</p>
        `;
        container.appendChild(introDiv);

        filteredData.forEach(item => {
            const card = document.createElement('div');
            card.className = 'analects-card';

            const rubyContent = createDetailedRuby(item.hanja, item.reading);

            card.innerHTML = `
                <div class="analects-title">千字文 ${item.index}</div>
                <div class="analects-content">${rubyContent}</div>
                <div class="analects-translation">${item.translation}</div>
            `;
            container.appendChild(card);
        });
    }

    showView('cheonjamun-section');
    window.scrollTo(0, 0);

    if (pushState) history.pushState({ view: 'cheonjamun-section', chapterId: chapter.id }, '', '');
}

function goBackFromCheonjamun() {
    const menu = document.getElementById('cheonjamun-menu');
    if (menu.style.display === 'none') {
        showCheonjamun();
    } else {
        goHome();
    }
}
