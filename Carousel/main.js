let imageArray = [
    'https://picsum.photos/id/0/800/600',
    'https://picsum.photos/id/1/800/600',
    'https://picsum.photos/id/2/800/600',
    'https://picsum.photos/id/3/800/600',
    'https://picsum.photos/id/4/800/600'
];
let imageBoxElement = document.getElementsByClassName('image-box');
let currentIndex = 0;
window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    imageBoxElement[0].style.backgroundImage = `url(${imageArray[0]})`;
});
function leftArrowClick (arguments) {
    currentIndex = (!currentIndex) ? imageArray.length-1: --currentIndex;
    imageBoxElement[0].style.backgroundImage = `url(${imageArray[currentIndex]})`;
}

function rightArrowClick (arguments) {
    currentIndex = (currentIndex>=imageArray.length-1) ? 0: ++currentIndex;
    imageBoxElement[0].style.backgroundImage = `url(${imageArray[currentIndex]})`;
}