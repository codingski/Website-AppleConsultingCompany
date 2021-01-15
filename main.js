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
document.addEventListener('scroll', () => {
    const targetDiv = document.querySelector('.core__item__title--right');
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


// Procedures effect
const procedures = document.querySelector('.procedures');
const procedureOne = document.querySelector('.procedure.one');
const procedureTwo = document.querySelector('.procedure.two');
const procedureThree = document.querySelector('.procedure.three');
const procedureFour = document.querySelector('.procedure.four');
const procedureFive = document.querySelector('.procedure.five');
const procedureSix = document.querySelector('.procedure.six');
const pp = document.querySelector('.procedure');
document.addEventListener('scroll', () => {
    const targetDiv = document.querySelector('.procedure.two');
    if(window.scrollY + window.innerHeight > targetDiv.offsetTop){
        procedureOne.classList.add('procedure--active');
        setTimeout(() => {
            procedureTwo.classList.add('procedure--active');
        }, 250);
        setTimeout(() => {
            procedureThree.classList.add('procedure--active');
        }, 500);
        setTimeout(() => {
            procedureFour.classList.add('procedure--active');
        }, 750);
        setTimeout(() => {
            procedureFive.classList.add('procedure--active');
        }, 1000);
        setTimeout(() => {
            procedureSix.classList.add('procedure--active');
        }, 1250);
    }
})


const toggleBtn = document.querySelector('.toggleBtn');
const navbarMenu = document.querySelector('.navbar__menu');
toggleBtn.addEventListener('click', () => {
    navbarMenu.classList.add('toggleBtn--active');
})