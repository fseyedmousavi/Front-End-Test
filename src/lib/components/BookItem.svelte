<script>
    export let book = {};
</script>

<div>
    <img
        src={book.img}
        alt={book.title}
        class="h-44 w-32 rounded-xl shadow-xl"
    />
    <div class="pt-2 font-bold">{book.title}</div>
    <div class="text-base-300 text-sm">{book.author}</div>
</div>
