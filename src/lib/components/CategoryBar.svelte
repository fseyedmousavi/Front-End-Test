<script>
import { books } from "$lib/stores/book";
import Cart from "./Cart.svelte";

</script>
<div class="tabs pt-3 scroll-smooth ">
    <div class="tab tab-bordered">All</div>
    <div class="tab tab-bordered tab-active">New Arrivals</div>
    <div class="tab tab-bordered">Best Ever</div>
</div>

<div class="px-6 pt-5">
{#each $books as item}
    <Cart book={item} isCart={false}/>
{/each}</div>