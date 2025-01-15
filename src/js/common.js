import 'virtual:svg-icons-register';
import '../css/tailwind.css';
import * as isvek from 'bvi';
import '@splidejs/splide/css/core';
import Splide from '@splidejs/splide';

document.addEventListener('DOMContentLoaded', () => {
    new isvek.Bvi();

    new Splide('.splide', {
        arrows: false,
    }).mount();

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.btn-menu')) {
            return;
        }

        const btn = e.target.closest('.btn-menu');

        btn.classList.toggle('active');

        const menu = btn.nextElementSibling;

        menu.classList.toggle('open');
    });
});
