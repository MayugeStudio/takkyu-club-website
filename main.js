// スムーススクロール
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ナビゲーションのアクティブ状態
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

const images = document.querySelectorAll('.slideshow img');
let index = 0;

setInterval(() => {
  images[index].classList.remove('active');
  index = (index + 1) % images.length;
  images[index].classList.add('active');
}, 3000);

// ハンバーガーメニューの開閉
const hamburgerMenu = document.querySelector('.hamburger-menu');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

if (hamburgerMenu && navMenu) {
  hamburgerMenu.addEventListener('click', function() {
    hamburgerMenu.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  // メニューリンクをクリックしたらメニューを閉じる
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      hamburgerMenu.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });

  // メニュー外をクリックしたらメニューを閉じる
  document.addEventListener('click', function(event) {
    const isClickInsideNav = navMenu.contains(event.target);
    const isClickOnHamburger = hamburgerMenu.contains(event.target);
    
    if (!isClickInsideNav && !isClickOnHamburger && navMenu.classList.contains('active')) {
      hamburgerMenu.classList.remove('active');
      navMenu.classList.remove('active');
    }
  });
}

