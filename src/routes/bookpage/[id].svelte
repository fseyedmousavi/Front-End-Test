<script>
    import { page } from "$app/stores";
    import BookPageHeader from "$lib/components/BookPageHeader.svelte";
    import RatingComp from "$lib/components/RatingComp.svelte";
    import ReadingBorder from "$lib/components/ReadingBorder.svelte";
    import { shoppingCart } from "$lib/stores/cart";
    import { books } from "$lib/stores/stores";
    import { onMount } from "svelte";

    let book = {};
    onMount(() => {
        var temp = $page.params.id;
        book = books[temp];
    });

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
    }
</script>

<BookPageHeader />

<img
    src={book.img}
    alt={book.title}
    class="h-44 w-32 rounded-xl shadow-xl mx-auto"
/>
<div class="text-center font-bold text-4xl pt-2">{book.title}</div>
<div class="text-center font-bold py-2">{book.author}</div>
<div
    class="px-4 py-1 h-40 text-center text-sm text-transparent bg-clip-text bg-gradient-to-b from-base-300 to-white"
>
    {book.text}
</div>

<ReadingBorder {book} />

<RatingComp rate={book.rate} />

<div on:click={addToShoppingCart} class="p-4">
    
    {#if !isInCart()}
        <div
            class="btn rounded-2xl btn-primary grid grid-cols-5 text-white font-bold text-2xl"
        >
            <div class="text-right col-span-2">BUY</div>
            <div>|</div>
            <div class="text-left col-span-2">${book.price}</div>
        </div>
    {:else}
        <div
            class="btn btn-outline btn-rounded-2xl btn-primary font-bold w-full"
        >
            Remove from Cart
        </div>
    {/if}
</div>
