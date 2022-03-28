<script>
  import { Splide, SplideSlide } from "@splidejs/svelte-splide";
  import BookItem from "./BookItem.svelte";
  import BookSliderHeader from "./BookSliderHeader.svelte";

  let books = [
    {
      id: 0,
      title: "Girl",
      author: "Edna O'Brien",
      img: "girl.jpg",
    },
    {
      id: 1,
      title: "Hamnet",
      author: "Maggle O'Farrell",
      img: "hamnet.jpg",
    },
    {
      id: 2,
      title: "Girl",
      author: "Edna O'Brien",
      img: "girl.jpg",
    },
    {
      id: 3,
      title: "Hamnet",
      author: "Maggle O'Farrell",
      img: "hamnet.jpg",
    },
  ];
</script>

<BookSliderHeader title="New Arrivals" />

<Splide
  options={{
    drag: "free",
    lazyLoad: "nearby",
    autoWidth: true,
    gap: "0.5em",
    pagination: false,
    padding: "0.6rem",
    arrows: false,
  }}
>
  {#each books as book}
    <SplideSlide>
      <BookItem bind:book />
    </SplideSlide>
  {/each}
</Splide>
<!-- <div class="pl-6 py-2 grid grid-cols-2">
    
    <BookItem book={books[1]} />
</div> -->
