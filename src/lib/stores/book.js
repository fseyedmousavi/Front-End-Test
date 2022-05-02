// import { browser } from "$app/env";
// import { server_url } from "$lib/constant";
// import { writable } from "svelte/store";

// function createBook() {
//     const { subscribe, set, update } = writable([{
//             id: 0,
//             title: "Girl",
//             author: "Edna O'Brien",
//             rate: 2,
//             price: 10,
//             img: `${server_url}/girl.jpg`,
//             readerCt: 2,
//             remain: 20,
//             last_read: "3.30.2022",
//             text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//         },
//         {
//             id: 1,
//             title: "Hamnet",
//             author: "Maggle O'Farrell",
//             rate: 4.5,
//             price: 20.1,
//             img: `${server_url}/hamnet.jpg`,
//             readerCt: 6,
//             remain: 82,
//             last_read: "3.30.2022",
//             text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//         },
//         {
//             id: 2,
//             title: "Girl 2",
//             author: "Edna O'Brien",
//             rate: 1,
//             price: 15.6,
//             img: `${server_url}/girl.jpg`,
//             readerCt: 0,
//             remain: 43,
//             last_read: "3.30.2022",
//             text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//         },
//         {
//             id: 3,
//             title: "Hamnet 2",
//             author: "Maggle O'Farrell",
//             rate: 5,
//             price: 40,
//             img: `${server_url}/hamnet.jpg`,
//             readerCt: 3,
//             remain: 25,
//             last_read: "3.30.2022",
//             text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//         },
//     ]);
//     if (browser) localStorage.setItem("books", JSON.stringify(this));

//     return {
//         subscribe,
//         rate: (book_id, rating) => update((n) => {
//             n[book_id].rate = rating;
//             localStorage.setItem("books", JSON.stringify(n));
//             return n;
//         }),
//         fill: (items) => {
//             return set(items);
//         },
//     };
// }

// export const books = createBook();