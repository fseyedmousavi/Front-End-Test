<script>
    import BottomBar from "$lib/components/BottomBar.svelte";
    import "../app.css";
</script>

<div class="pb-28">
    <slot />
</div>

<div class="bg-white">
    <div class="fixed bottom-0 left-0 right-0 z-10">
        <BottomBar />
    </div>
</div>
