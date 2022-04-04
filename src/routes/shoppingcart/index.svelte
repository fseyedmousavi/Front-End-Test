<script>
    import Cart from "$lib/components/Cart.svelte";
    import { shoppingCart } from "$lib/stores/cart";
</script>

<div
    class="fixed left-0 top-0 w-full text-center p-5 font-bold text-primary text-3xl bg-white shadow-xl"
>
    shopping Cart
</div>

<div class="mt-24" />
{#each $shoppingCart as item}
    <Cart book={item} />
{/each}

{#if $shoppingCart.length > 0}
<div class="px-6 py-2">
    <div
        on:click={() => shoppingCart.clear()}
        class="btn btn-outline btn-error w-full font-bold text-lg"
    >
        Remove All
    </div></div>
{/if}
