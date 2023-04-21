const accord = document.getElementsByClassName('accordine-container')
for (let item of accord) {

 item.addEventListener('click', function () { // this kwyword will not work in arrow function
        this.classList.toggle('active');
    })
}