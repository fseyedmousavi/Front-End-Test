<script>
    import BookIcon from "$lib/icons/BottomBarIcons/BookIcon.svelte";
    import HeadphoneIcon from "$lib/icons/BottomBarIcons/HeadphoneIcon.svelte";

    import HomeIcon from "$lib/icons/BottomBarIcons/HomeIcon.svelte";
    import ShopIcon from "$lib/icons/BottomBarIcons/ShopIcon.svelte";
    import UserIcon from "$lib/icons/BottomBarIcons/UserIcon.svelte";
</script>

<div
    class="items-center align-middle grid grid-cols-5 px-8 py-8 rounded-t-3xl bg-white"
>
    <div class="text-primary">
        <HomeIcon />
    </div>
    <div class="text-base-200">
        <BookIcon />
    </div>
    <div class="text-base-200">
        <ShopIcon />
    </div>
    <div class="text-base-200">
        <HeadphoneIcon />
    </div>
    <div class="text-base-200">
        <UserIcon />
    </div>
</div>
