<script>
    import { shoppingCart } from "$lib/stores/cart";

    import { onMount } from "svelte";

    onMount(() => {
        const items = localStorage.getItem("books");
        if (items !== "undefined") shoppingCart.fill(JSON.parse(items));
    });
</script>

<div class="bg-gradient-to-b from-green-200 to-white w-full">
    <div class="pt-6" />
    <slot />
</div>
