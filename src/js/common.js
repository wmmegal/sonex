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
});

document.addEventListener('click', (e) => {
    if (!e.target.closest('.btn-menu')) {
        return;
    }

    const btn = e.target.closest('.btn-menu');

    btn.classList.toggle('active');

    const menu = btn.nextElementSibling;

    menu.classList.toggle('open');
});

document.addEventListener('change', (e) => {
    if (!e.target.closest('[name=rule]')) {
        return;
    }

    const checkbox = e.target.closest('[name=rule]'),
        form = checkbox.closest('form'),
        btn = form.querySelector('[type=submit]');

    btn.disabled = !checkbox.checked;
});
