/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                slate: {
                    700: '#1A1A1A',
                },
                indigo: {
                    600: '#5C67DE',
                },
            },
        },
    },
    plugins: [],
}
