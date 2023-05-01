const toggleMenu = document.getElementsByClassName('navbar-links')[0];
const toggleButton = document.getElementsByClassName('navbar-toggle')[0];


toggleButton.addEventListener('click', () => {
    toggleMenu.classList.toggle('active')
})