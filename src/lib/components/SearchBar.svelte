<script>
    import { server_url } from "$lib/constant";
    import SearchIcon from "$lib/icons/SearchIcon.svelte";
    import { books } from "$lib/stores/stores";

    let searchResult = [];
    let search = "";

    function searchBook() {
        searchResult = [];
        books.forEach((b) => {
            var temp = b.title.toLowerCase();
            if (temp.includes(search)) {
                searchResult.push(b);
            }
        });
    }
</script>

<div class="relative pb-2">
    <input
        bind:value={search}
        on:input={() => {
            searchBook();
        }}
        type="search"
        placeholder="Search for Books..."
        class="w-full rounded-2xl h-12 shadow-md pl-14 pr-4 text-sm"
    />
    <div class="absolute left-5 top-3 text-primary">
        <SearchIcon />
    </div>
    {#if search != "" && searchResult.length > 0}
        <div class="absolute top-12 left-0 dropdown dropdown-open w-full">
            <ul
                tabindex="0"
                class="dropdown-content menu p-2 shadow bg-white rounded-box w-full"
            >
                {#each searchResult as resu}
                    <li>
                        <a href="{server_url}/bookpage/{resu.id}">{resu.title}</a>
                    </li>
                {/each}
            </ul>
        </div>
    {/if}
</div>
