<script>
    import { client } from "$lib/client";
    import { server_url } from "$lib/constant";
    import { DeleteBookFromCart } from "$lib/graphql/mutation";
    import DeleteIcon from "$lib/icons/DeleteIcon.svelte";
    // import { shoppingCart } from "$lib/stores/cart";

    export let book = {};
    var id = book.id;

    async function removeFromShoppingCart() {
        await client.request(DeleteBookFromCart, {
            user_id: "d9d5ced4-d25f-46b5-875f-ce84d7dc8bae",
            book_id: id,
        });
        
    }
</script>

<div class="relative">
    <a href="{server_url}/bookpage/{book.id}">
        <div class="grid grid-cols-3 mb-2 py-2 bg-white rounded-2xl">
            <img src={book.img} alt="" class="h-36 w-24 rounded-2xl ml-2" />
            <div class="col-span-2 pl-5 pr-2 py-3">
                <div class="font-bold text-xl">{book.title}</div>
                <div class="text-base-300 text-sm pt-2">{book.author}</div>
                <div class="flex pt-7 items-center">
                    <div class="text-base-200">price: &nbsp;</div>
                    <div class="text-primary font-bold">${book.price}</div>
                </div>
            </div>
        </div>
    </a>
    <div
        on:click={removeFromShoppingCart}
        class="absolute bottom-4 right-4 shadow-md p-2 rounded-md"
    >
        <div class="text-error">
            <DeleteIcon />
        </div>
    </div>
</div>
