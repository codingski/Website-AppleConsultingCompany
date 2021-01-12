const navbar = document.querySelector('#navbar');

document.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if(scrollY > 75) {
        navbar.classList.add('light-color');
    } else {
        navbar.classList.remove('light-color');
    }
})