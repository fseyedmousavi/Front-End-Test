<script>
    import { server_url } from "$lib/constant";

    export let book = {};
</script>

<div class="p-2">
    <a href="{server_url}/bookpage/{book.id}" sveltekit:prefetch>
        <img
            src={book.img}
            alt={book.title}
            class="h-40 w-28 rounded-xl shadow-xl"
        />
        <div class="pt-2 font-bold">{book.title}</div>
        <div class="text-base-300 text-sm">{book.author}</div>
    </a>
</div>
