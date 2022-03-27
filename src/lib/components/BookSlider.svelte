<script>
    import { Splide, SplideSlide } from "@splidejs/svelte-splide";
    import BookItem from "./BookItem.svelte";
    import BookSliderHeader from "./BookSliderHeader.svelte";

    let books = [
        {
            title: "Girl",
            author: "Edna O'Brien",
            img: "girl.jpg",
        },
        {
            title: "Hamnet",
            author: "Maggle O'Farrell",
            img: "hamnet.jpg",
        },
        {
            title: "The Dute",
            author: "Ann Patchetta",
            img: "",
        },
    ];
</script>

<BookSliderHeader title="New Arrivals" />

<div class="pl-6 py-2 grid grid-cols-2">
    <BookItem book={books[0]} />
    <BookItem book={books[1]} />
</div>

<BookSliderHeader title="Best Ever Book Lists" />
<div class="px-6 py-2">
    <img src="BestList.jpg" alt="" class="w-full rounded-xl" />
</div>
