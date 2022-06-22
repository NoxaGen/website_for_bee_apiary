const jar1 = document.querySelector('.products .honey .jar1');
const jar2 = document.querySelector('.products .honey .jar2');
const jar3 = document.querySelector('.products .honey .jar3');
const jar4 = document.querySelector('.products .honey .jar4');

const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
const sep1 = document.getElementById('sep1')


jar1.addEventListener('click', function () {


    window.scrollTo(0, sep1.offsetTop);
})

jar2.addEventListener('click', function () {


    window.scrollTo(0, 3900);
})

jar3.addEventListener('click', function () {


    window.scrollTo(0, 200);
})

jar4.addEventListener('click', function () {


    window.scrollTo(0, 100);
})

// window.addEventListener('scroll', function () {
//     console.log(this.scrollY)
// })