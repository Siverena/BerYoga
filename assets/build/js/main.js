"use strict";
(function () {

    const menu = document.querySelector(`.main-nav__list`);
    const btn = document.querySelector(`.main-nav__btn`);

    const menuOpen = () => {
        btn.classList.remove("main-nav__btn--open");
        btn.classList.add("main-nav__btn--close");
        menu.classList.toggle("show");

    }
    const menuClose = () => {
        btn.classList.add("main-nav__btn--open");
        btn.classList.remove("main-nav__btn--close");
        menu.classList.toggle("show");
    }

    btn.addEventListener('click', function () {
        if (btn.classList.contains("main-nav__btn--open")) {
            menuOpen();
        } else {
            menuClose();
        }

    });
})();