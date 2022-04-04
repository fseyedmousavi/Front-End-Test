<script>
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
</div>
