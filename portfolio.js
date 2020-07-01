//* Go back to the top button */
const toTheTop = document.querySelector('.scroll-Up');

toTheTop.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
})

function chuj(e) {
    const x = 3;
    console.log(this)
    console.log(x)
}

chuj()