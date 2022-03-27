module.exports = {
    mode: 'jit',
    purge: ['./src/**/*.{html,js,svelte,ts}'],
    daisyui: {
        themes: [{
            lemonade: {
                ...require("daisyui/src/colors/themes")["[data-theme=lemonade]"],
                primary: "#2fce67",
                background: "#efefef",
                "base-100": "#b3b2b6",
                error: "#e7a097",
            },
        }, ],
    },
    plugins: [require('daisyui'), require('@tailwindcss/typography')],
}