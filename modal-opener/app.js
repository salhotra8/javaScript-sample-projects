const openBtn  = document.querySelector('.model-btn');
const modal =  document.querySelector('.modal-div');
const closeBtn = document.querySelector('.close-btn');
const image = document.querySelector('.bg-image');

openBtn.addEventListener('click', () => {
    modal.style.display = 'block';
    image.style.filter = 'blur(2px)';

})

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    image.style.filter = '';

})

modal.addEventListener('click', (e) => {
    // if(e.target === modal)
    modal.style.display = 'none';
    image.style.filter = '';
})

