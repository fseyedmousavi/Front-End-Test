<script>
    import SongPreview from "$lib/components/MusicComps/SongPreview.svelte";
    import TabHeader from "$lib/components/TabHeader.svelte";
    import { music } from "$lib/stores/music";
</script>

<TabHeader title="Music List" />

<div class="pt-24" />
<div class="px-6">
    {#each $music as item}
        <SongPreview song={item} />
    {/each}
</div>
