const scrollContainer = document.querySelector('.gallery');
const backBtn = document.querySelector('#back-btn');
const nextBtn = document.querySelector('#next-btn');

scrollContainer.addEventListener('wheel', (e) => {
    // prevents the wheel from scrolling like normal
    e.preventDefault();
    scrollContainer.scrollLeft += e.deltaY;
    scrollContainer.style.scrollBehavior = 'auto';
})

nextBtn.addEventListener('click', () => {
    scrollContainer.style.scrollBehavior = 'smooth';
    // the width of the gallery
    scrollContainer.scrollLeft += 900;
});

backBtn.addEventListener('click', () => {
    scrollContainer.style.scrollBehavior = 'smooth';
    // the width of the gallery
    scrollContainer.scrollLeft -= 900;
});
