let list = document.querySelector('.main-nav__mobile-list');
let toggle = document.querySelector('.main-nav__logo-toggle');
let close = document.querySelector('.main-nav__logo-close');

toggle.onclick = function () {
 list.classList.remove('hidden');
}

close.onclick = function () {
 list.classList.add('hidden');
}


