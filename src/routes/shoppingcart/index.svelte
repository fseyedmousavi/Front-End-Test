<script>
    import Cart from "$lib/components/Cart.svelte";
import TabHeader from "$lib/components/TabHeader.svelte";
    import { shoppingCart } from "$lib/stores/cart";
</script>

<TabHeader title="Shopping Cart"/>

<div class="mt-24" />
<div class="px-6">
    {#each $shoppingCart as item}
        <Cart book={item} isCart={true} />
    {/each}
</div>

{#if $shoppingCart.length > 0}
    <div class="px-6 py-2">
        <div
            on:click={() => shoppingCart.clear()}
            class="btn btn-outline btn-error w-full font-bold text-lg"
        >
            Remove All
        </div>
    </div>
{:else}
    <div class="text-center text-base-300 font-mono">
        No books in shopping cart yet
    </div>
{/if}
