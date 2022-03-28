<script>
    import ShoppingCartIcon from "$lib/icons/ShoppingCartIcon.svelte";
    import StarIcon from "$lib/icons/StarIcon.svelte";

    export let rate = 0;
</script>

<div class="grid grid-cols-6 items-center px-4">
    <div class="text-left">
        <div class="text-primary font-bold text-2xl">{rate}</div>
        <div class="text-xs">Rating</div>
    </div>
    <div class="flex col-span-3">
        {#each [1, 2, 3, 4, 5] as no}
            {#if no < rate}
                <div class="text-yellow-500"><StarIcon /></div>
            {:else}
                <div class="text-base-100"><StarIcon /></div>
            {/if}
        {/each}
    </div>
    <button class="btn col-span-2 shadow-gray-500 shadow-lg btn-accent">
        <div class="text-primary"><ShoppingCartIcon/></div>
    </button>
</div>
