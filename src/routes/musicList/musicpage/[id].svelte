<script>
    import { page } from "$app/stores";
    import BookPageHeader from "$lib/components/BookPageHeader.svelte";
    import AudioPlayer from "$lib/components/musicComps/AudioPlayer.svelte";
    import { music } from "$lib/stores/music";
    import { onMount } from "svelte";

    let song = {};
    onMount(() => {
        var temp = $page.params.id;
        song = $music[temp];
        console.log($music);
    });
</script>

<div class="pt-8" />
<BookPageHeader title="" />
<AudioPlayer {song} />
<div class="pb-24"/>