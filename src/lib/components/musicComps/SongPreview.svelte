<script>
    import { server_url } from "$lib/constant";
    import DislikeIcon from "$lib/icons/DislikeIcon.svelte";
    import LikeIcon from "$lib/icons/LikeIcon.svelte";
    import { music } from "$lib/stores/music";

    export let song;
</script>

<div class="relative">
    <a
        href="{server_url}/musicList/musicpage/{song.id}"
        
        class="grid grid-cols-3 w-full bg-white shadow-2xl mt-4 rounded-3xl"
    >
        <img src={song.img} alt="" class="p-2 w-24 rounded-full" />
        <div class="col-span-2 py-3">
            <div class="text-lg font-bold">{song.title}</div>
            <div class="text-base-300 text-sm">{song.songer}</div>
        </div>
    </a>
    <div
        class="text-error absolute right-3 bottom-3"
        on:click={() => {
            music.like(song.id);
        }}
    >
        {#if song.liked}
            <LikeIcon />
        {:else}
            <DislikeIcon />
        {/if}
    </div>
</div>
