<script>
    import { page } from "$app/stores";
    import RatingComp from "$lib/components/RatingComp.svelte";
    import ReadingBorder from "$lib/components/ReadingBorder.svelte";
    // import { shoppingCart } from "$lib/stores/cart";
    import { onMount } from "svelte";
    import { client } from "$lib/client";
    import { BookInCart, GetBookById } from "$lib/graphql/query";
    import BookPageHeader from "$lib/components/BookPageHeader.svelte";
    import { DeleteBookFromCart, InsertCartOne } from "$lib/graphql/mutation";

    let book_item = {};
    var id = "";

    let isInCartF = false;
    onMount(async () => {
        id = $page.params.id;
        const { book } = await client.request(GetBookById, { id: id });
        book_item = book;

        await isInCart();
    });

    async function isInCart() {
        id = $page.params.id;
        const { inCart } = await client.request(BookInCart, {
            user_id: "d9d5ced4-d25f-46b5-875f-ce84d7dc8bae",
            book_id: id,
        });
        if (inCart != null) isInCartF = true;
    }

    export function addToShoppingCart(id) {
        if (!isInCartF) {
            client.request(InsertCartOne, {
                user_id: "d9d5ced4-d25f-46b5-875f-ce84d7dc8bae",
                book_id: id,
            });
            isInCartF = true;
        }
        else {
            client.request(DeleteBookFromCart, {
                user_id: "d9d5ced4-d25f-46b5-875f-ce84d7dc8bae",
                book_id: id,
            });
            isInCartF = false;
        }
    }
</script>

<BookPageHeader />

<img
    src={book_item.img}
    alt={book_item.title}
    class="h-44 w-32 rounded-xl shadow-xl mx-auto"
/>
<div class="text-center font-bold text-4xl pt-2">{book_item.title}</div>
<div class="text-center font-bold py-2">{book_item.author}</div>
<div
    class="px-4 py-1 h-40 text-center text-sm text-transparent bg-clip-text bg-gradient-to-b from-base-300 to-white"
>
    {book_item.summary}
</div>

<ReadingBorder readerCt="4" />

<RatingComp book={book_item} />

<div on:click={() => addToShoppingCart($page.params.id)} class="p-4">
    {#if !isInCartF}
        <div
            class="btn rounded-2xl btn-primary grid grid-cols-5 text-white font-bold text-2xl"
        >
            <div class="text-right col-span-2">BUY</div>
            <div>|</div>
            <div class="text-left col-span-2">${book_item.price}</div>
        </div>
    {:else}
        <div
            class="btn btn-outline btn-rounded-2xl btn-primary font-bold w-full"
        >
            Remove from Cart
        </div>
    {/if}
</div>
