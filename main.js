const jar1 = document.querySelector('.products .honey .jar1');
const jar2 = document.querySelector('.products .honey .jar2');
const jar3 = document.querySelector('.products .honey .jar3');
const jar4 = document.querySelector('.products .honey .jar4');

const jar1offset = jar1.scrollTop;


jar1.addEventListener('click', function () {


    window.scrollTo(0, jar1.offset());
})

jar2.addEventListener('click', function () {
    window.location.href = "https://noxagen.github.io/pasieka_pod_brzozami/products.html";

    window.scrollTo(0, 1800);
})

jar3.addEventListener('click', function () {
    window.location.href = "https://noxagen.github.io/pasieka_pod_brzozami/products.html";

    window.scrollTo(0, 200);
})

jar4.addEventListener('click', function () {
    window.location.href = "https://noxagen.github.io/pasieka_pod_brzozami/products.html";

    window.scrollTo(0, 100);
})