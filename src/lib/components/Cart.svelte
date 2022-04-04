<script>
    import DeleteIcon from "$lib/icons/DeleteIcon.svelte";
    import { shoppingCart } from "$lib/stores/cart";

    export let book = {};
</script>

<div class="grid grid-cols-3 mx-6 mb-2 py-2 bg-white rounded-2xl">
    <img src={book.img} alt="" class="h-36 w-24 rounded-2xl ml-2" />
    <div class="col-span-2 pl-5 pr-2 py-3">
        <div class="font-bold text-xl">{book.title}</div>
        <div class="text-base-300 text-sm pt-2">{book.author}</div>
        <div class="flex pt-7 items-center">
            <div class="text-base-200">price: &nbsp;</div>
            <div class="text-primary font-bold">${book.price}</div>
            <div
                on:click={() => shoppingCart.decrement(book.id)}
                class="btn btn-ghost text-error mx-auto"
            >
                <DeleteIcon />
            </div>
        </div>
    </div>
</div>
