const daisyui = require('daisyui')
/** @type {import('tailwindcss').Config} */
module.exports = {
    theme: {
    },
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    plugins: [daisyui],
}
