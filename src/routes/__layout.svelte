<script>
    import { page } from "$app/stores";
    import BottomBar from "$lib/components/BottomBar.svelte";
    // import { shoppingCart } from "$lib/stores/cart";
    import { music } from "$lib/stores/music";
    import { selectedTab } from "$lib/stores/stores";
    import { onMount } from "svelte";
    import "../app.css";

    onMount(() => {
        const items = localStorage.getItem("cart");
        
        const musics = localStorage.getItem("musics");
        if (musics !== "undefined") music.fill(JSON.parse(items));
    });

    switch ($page.routeId) {
        case "profile":
            $selectedTab = 4;
            break;
        case "musicList":
            $selectedTab = 3;
            break;
        case "shoppingcart":
            $selectedTab = 2;
            break;
        default:
            $selectedTab = 0;
            break;
    }
</script>

{#if $page.routeId != "musicList/musicpage/[id]" && $page.routeId != "bookpage/[id]"}
    <div class="pb-28">
        <slot />
    </div>
    <div class="bg-white">
        <div class="fixed bottom-0 left-0 right-0 z-10">
            <BottomBar />
        </div>
    </div>
{/if}

{#if $page.routeId == "bookpage/[id]"}
    <div class="bg-gradient-to-b from-green-200 to-white w-full">
        <div class="pt-6" />
        <slot />
    </div>
{/if}

{#if $page.routeId == "musicList/musicpage/[id]"}
    <div class="bg-white">
        <slot />
    </div>
{/if}
