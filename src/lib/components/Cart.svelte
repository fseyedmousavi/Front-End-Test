<script>
    import { server_url } from "$lib/constant";
    import DeleteIcon from "$lib/icons/DeleteIcon.svelte";
    import ShoppingCartIcon from "$lib/icons/ShoppingCartIcon.svelte";
    import { shoppingCart } from "$lib/stores/cart";

    export let book = {};
    export let isCart = false;

    $: isInCart = () => {
        for (let i = 0; i < $shoppingCart.length; i++) {
            if ($shoppingCart[i].id === book.id) {
                return true;
            }
        }
        return false;
    };

    function addToShoppingCart() {
        if (!isInCart()) {
            shoppingCart.increment(book);
        } else {
            shoppingCart.decrement(book.id);
        }
        console.log(isCart);
        console.log(isInCart);
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
    <div on:click={addToShoppingCart} class="absolute bottom-4 right-4 shadow-md p-2 rounded-md">
        {#if isCart || isInCart()}
            <div class="text-error">
                <DeleteIcon />
            </div>
        {:else if !isInCart()}
            <div class="text-secondary">
                <ShoppingCartIcon />
            </div>
        {/if}
    </div>
</div>
