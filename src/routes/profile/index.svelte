<!-- <script>
    import BookItemH from "$lib/components/BookItemH.svelte";
    import BookSliderHeader from "$lib/components/BookSliderHeader.svelte";
    import Follow from "$lib/components/Follow.svelte";
    import LocationIcon from "$lib/icons/LocationIcon.svelte";

    let user = {
        name: "Diane Lane",
        follower: 188,
        reading: 29,
        location: "New York",
        books: [
            {
                title: "Girl",
                author: "Edna O'Brien",
                img: "../girl.jpg",
                last_read: "2020-3.30",
                remain: 82,
            },
        ],
    };
</script>

<div class="pt-8 bg-gradient-to-b from-white to-gray-200">
    <div class="grid grid-cols-4 items-center text-center">
        <Follow follow="Follower" count=" {user.follower} " />
        <div class="col-span-2 avatar mx-auto">
            <div
                class="w-24 rounded-full p-2 shadow-2xl ring ring-primary ring-offset-base-100 "
            >
                <img src="../user4.png" alt="" />
            </div>
        </div>
        <Follow follow="Reading" count=" {user.reading} " />
    </div>
    <div class="text-center py-6 font-bold text-2xl">{user.name}</div>
    <div class="justify-center gap-2 items-center flex text-base-300">
        <LocationIcon />
        {user.location}
    </div>
    <div
        class="bg-primary grid grid-cols-2 items-center m-4 rounded-2xl shadow-2xl"
    >
        <pre
            class="text-center font-bold text-3xl text-white drop-shadow-2xl">BOOKING
PRIME</pre>
        <img src="../girl_reading.png" alt="" />
    </div>
    <BookSliderHeader title="Continue Reading" />
    <BookItemH book={user.books[0]}/>
    <div class="pb-6"/>
</div> -->
<script>
    import DiscountCart from "$lib/components/Discount_Cart.svelte";
    import TabHeader from "$lib/components/TabHeader.svelte";

    let score = 2000;
</script>

<TabHeader title="باشگاه مشتریان"/>
<div class="" />
<div class="bg-white w-full pb-2 pt-24 mb-4 text-right px-8 text-xl text-primary font-bold">امتیاز شما: {score}</div>
<div class="grid px-6 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
    <DiscountCart image="free_delivery.jpg" text="ارسال رایگان" score_needed={500} score={score} odd={true}/>
    <DiscountCart image="bedding.jpg" text="تخفیف کالای خواب" score_needed={1200} score={score} odd={false}/>
    <DiscountCart image="gallery.jpg" text="تخفیف گوهرسرای" score_needed={2000} score={score} odd={true}/>
    <DiscountCart image="emdad.jpg" text="کمک به امدادسرای" score_needed={500} score={score} odd={false}/>
    <DiscountCart image="qoree.jpg" text="شانس قرعه کشی" score_needed={700} score={score} odd={true}/>
</div>
