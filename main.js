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
                item.classList.add('invisible');
            }
        })
        workItemContainer.classList.remove('anim--out');
    }, 300);
})


// Core Background fade in effect & Core Item Description effect
const core = document.querySelector('#core');
const work = document.querySelector('#work');
const coreItemDescLeft = document.querySelector('.core__item__description--left');
const coreItemDescRight = document.querySelector('.core__item__description--right');
const targetDiv = document.querySelector('.core__item__title--right');
document.addEventListener('scroll', () => {
    if (window.scrollY + window.innerHeight > targetDiv.offsetTop) {
        core.classList.add('core__background');
        coreItemDescLeft.classList.add('activeLeft');
        setTimeout(()=> { // 300ms delay
            coreItemDescRight.classList.add('activeRight');
        }, 300);
    }
})


// Make Arrow-Up Button
const arrow = document.querySelector('.arrow-up');
arrow.addEventListener('click', () => {
    const home = document.querySelector('#home');
    home.scrollIntoView({behavior: "smooth", block: "start"});
})
document.addEventListener('scroll', () => {
    if(window.scrollY > 200) {
        arrow.classList.remove('arrow--active');
    } else {
        arrow.classList.add('arrow--active');
    }
})