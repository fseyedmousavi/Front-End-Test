<script>
    import SearchIcon from "$lib/icons/SearchIcon.svelte";
</script>

<div class="relative pb-2">
    <input
        type="search"
        placeholder="Search for Books..."
        class="w-full rounded-2xl h-12 shadow-md pl-14 text-sm"
    />
    <div class="absolute left-5 top-3 text-primary">
        <SearchIcon />
    </div>
</div>
