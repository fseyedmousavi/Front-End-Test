<script>
    import BookIcon from "$lib/icons/BottomBarIcons/BookIcon.svelte";
    import HeadphoneIcon from "$lib/icons/BottomBarIcons/HeadphoneIcon.svelte";

    import HomeIcon from "$lib/icons/BottomBarIcons/HomeIcon.svelte";
    import ShopIcon from "$lib/icons/BottomBarIcons/ShopIcon.svelte";
    import UserIcon from "$lib/icons/BottomBarIcons/UserIcon.svelte";
    import { server_url } from "$lib/constant";
</script>

<div class="grid grid-cols-5 place-items-center py-5 rounded-t-3xl bg-white">
    <a href="{server_url}" class="text-primary object-center">
        <HomeIcon />
    </a>
    <a href="{server_url}\bookpage" sveltekit:prefetch>
        <div class="text-base-200">
            <BookIcon />
        </div>
    </a>

    <a href="" sveltekit:prefetch
        ><div class="text-base-200">
            <ShopIcon />
        </div>
    </a>

    <a href="" sveltekit:prefetch>
        <div class="text-base-200">
            <HeadphoneIcon />
        </div>
    </a>

    <a href="" sveltekit:prefetch>
        <div class="text-base-200">
            <UserIcon />
        </div>
    </a>
</div>
