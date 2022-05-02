<script>
    import CategoryBar from "$lib/components/CategoryBar.svelte";
    import SearchBar from "$lib/components/SearchBar.svelte";
    // import { books } from "$lib/stores/book";

    import { onMount } from "svelte";
    import { client } from "$lib/client";
    import { GetBookCover } from "$lib/graphql/query";

    let book_list = [];

    onMount(async () => {
        const { books } = await client.request(GetBookCover, {});
        book_list = books;
    });
</script>

<div class="px-6 pt-4">
    <SearchBar bookslist={book_list} />
</div>
<CategoryBar />
