const sliderMobileImgs = [...document.querySelectorAll('.slider-mobile img')];
let sliderCounter = 0;

setInterval(sliderChanger, 3000)

function sliderChanger() {



    console.log(sliderCounter)

    const changeImage = sliderMobileImgs.findIndex(img => img.classList.contains('img-active'));
    sliderMobileImgs[changeImage].classList.remove('img-active');
    sliderCounter++;
    if (sliderCounter === sliderMobileImgs.length) {
        sliderCounter = 0;
    }
    sliderMobileImgs[sliderCounter].classList.add('img-active');




};