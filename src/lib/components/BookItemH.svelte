<script>
    export let book = {};

</script>

<div class="relative">
    <div class="absolute top-0 left-0 z-10 ml-6 mt-3">
        <img src={book.img} alt="" class="h-40 w-32 rounded-2xl shadow-2xl"/>
    </div>

    <div
        class="absolute left-0 top-0 w-72 ml-12 mt-6 mr-6 py-4 pl-32 bg-white rounded-2xl "
    >
        <div class="font-bold text-3xl">{book.title}</div>
        <div class="text-base-200 text-sm py-3">{book.author}</div>
        <div class="text-sm text-primary font-bold drop-shadow-2xl">
            Last read {book.last_read}
        </div>
        <div class="flex items-center gap-4 pt-5 drop-shadow-2xl">
            <progress
                class="progress progress-primary w-20 "
                value={book.remain}
                max="100"
            />
            <div class="text-primary text-sm font-bold">{book.remain}%</div>
        </div>
    </div>
</div>
