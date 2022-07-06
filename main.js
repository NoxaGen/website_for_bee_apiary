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
        sliderCounter = sliderMobileImgs.length - 1;
    }
    const changeImage = sliderMobileImgs.findIndex(img => img.classList.contains('img-active'));
    sliderMobileImgs[changeImage].classList.remove('img-active');
    sliderMobileImgs[sliderCounter].classList.add('img-active');
}


let autoSlide = setInterval(nextSlide, 3000)

btnNext.addEventListener('click', nextArrow);
btnPrev.addEventListener('click', prevArrow);

function nextArrow() {
    clearInterval(autoDots);
    clearInterval(autoSlide);
    //after 3 seconds of inactivity interval will back to auto
    autoDots = setInterval(nextDot, 3000);
    autoSlide = setInterval(nextSlide, 3000);
    nextSlide();
    nextDot();
}

function prevArrow() {
    clearInterval(autoDots);
    clearInterval(autoSlide);
    //after 3 seconds of inactivity interval will back to auto
    autoDots = setInterval(nextDot, 3000);
    autoSlide = setInterval(nextSlide, 3000);
    prevSlide();
    prevDot();
}

//MOBILE MENU SCRIPT
//refactor of variables name later
const hiddenNavMobile = document.querySelector('.hamburger-menu');
const closeNavBtn = document.querySelector('.hamburger-menu .close');


function switchMenu() {
    hiddenNavMobile.classList.toggle('hamburger-menu-active');
    if (hiddenNavMobile.classList.contains('hamburger-menu-active')) {
        console.log('menu here i have this class')
        closeNavBtn.innerHTML = '<i class="fas fa-times">';

    } else {
        closeNavBtn.innerHTML = '<i class="fas fa-bars">';
    }
}

closeNavBtn.addEventListener('click', switchMenu);