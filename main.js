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
    console.log('counter is' + sliderCounter)
};

function prevSlide() {

    if (sliderCounter > 0) {
        sliderCounter--;
        console.log('im swapping on prev fine')
        console.log('counter is' + sliderCounter)

    } else if (sliderCounter <= 0) {
        sliderCounter = sliderMobileImgs.length - 1;
        console.log('sliderCounter is 0')
        console.log('counter is' + sliderCounter)
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
    nextSlide();
    nextDot();



    autoDots = setInterval(nextDot, 3000);
    autoSlide = setInterval(nextSlide, 3000);
}

function prevArrow() {
    clearInterval(autoDots);
    clearInterval(autoSlide);
    autoDots = setInterval(nextDot, 3000);
    autoSlide = setInterval(nextSlide, 3000);
    prevSlide();
    prevDot();

}