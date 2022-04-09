<script>
  import { books } from "$lib/stores/book";
  import { Splide, SplideSlide } from "@splidejs/svelte-splide";
  import BookItem from "./BookItem.svelte";
  import BookSliderHeader from "./BookSliderHeader.svelte";
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
  {#each $books as book}
    <SplideSlide>
      <BookItem book={book} />
    </SplideSlide>
  {/each}
</Splide>