<script>
    import { client } from "$lib/client";
    import Cart from "$lib/components/Cart.svelte";
    import TabHeader from "$lib/components/TabHeader.svelte";
    import { GetBookById, GetCartByUserId } from "$lib/graphql/query";
    import { onMount } from "svelte";
    // import { shoppingCart } from "$lib/stores/cart";

    let shoppingCart = [];

    onMount(async () => {
        const { data } = await client.request(GetCartByUserId, {
            user_id: "d9d5ced4-d25f-46b5-875f-ce84d7dc8bae",
        });
        for (var i = 0; i < data.length; i++) {
            var d = data[i].book_id;
            const { book } = await client.request(GetBookById, { id: d });
            shoppingCart[i] = book;
        }
    });
</script>

<TabHeader title="Shopping Cart" />

<div class="mt-24" />
<div class="px-6">
    {#each shoppingCart as item}
        <Cart book={item} />
    {/each}
</div>

{#if shoppingCart.length > 0}
    <div class="px-6 py-2">
        <!-- <div
            on:click={() => shoppingCart.clear()}
            class="btn btn-outline btn-error w-full font-bold text-lg"
        >
            Remove All
        </div> -->
    </div>
{:else}
    <div class="text-center text-base-300 font-mono">
        No books in shopping cart yet
    </div>
{/if}
