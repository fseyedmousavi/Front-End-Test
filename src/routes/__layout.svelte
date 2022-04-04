<script>
    import { page } from "$app/stores";
    import BottomBar from "$lib/components/BottomBar.svelte";
    import { shoppingCart } from "$lib/stores/cart";
    import { selectedTab } from "$lib/stores/stores";
    import { onMount } from "svelte";
    import "../app.css";

    onMount(() => {
        const items = localStorage.getItem("books");
        if (items !== "undefined") shoppingCart.fill(JSON.parse(items));
    });

    switch ($page.routeId) {
        case "profile":
            $selectedTab = 4;
            break;
        case "shoppingcart":
            $selectedTab = 2;
            break;
        default:
            $selectedTab = 0;
            break;
    }
</script>

<div class="pb-28">
    <slot />
</div>

<div class="bg-white">
    <div class="fixed bottom-0 left-0 right-0 z-10">
        <BottomBar />
    </div>
</div>
