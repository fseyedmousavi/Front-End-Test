<script>
    export let text = "";
    export let image = "";
    export let score_needed = 0;
    export let score;
    export let odd = true;
</script>

<div class="w-80 shadow-md relative rounded-md mb-4">
    <img src={image} alt="" class="rounded-md" />
    {#if odd}
        <div class="absolute top-4 right-4 text-3xl font-bold text-secondary">
            {text}
        </div>
        <div class="absolute bottom-16 right-3 text-md font-bold">
            {score_needed} : امتیاز لازم
        </div>
        <div
            class="btn absolute bottom-2 right-2 btn-secondary"
            on:click={() => {
                score = score - score_needed;
            }}
        >
            دریافت
        </div>
    {:else}
        <div class="absolute top-4 left-4 text-3xl font-bold text-secondary">
            {text}
        </div>
        <div class="absolute bottom-16 left-3 text-md font-bold">
            {score_needed} : امتیاز لازم
        </div>
        <div
            class="btn absolute bottom-2 left-2 btn-secondary"
            on:click={() => {
                score = score - score_needed;
            }}
        >
            دریافت
        </div>{/if}
</div>
