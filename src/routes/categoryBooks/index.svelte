<script>
    import CategoryBar from "$lib/components/CategoryBar.svelte";
    import SearchBar from "$lib/components/SearchBar.svelte";
    import { books } from "$lib/stores/book";
</script>

<div class="px-6 pt-4">
    <SearchBar bookslist={$books} />
</div>
<CategoryBar />
