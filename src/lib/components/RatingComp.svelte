<script>
    import ShoppingCartIcon from "$lib/icons/ShoppingCartIcon.svelte";
    import { books } from "$lib/stores/book";

    export let book = {};
</script>

<div class="grid grid-cols-6 items-center px-4">
    <div class="text-center">
        <div class="text-primary font-bold text-2xl">{book.rate}</div>
        <div class="text-xs">Rating</div>
    </div>
    <div class="flex mx-auto col-span-3">
        <div class="rating rating-md rating-half col-span-3">
            {#each [0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5] as no}
                <input
                    type="radio"
                    name="rating-10"
                    class="bg-yellow-500 mask mask-star-2 {no % 1 == 0
                        ? 'mask-half-2'
                        : 'mask-half-1'}"
                    on:click={() => {
                        book.rate = no;
                        books.rate(book.id, no);
                    }}
                    checked={book.rate == no}
                />
            {/each}
        </div>
    </div>
    <button class="btn col-span-2 shadow-gray-500 shadow-lg btn-accent">
        <div class="text-primary"><ShoppingCartIcon /></div>
    </button>
</div>
