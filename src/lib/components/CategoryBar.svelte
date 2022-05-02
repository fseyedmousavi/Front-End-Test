<script>
    // import { books } from "$lib/stores/book";
    import Cart from "./Cart.svelte";
    import { onMount } from "svelte";
    import { client } from "$lib/client";
    import { GetBookCover } from "$lib/graphql/query";

    let book_list = [];

    onMount(async () => {
        const { books } = await client.request(GetBookCover, {});
        book_list = books;
    });
</script>

<div class="tabs pt-3 scroll-smooth ">
    <div class="tab tab-bordered">All</div>
    <div class="tab tab-bordered tab-active">New Arrivals</div>
    <div class="tab tab-bordered">Best Ever</div>
</div>

<div class="px-6 pt-5">
    {#each book_list as item}
        <Cart book={item} isCart={false} />
    {/each}
</div>
