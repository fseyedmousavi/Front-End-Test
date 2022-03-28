<script>
    import BookPageHeader from "$lib/components/BookPageHeader.svelte";
    import RatingComp from "$lib/components/RatingComp.svelte";
    import ReadingBorder from "$lib/components/ReadingBorder.svelte";
    let book = {
        title: "Girl",
        author: "Edna O'Brien",
        rate: 4.7,
        price: 20.1,
        img: "../girl.jpg",
        readerCt: 6,
        text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    };
</script>

<BookPageHeader />

<img src={book.img} alt={book.title} class="h-44 w-32 rounded-xl shadow-xl mx-auto" />
<div class="text-center font-bold text-4xl pt-2">{book.title}</div>
<div class="text-center font-bold py-2">{book.author}</div>
<div
    class="px-4 py-1 h-40 text-center text-sm text-transparent bg-clip-text bg-gradient-to-b from-base-300 to-white"
>
    {book.text}
</div>

<ReadingBorder {book} />

<RatingComp rate={book.rate} />

<div
    class="btn rounded-2xl m-4 btn-primary grid grid-cols-5 text-white font-bold text-2xl"
>
    <div class="text-right col-span-2">BUY</div>
    <div>|</div>
    <div class="text-left col-span-2">${book.price}</div>
</div>
