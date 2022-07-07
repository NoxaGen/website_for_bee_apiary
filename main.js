// SLIDER SCRIPT

const sliderMobileImgs = [...document.querySelectorAll('.slider-mobile img')];
const sliderMobileDots = [...document.querySelectorAll('.slider-mobile .dots div')];
const btnPrev = document.querySelector('.slider-mobile .prev');
const btnNext = document.querySelector('.slider-mobile .next');

let sliderCounter = 0;
let dotsCounter = 0;

function nextDot() {
    const changeDot = sliderMobileDots.findIndex(dot => dot.classList.contains('active-dot'));
    sliderMobileDots[changeDot].classList.remove('active-dot');
    dotsCounter++;
    if (dotsCounter === sliderMobileDots.length) {
        dotsCounter = 0;
    }
    sliderMobileDots[dotsCounter].classList.add('active-dot');
}

function prevDot() {
    if (dotsCounter > 0) {
        dotsCounter--;

    } else if (dotsCounter <= 0) {
        dotsCounter = sliderMobileDots.length - 1;

    }
    const changeDot = sliderMobileDots.findIndex(dot => dot.classList.contains('active-dot'));
    sliderMobileDots[changeDot].classList.remove('active-dot');
    sliderMobileDots[dotsCounter].classList.add('active-dot');
}

let autoDots = setInterval(nextDot, 3000)

function nextSlide() {
    const changeImage = sliderMobileImgs.findIndex(img => img.classList.contains('img-active'));
    sliderMobileImgs[changeImage].classList.remove('img-active');
    sliderCounter++;
    if (sliderCounter === sliderMobileImgs.length) {
        sliderCounter = 0;
    }
    sliderMobileImgs[sliderCounter].classList.add('img-active');
};

function prevSlide() {
    if (sliderCounter > 0) {
        sliderCounter--;

    } else if (sliderCounter <= 0) {
        sliderCounter = sliderMobileImgs.length - 1; //cause index != lenght
    }
    const changeImage = sliderMobileImgs.findIndex(img => img.classList.contains('img-active'));
    sliderMobileImgs[changeImage].classList.remove('img-active');
    sliderMobileImgs[sliderCounter].classList.add('img-active');
}
//assign it to var to get index for recall
let autoSlide = setInterval(nextSlide, 3000)

btnNext.addEventListener('click', nextArrow);
btnPrev.addEventListener('click', prevArrow);

//cleaning interval after user change slide manualy
function cleaner() {
    clearInterval(autoDots);
    clearInterval(autoSlide);
}

//after 3 seconds of inactivity interval will back to auto
function setter() {
    autoDots = setInterval(nextDot, 3000);
    autoSlide = setInterval(nextSlide, 3000);
}

function nextArrow() {
    cleaner();
    nextSlide();
    nextDot();
    setter();
}

function prevArrow() {
    cleaner();
    prevSlide();
    prevDot();
    setter();
}



//MOBILE MENU SCRIPT
//refactor of variables name later
const hiddenNavMobile = document.querySelector('.hamburger-menu');
const navBtn = document.querySelector('.hamburger-menu .close');


function switchMenu() {
    hiddenNavMobile.classList.toggle('hamburger-menu-active');
    if (hiddenNavMobile.classList.contains('hamburger-menu-active')) {
        console.log('menu here i have this class')
        navBtn.innerHTML = '<i class="fas fa-times">';

    } else {
        navBtn.innerHTML = '<i class="fas fa-bars">';
    }
}

navBtn.addEventListener('click', switchMenu);
//MENU PROGRAM FOR AUTOSCROLL

//all elements from mobile html here
const mobileMenuLis = document.querySelectorAll('.hamburger-menu li');
const headerMobile = document.querySelector('header')
const promoMobile = document.querySelector('.promotion');
const springMobile = document.querySelector('.multiflorous-spring-banner');
const summerMobile = document.querySelector('.multiflorous-summer-banner');
const lindenMobile = document.querySelector('.linden-tree');
const acaciaMobile = document.querySelector('.acacia-banner');
const aboutMobile = document.querySelector('section.about-us');
const galeryMobile = document.querySelector('.slider-mobile');
const authenticityMobile = document.querySelector('.authenticity');
const shopMobile = document.querySelector('.local-store');
const onlineShopMobile = document.querySelector('.online-shop');
const rightsMobile = document.querySelector('footer');

mobileMenuLis.forEach(liElement => liElement.addEventListener('click', function () {

    hiddenNavMobile.classList.remove('hamburger-menu-active');
    navBtn.innerHTML = '<i class="fas fa-bars">';
    const test = this.dataset.option;
    switch (test) {
        case 'main_site':
            window.scroll(0, headerMobile.offsetTop);
            break;
        case 'promotion':
            window.scroll(0, promoMobile.offsetTop * 2); //cause css effect
            break;
        case 'spring':
            window.scroll(0, springMobile.offsetTop + springMobile.offsetHeight);
            break;
        case 'summer':
            window.scroll(0, summerMobile.offsetTop + summerMobile.offsetHeight);
            break;
        case 'acacia':
            window.scroll(0, acaciaMobile.offsetTop + acaciaMobile.offsetHeight);
            break;
        case 'linden':
            window.scroll(0, lindenMobile.offsetTop + lindenMobile.offsetHeight);
            break;
        case 'about_us':
            window.scroll(0, aboutMobile.offsetTop)
            break;
        case 'galery':
            window.scroll(0, galeryMobile.offsetTop + aboutMobile.offsetTop);
            break;
        case 'shop':
            window.scroll(0, shopMobile.offsetTop + (aboutMobile.offsetTop));
            break;
        case 'online_shop':
            window.scroll(0, onlineShopMobile.offsetTop + aboutMobile.offsetTop);
            break;
        case 'rights':
            window.scroll(0, rightsMobile.offsetTop + aboutMobile.offsetTop);
            break;
    }
}));