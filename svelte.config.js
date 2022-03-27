import preprocess from "svelte-preprocess";
// import adapter from "@sveltejs/adapter-node";
import vercel from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        adapter: vercel()
    },

    preprocess: [
        preprocess({
            postcss: true,
        }),
    ],
};

export default config;