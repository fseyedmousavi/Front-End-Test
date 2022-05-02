module.exports = {
    mode: 'jit',
    purge: ['./src/**/*.{html,js,svelte,ts}'],
    daisyui: {
        themes: [{
            lemonade: {
                ...require("daisyui/src/colors/themes")["[data-theme=lemonade]"],
                primary: "#2fce67",
                secondary: "#d4194b",
                background: "#efefef",
                "base-100": "#b3b2b6",
                error: "#e7a097",
                "light-primary": "#2fce67",
                accent: "#ffffff",
            },
        }, ],
    },
    plugins: [require('daisyui'), require('@tailwindcss/typography')],
}