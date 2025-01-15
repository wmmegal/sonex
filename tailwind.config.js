import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js}'],
    theme: {
        screens: {
            sm: '375px',
            md: '575px',
            lg: '1199px',
            xl: '1464px',
        },
        container: {
            center: true,
            padding: '15px',
        },
        colors: {
            primary: '#0e71b8',
            secondary: '#1ae789',
            black: '#1c1c1c',
            white: '#FFFFFF',
        },
        extend: {
            fontSize: {
                '4xl': ['36px', '1.2'],
                '3xl': ['32px', '1.2'],
            },
        },
    },
    plugins: [forms, typography],
};
