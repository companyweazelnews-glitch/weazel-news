// Articles management with publication dates and tags
let articlesData = [];

document.addEventListener('DOMContentLoaded', async () => {
    await loadArticles();
    
    const urlParams = new URLSearchParams(window.location.search);
    const articleId = urlParams.get('article');
    const tag = urlParams.get('tag');
    
    if (articleId) {
        showArticle(articleId);
    } else if (tag) {
        showArchiveByTag(tag);
    } else {
        showHomepage();
    }
    
    initializeMobileMenu();
    initializeTouchInteractions();
});

async function loadArticles() {
    try {
        const response = await fetch('articles.json');
        articlesData = await response.json();
        articlesData.sort((a, b) => new Date(b.publishedDate) - new Date(a.publishedDate));
    } catch (error) {
        console.error('Errore:', error);
    }
}

function showHomepage() {
    updateDate();
    updateNavigation();
    updateBreakingNews();
    updateMainContent();
}

function updateDate() {
    const el = document.getElementById('current-date');
    el.textContent = new Date().toLocaleDateString('it-IT', {weekday:'long', year:'numeric', month:'long', day:'numeric'});
}

function updateNavigation() {
    const nav = document.querySelector('.main-nav');
    const tags = new Set();
    articlesData.forEach(a => { if(a.tags) a.tags.forEach(t => tags.add(t)); });
    
    nav.innerHTML = '<a href="/">Tutti</a>' + Array.from(tags).map(t => 
        `<a href="?tag=${t}">${capitalizeTag(t)}</a>`
    ).join('');
}

function capitalizeTag(tag) {
    return tag.split('-').map(w => w[0].toUpperCase() + w.slice(1)).join(' ');
}

function showArchiveByTag(tag) {
    const filtered = articlesData.filter(a => a.tags && a.tags.includes(tag));
    
    document.querySelector('.main-content').innerHTML = `
        <div class="archive-page">
            <a href="/" class="back-link">← Homepage</a>
            <h1 class="archive-title">Archivio: ${capitalizeTag(tag)}</h1>
            <p class="archive-count">${filtered.length} articol${filtered.length!==1?'i':'o'}</p>
            <div class="archive-grid">
                ${filtered.map(a => `
                    <article class="archive-article" onclick="location.href='?article=${a.id}'">
                        ${a.image ? `<img src="${a.image}" alt="${a.title}">` : ''}
                        <div class="archive-content">
                            <span class="archive-date">${formatDate(a.publishedDate)}</span>
                            <h2>${a.title}</h2>
                            <p>${a.summary}</p>
                        </div>
                    </article>
                `).join('')}
            </div>
        </div>
    `;
}

function updateBreakingNews() {
    const el = document.getElementById('breaking-news');
    const recent = articlesData.filter(a => !a.archived).slice(0,2);
    el.innerHTML = recent.map(a => `
        <a href="?article=${a.id}" class="breaking-item">
            <strong>${a.title}</strong>
            <span class="breaking-time">${getTimeAgo(a.publishedDate)}</span>
        </a>
    `).join('');
}

function updateMainContent() {
    const active = articlesData.filter(a => !a.archived);
    if(!active.length) return;
    
    // Ordina per priority (priorità più bassa = più importante)
    const sorted = active.sort((a, b) => (a.priority || 999) - (b.priority || 999));
    
    // Trova articoli per posizione specifica o usa i primi disponibili
    const main = sorted.find(a => a.position === 'main') || sorted[0];
    const media = sorted.find(a => a.position === 'media') || sorted[1];
    const side = sorted.find(a => a.position === 'side') || sorted[2];
    
    // Filtra gli articoli già usati e prendi il resto per bottom
    const usedIds = [main?.id, media?.id, side?.id];
    const bottom = sorted.filter(a => !usedIds.includes(a.id)).slice(0, 4);
    
    if(main) updateMainStory(main);
    if(media) updateFeaturedMedia(media);
    if(side) updateSideFeature(side);
    updateBottomStories(bottom);
}

function updateMainStory(a) {
    const c = document.getElementById('main-story');
    if(!c) return;
    const t = c.querySelector('.article-title');
    t.textContent = a.title;
    t.onclick = () => location.href = '?article=' + a.id;
    c.querySelector('.article-summary').textContent = a.summary;
}

function updateFeaturedMedia(a) {
    const c = document.getElementById('featured-media');
    if(!c) return;
    const img = c.querySelector('img');
    img.src = a.image || 'https://via.placeholder.com/800x600/333/fff?text=News';
    img.onclick = () => location.href = '?article=' + a.id;
    img.style.cursor = 'pointer';
    const cap = c.querySelector('.media-caption');
    cap.innerHTML = `<strong>${a.title}</strong><br>${a.summary}`;
    cap.onclick = () => location.href = '?article=' + a.id;
    cap.style.cursor = 'pointer';
}

function updateSideFeature(a) {
    const c = document.getElementById('side-feature');
    if(!c) return;
    c.querySelector('img').src = a.image || 'https://via.placeholder.com/400x300/333/fff?text=News';
    const t = c.querySelector('.feature-title');
    t.textContent = a.title;
    t.onclick = () => location.href = '?article=' + a.id;
    c.querySelector('.feature-summary').textContent = a.summary;
}

function updateBottomStories(articles) {
    const c = document.getElementById('bottom-stories');
    if(!c) return;
    c.innerHTML = articles.slice(0,2).map(a => `
        <article class="bottom-story" onclick="location.href='?article=${a.id}'">
            ${a.image ? `<img src="${a.image}" alt="${a.title}">` : ''}
            <h3>${a.title}</h3>
        </article>
    `).join('');
}

function formatDate(d) {
    return new Date(d).toLocaleDateString('it-IT', {day:'numeric', month:'long', year:'numeric'});
}

function getTimeAgo(d) {
    const ms = Date.now() - new Date(d);
    const m = Math.floor(ms/60000);
    const h = Math.floor(ms/3600000);
    const days = Math.floor(ms/86400000);
    if(m<60) return m+'min fa';
    if(h<24) return h+'h fa';
    return days===1 ? 'Ieri' : days+' giorni fa';
}

function showArticle(id) {
    const a = articlesData.find(x => x.id === id);
    if(!a) { showHomepage(); return; }
    
    document.querySelector('.main-content').innerHTML = `
        <div class="article-page">
            <a href="/" class="back-link">← Homepage</a>
            <article class="article-header">
                <div class="article-category">${a.category||'NOTIZIE'}</div>
                <h1>${a.title}</h1>
                <div class="article-meta">
                    <span>Di ${a.author||'Redazione'}</span>
                    <span>•</span>
                    <span>${formatDate(a.publishedDate)}</span>
                    <span>•</span>
                    <span>${a.readTime||'5 MIN'}</span>
                </div>
                ${a.tags ? `<div class="article-tags">${a.tags.map(t => 
                    `<a href="?tag=${t}" class="article-tag">#${t}</a>`
                ).join(' ')}</div>` : ''}
            </article>
            ${a.image ? `<div class="article-featured-image"><img src="${a.image}" alt="${a.title}"></div>` : ''}
            <div class="article-content">${formatContent(a.content)}</div>
        </div>
    `;
}

function formatContent(c) {
    if(!c) return '<p>Non disponibile</p>';
    if(!Array.isArray(c)) c = c.split('\n\n');
    return c.map(p => {
        if(p.startsWith('## ')) return `<h2>${p.substring(3)}</h2>`;
        if(p.startsWith('### ')) return `<h3>${p.substring(4)}</h3>`;
        return `<p>${p}</p>`;
    }).join('');
}

function initializeMobileMenu() {
    const n = document.querySelector('.main-nav');
    if(!n) return;
    let x=0, s=0;
    n.addEventListener('touchstart', e => { x=e.touches[0].pageX-n.offsetLeft; s=n.scrollLeft; });
    n.addEventListener('touchmove', e => { if(!x) return; n.scrollLeft=s-(e.touches[0].pageX-n.offsetLeft-x)*2; });
}

function initializeTouchInteractions() {
    document.querySelectorAll('a,button,.article-title,.story-title,.feature-title').forEach(el => {
        el.addEventListener('touchstart', () => el.style.opacity='0.7');
        el.addEventListener('touchend', () => el.style.opacity='1');
        el.addEventListener('touchcancel', () => el.style.opacity='1');
    });
}
