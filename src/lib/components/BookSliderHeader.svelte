<script>
    import ForwardArrowIcon from "$lib/icons/ForwardArrowIcon.svelte";
    export let title = "";
</script>

<a href="" class="grid grid-cols-6 px-6 py-2 font-bold">
    <div class="text-lg col-span-4">{title}</div>
    <div class="col-span-2 flex items-center justify-end text-error">
        View all
        <ForwardArrowIcon />
    </div>
</a>
