<script>
  import { books } from "$lib/stores/stores";
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
  {#each books as book}
    <SplideSlide>
      <BookItem bind:book />
    </SplideSlide>
  {/each}
</Splide>
<!-- <div class="pl-6 py-2 grid grid-cols-2">
    
    <BookItem book={books[1]} />
</div> -->
