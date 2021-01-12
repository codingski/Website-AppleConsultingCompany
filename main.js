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