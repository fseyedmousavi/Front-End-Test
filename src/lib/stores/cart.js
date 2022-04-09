import { writable } from 'svelte/store';

function createCart() {
    const { subscribe, set, update } = writable([]);

    return {
        subscribe,
        increment: (item) => update((n) => {
            n.push(JSON.parse(JSON.stringify(item)));
            localStorage.setItem("cart", JSON.stringify(n));
            return n;
        }),
        decrement: (cart_id) => update((n) => {
            for (let i = 0; i < n.length; i++) {
                if (n[i].id === cart_id) {
                    n.splice(i, 1);
                    break;
                }
            }
            localStorage.setItem("cart", JSON.stringify(n));
            return n;
        }),
        fill: (items) => {
            set(items);
        },
        clear: () => {
            set([]);
            localStorage.setItem("cart", JSON.stringify());
        }
    };
}

export const shoppingCart = createCart();