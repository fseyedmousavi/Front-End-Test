<script>
    export let book = {};
</script>

<div
    class="border-2 border-base-100 m-3 rounded-2xl grid grid-cols-3 items-center"
>
    <div class="font-bold text-lg px-4 py-5 ">Reading</div>
    <div class="flex col-span-2 justify-end items-center pr-2">
        {#if book.readerCt <= 0}
            <div class="text-sm text-base-300">no one yet</div>
        {/if}
        <div class="avatar -space-x-2">
            {#if book.readerCt > 0}
                <div class="avatar">
                    <div class="w-12">
                        <img src="../user1.png" alt="" />
                    </div>
                </div>
            {/if}
            {#if book.readerCt > 1}
                <div class="avatar">
                    <div class="w-12">
                        <img src="../user2.png" alt="" />
                    </div>
                </div>
            {/if}
            {#if book.readerCt > 2}
                <div class="avatar">
                    <div class="w-12">
                        <img src="../user3.png" alt="" />
                    </div>
                </div>
            {/if}
        </div>
        {#if book.readerCt > 3}
            <div class="px-2 font-bold text-lg">
                +{book.readerCt - 3}
            </div>
        {/if}
    </div>
</div>
