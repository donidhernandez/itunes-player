/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                slate: {
                    700: '#1A1A1A',
                    800: '#0A0A0A',
                },
                dark: {
                    800: '#1B1B1B',
                    900: '#14151F',
                },
                indigo: {
                    600: '#5C67DE',
                },
            },
        },
    },
    plugins: [],
}
