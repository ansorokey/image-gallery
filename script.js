const scrollContainer = document.querySelector('.gallery');
const backBtn = document.querySelector('#back-btn');
const nextBtn = document.querySelector('#next-btn');

scrollContainer.addEventListener('wheel', (e) => {
    e.preventDefault();
    scrollContainer.scrollLeft += e.deltaY;
})
