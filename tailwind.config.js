/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Nunito', 'sans-serif']
            },
            backgroundImage: {
                'hero-desktop': 'url("/components/Hero/frame1.svg")',
                'hero-mobile': 'url("/components/Hero/frame2.svg")',
            },
        },
    },
    plugins: [],
};
