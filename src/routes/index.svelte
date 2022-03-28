<script>
    import "@splidejs/splide/dist/css/themes/splide-default.min.css";
    import BookSlider from "$lib/components/BookSlider.svelte";
    import BookSliderHeader from "$lib/components/BookSliderHeader.svelte";
    import HomeGreeting from "$lib/components/HomeGreeting.svelte";
    import SearchBar from "$lib/components/SearchBar.svelte";
</script>

<div class="pt-5" />

<div class="px-6">
    <HomeGreeting />
    <SearchBar />
</div>

<BookSlider />

<BookSliderHeader title="Best Ever Book Lists" />
<div class="px-6 py-2">
    <img src="BestList.jpg" alt="" class="w-full h-32 rounded-xl" />
</div>
