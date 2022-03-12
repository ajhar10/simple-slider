const imgUrl = ["images/slide-img-1.jpg",
    "images/slide-img-2.jpg",
    "images/slide-img-3.jpg",
    "images/slide-img-4.jpg",
    "images/slide-img-5.jpg",
    "images/slide-img-6.jpg",
    "images/slide-img-7.jpg"]

let imgIndex = 0;
let img = document.getElementById('slide-img');

setInterval(() => {
    if (imgIndex >= imgUrl.length) {
        imgIndex = 0;
    }
    img.setAttribute('src', imgUrl[imgIndex])
    imgIndex++;

}, 1000)