var openForm = document.querySelector('.header-navigation__open-close__close');
var form = document.querySelector('.header-navigation__open-close__item-three');
var menuToClose = document.querySelector('.header-menu');
var buttonClickHanlder = function() {
    if (form.classList.contains('header-navigation__open-close__close')) {
        form.classList.remove('header-navigation__open-close__close');
        console.log('123')
        form.classList.add('header-navigation__open-close__item-three');
    }
    else if (form.classList.contains('header-navigation__open-close__item-three')) {
        form.classList.remove('header-navigation__open-close__item-three');
        form.classList.add('header-navigation__open-close__close');
        console.log('455')
    }
};
var hideMenu = function() {
    if (menuToClose.classList.contains('header-menu')) {
        menuToClose.classList.remove('header-menu');
        console.log('123')
        menuToClose.classList.add('visually-hidden');
    }
    else if (menuToClose.classList.contains('visually-hidden')) {
        menuToClose.classList.remove('visually-hidden');
        menuToClose.classList.add('header-menu');
        console.log('455')
    }
};
openForm.addEventListener('click',buttonClickHanlder);
openForm.addEventListener('click',hideMenu);
console.log();