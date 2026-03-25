'use strict';

// for(let i = 1; i <= 100; i) {
//     console.log(i);
// }

let hamburger = document.querySelector('.material-symbols-outlined');
let close = document.querySelector('.mobile-menu .material-symbols-outlined');
let menuMobile = document.querySelector('.mobile-menu');
let menuMobileItems = document.querySelectorAll('.mobile-menu a');

// console.log(menuMobileItems);

menuMobileItems.forEach((elem) => {
    elem.addEventListener('click', () => {
        // menuMobile.style.display = "none";
        menuMobile.classList.add('class-hide');
    })
});

hamburger.addEventListener('click', () => {
    // menuMobile.style.display = "flex";
    menuMobile.classList.remove('class-hide');
});

close.addEventListener('click', () => {
    // menuMobile.style.display = "none";
    menuMobile.classList.add('class-hide');
});