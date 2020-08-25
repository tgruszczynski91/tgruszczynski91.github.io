//* Go back to the top button */
const toTheTop = document.querySelector('.scroll-Up');

toTheTop.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
})
