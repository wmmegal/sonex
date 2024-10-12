/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{html,js}',
    ],
    theme: {
        container: {
            center: true,
            padding: '15px',
            screens: {
                sm: '375px',
                md: '575px',
                lg: '767px',
                xl: '1200px',
            },
        },
        colors: {
            'primary': '#1752ca',
            'black': '#16140f',
            'white': '#FFFFFF',
        },
        extend: {
            fontSize: {
                '4xl': ['40px', '1'],
            },
        },
    },
    plugins: [],
};

