// GELD Jewelry Studio — Minimal JS

// === BURGER MENU ===
const burger = document.querySelector('.burger');
if (burger) {
    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        document.body.classList.toggle('menu-open');
    });
}

// === GALLERY THUMBS ===
const thumbs = document.querySelectorAll('.product-gallery__thumb');
thumbs.forEach(thumb => {
    thumb.addEventListener('click', () => {
        thumbs.forEach(t => t.classList.remove('product-gallery__thumb--active'));
        thumb.classList.add('product-gallery__thumb--active');
    });
});

// === VARIATION CARAT ===
const caratBtns = document.querySelectorAll('.variation-btn');
caratBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        caratBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    });
});

// === SIZE SELECTOR ===
const sizeBtns = document.querySelectorAll('.size-btn');
sizeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        sizeBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    });
});

// === STICKY HEADER ===
let lastScroll = 0;
const header = document.querySelector('.header');
if (header) {
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        if (currentScroll > 10) {
            header.style.boxShadow = '0 2px 12px rgba(0,0,0,0.06)';
        } else {
            header.style.boxShadow = 'none';
        }
        lastScroll = currentScroll;
    });
}

// === FILTER TOGGLE (mobile) ===
const filterBtn = document.querySelector('.filter-btn');
const filterPanel = document.querySelector('.filter-panel');
if (filterBtn) {
    filterBtn.addEventListener('click', () => {
        filterPanel.classList.toggle('open');
    });
}
