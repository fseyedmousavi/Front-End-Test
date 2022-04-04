<script>
    import BookIcon from "$lib/icons/BottomBarIcons/BookIcon.svelte";
    import HeadphoneIcon from "$lib/icons/BottomBarIcons/HeadphoneIcon.svelte";
    import HomeIcon from "$lib/icons/BottomBarIcons/HomeIcon.svelte";
    import ShopIcon from "$lib/icons/BottomBarIcons/ShopIcon.svelte";
    import UserIcon from "$lib/icons/BottomBarIcons/UserIcon.svelte";
    import { server_url } from "$lib/constant";
    import { selectedTab } from "$lib/stores/stores";
    import { shoppingCart } from "$lib/stores/cart";

    // let $selectedTab = 0;
</script>

<div class="grid grid-cols-5 place-items-center py-5 rounded-t-3xl bg-white">
    <a href={server_url} sveltekit:prefetch on:click={() => ($selectedTab = 0)}>
        <div class={$selectedTab == 0 ? "text-primary" : "text-base-200"}>
            <HomeIcon />
        </div>
    </a>
    <a href={server_url} sveltekit:prefetch on:click={() => ($selectedTab = 1)}>
        <div class={$selectedTab == 1 ? "text-primary" : "text-base-200"}>
            <BookIcon />
        </div>
    </a>
    <a
        href="{server_url}/shoppingcart"
        sveltekit:prefetch
        on:click={() => ($selectedTab = 2)}
    >
        <div class="relative">
            {#if $shoppingCart.length > 0}
                <div
                    class="absolute -left-1 -top-3.5 p-1 bg-primary rounded-2xl text-center text-sm font-bold"
                >
                    {$shoppingCart.length}
                </div>
            {/if}
            <div class={$selectedTab == 2 ? "text-primary" : "text-base-200"}>
                <ShopIcon />
            </div>
        </div>
    </a>

    <a href={server_url} sveltekit:prefetch on:click={() => ($selectedTab = 3)}>
        <div class={$selectedTab == 3 ? "text-primary" : "text-base-200"}>
            <HeadphoneIcon />
        </div>
    </a>

    <a
        href="{server_url}/profile"
        sveltekit:prefetch
        on:click={() => ($selectedTab = 4)}
    >
        <div class={$selectedTab == 4 ? "text-primary" : "text-base-200"}>
            <UserIcon />
        </div>
    </a>
</div>
