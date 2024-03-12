"use strict";
(function () {
    const buttonHomeEl = document.querySelector('.menu-button-home');
    const submenuHomeEl = document.querySelector('.submenu-home');
    const buttonAboutEl = document.querySelector('.menu-button-about');
    const submenuAboutEl = document.querySelector('.submenu-about');
    const buttonRegisterEl = document.querySelector('.menu-button-register');
    const submenuRegisterEl = document.querySelector('.submenu-register');

    buttonHomeEl.addEventListener('click', function() {
        console.log("click once");
        submenuHomeEl.classList.toggle('open');
    });
    buttonAboutEl.addEventListener('click', function() {
        console.log("click once");
        submenuAboutEl.classList.toggle('open');
    });
    buttonRegisterEl.addEventListener('click', function() {
        console.log("click once");
        submenuRegisterEl.classList.toggle('open');
    });

})();