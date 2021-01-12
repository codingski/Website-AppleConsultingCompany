// Navbar scroll effect
const navbar = document.querySelector('#navbar');

document.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if(scrollY > 75) {
        navbar.classList.add('light-color');
    } else {
        navbar.classList.remove('light-color');
    }
})

// Handle scrolling when tapping on the navbar menu
navbar.addEventListener('click', (e) => {
    const link = e.target.dataset.link;
    const scrollTo = document.querySelector(link);
    if(link == null) {
        return;
    } else {
        scrollTo.scrollIntoView({behavior: "smooth", block: "start"});
    }
})

// Handle scrolling when tapping on the navbar logo
const navbarLogo = document.querySelector('.navbar__logo');
navbarLogo.addEventListener('click', () => {
    home.scrollIntoView({behavior: "smooth", block: "start"});
})

// Make home slowly fade to transparent as the window scrolls down
const homeContainer = document.querySelector('.home__container');
document.addEventListener('scroll', () => {
    const homeHeight = homeContainer.getBoundingClientRect().height;
    if(window.scrollY < homeHeight) {
        homeContainer.style.opacity = 1.2 - (window.scrollY / homeHeight);
    }
})

// Work category filtering
const core = document.querySelector('#core');
const work = document.querySelector('#work');
const workCaregories = document.querySelector('.work__categories');
const workItem = document.querySelectorAll('.work__item');
const workItemContainer = document.querySelector('.work__item__container');
workCaregories.addEventListener('click', (e) => {
    const target = e.target;
    const filter = target.dataset.filter || e.target.parentNode.dataset.filter;
    workItemContainer.classList.add('anim--out');
    setTimeout(() => {
        workItem.forEach((item) => {
            if(filter == '*' || filter == item.dataset.type) {
                item.classList.remove('invisible');
            } else {
                core.classList.add('core__background');
                item.classList.add('invisible');
            }
        })
        workItemContainer.classList.remove('anim--out');
    }, 300);
})

// Core section background fade in effect
document.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if(scrollY > 1300){
        core.classList.add('core__background');
    }
})