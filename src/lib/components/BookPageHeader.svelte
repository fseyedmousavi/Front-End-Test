<script>
import { server_url } from "$lib/constant";

    import BackIcon from "$lib/icons/BackIcon.svelte";
</script>

<div class="grid grid-cols-3 items-center px-6 pb-3">
    <a href="{server_url}">
        <BackIcon />
    </a>
    <div class="font-bold text-lg text-center">
        Detail Book
    </div>
    <div class="text-3xl text-right mb-4 font-bold">
        ...
    </div>
</div>
