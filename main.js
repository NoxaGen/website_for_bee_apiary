const sliderMobileImgs = [...document.querySelectorAll('.slider-mobile img')];
const sliderMobileDots = [...document.querySelectorAll('.slider-mobile .dots div')];

let sliderCounter = 0;
let dotsCounter = 0;


function dotsChanger() {
    const changeDot = sliderMobileDots.findIndex(dot => dot.classList.contains('active-dot'));
    sliderMobileDots[changeDot].classList.remove('active-dot');
    dotsCounter++;
    if (sliderCounter === sliderMobileDots.length) {
        dotsCounter = 0;
    }

    sliderMobileDots[dotsCounter].classList.add('active-dot');

}

setInterval(dotsChanger, 3000)



function sliderChanger() {
    const changeImage = sliderMobileImgs.findIndex(img => img.classList.contains('img-active'));
    sliderMobileImgs[changeImage].classList.remove('img-active');
    sliderCounter++;
    if (sliderCounter === sliderMobileImgs.length) {
        sliderCounter = 0;
    }
    sliderMobileImgs[sliderCounter].classList.add('img-active');
};

setInterval(sliderChanger, 3000)