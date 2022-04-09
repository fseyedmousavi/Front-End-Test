<script>
    import BackIcon from "$lib/icons/BackIcon.svelte";

    export let title = "";
</script>

<div class="grid grid-cols-3 items-center px-6 pb-3">
    <div on:click={() => history.back()}>
        <BackIcon />
    </div>
    <div class="font-bold text-lg text-center">{title}</div>
    <div class="text-3xl text-right mb-4 font-bold">...</div>
</div>
