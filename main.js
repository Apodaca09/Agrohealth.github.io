let currentIndex = 0;
const images = document.querySelectorAll('.carousel img');
const carousel = document.querySelector('.carousel');
const indicators = document.querySelectorAll('.indicators span');
const parrafo = document.getElementById('labelMessage');

document.querySelector('.next').addEventListener('click', () => {
    changeImage(currentIndex + 1);
});

document.querySelector('.prev').addEventListener('click', () => {
    changeImage(currentIndex - 1);
});

indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        changeImage(index);
    });
});

function changeImage(newIndex) {
    if (newIndex < 0) {
        newIndex = images.length - 1;
    } else if (newIndex >= images.length) {
        newIndex = 0;
    }

    images[currentIndex].classList.remove('active');
    indicators[currentIndex].classList.remove('active');

    images[newIndex].classList.add('active');
    indicators[newIndex].classList.add('active');

    const newImage = images[newIndex];
    const text = images[newIndex].getAttribute('alt');
    parrafo.textContent = text;
    currentIndex = newIndex;
}

window.addEventListener('load', () => {
    const activeImage = images[currentIndex];
    const text = images[currentIndex].getAttribute('alt');
    parrafo.textContent = text;
});


