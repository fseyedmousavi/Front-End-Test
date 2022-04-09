import { server_url } from "$lib/constant";
import { writable } from "svelte/store";
import { browser } from "$app/env";

function createMusic() {
    const { subscribe, set, update } = writable([{
            id: 0,
            title: "Heart Stereo",
            songer: "Adam Levine",
            img: `${server_url}/stereo_hearts_cover.jpg`,
            src: `${server_url}/Stereo Hearts.mp3`,
            liked: false,
        },
        {
            id: 1,
            title: "Love Nwantiti",
            songer: "Ckay",
            img: `${server_url}/love_nwantiti_cover.jpg`,
            src: `${server_url}/Love Nwantiti.mp3`,
            liked: true,
        },
        {
            id: 2,
            title: "Diamond Heart",
            songer: "Alan Walker",
            img: `${server_url}/diamond_heart_cover.jpg`,
            src: `${server_url}/Diamond Heart.mp3`,
            liked: true,
        },
    ]);
    if (browser) localStorage.setItem("musics", JSON.stringify(this));

    return {
        subscribe,
        like: (song_id) => update((n) => {
            n[song_id].liked = !n[song_id].liked;
            localStorage.setItem("musics", JSON.stringify(n));
            return n;
        }),
        fill: (items) => {
            return set(items);
        },
    };
}

export const music = createMusic();