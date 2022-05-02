<script>
	import DislikeIcon from "$lib/icons/DislikeIcon.svelte";
	import Forward10Icon from "$lib/icons/Forward10Icon.svelte";
	import LikeIcon from "$lib/icons/LikeIcon.svelte";
	import PausedIcon from "$lib/icons/PausedIcon.svelte";
	import MuteIcon from "$lib/icons/MuteIcon.svelte";
	import PlayIcon from "$lib/icons/PlayIcon.svelte";
	import Replay10Icon from "$lib/icons/Replay10Icon.svelte";
	import TrackNextIcon from "$lib/icons/TrackNextIcon.svelte";
	import TrackPrevIcon from "$lib/icons/TrackPrevIcon.svelte";
	import { music } from "$lib/stores/music";
	import VolumeDownIcon from "$lib/icons/VolumeDownIcon.svelte";
	import VolumeUpIcon from "$lib/icons/VolumeUpIcon.svelte";
    import { server_url } from "$lib/constant";

	export let song = {};

	let currentTime = 0;
	let paused = true;
	let duration;
	let volume = 0.5;

	const format = (number) => {
		const minutes = Math.floor(number / 60);
		const secs = Math.floor(number % 60);

		return `${minutes
			.toString()
			.padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
	};

	function m() {
		let temp = (song.id + 1) % $music.length;
		location.replace(`${server_url}/musicList/musicpage/${temp}`);
	}
</script>

<section class="px-6 py-4">
	<img
		src={song.img}
		class="w-60 h-60 mx-auto rounded-3xl shadow-2xl"
		alt={song.title}
	/>

	<div class="relative">
		<div class="text-2xl font-bold pt-12">{song.title}</div>
		<div class="text-base-300">{song.songer}</div>
		<div
			class="text-error absolute right-0 top-16"
			on:click={() => (song.liked = !song.liked)}
		>
			{#if !song.liked}
				<DislikeIcon />
			{:else}
				<LikeIcon />
			{/if}
		</div>
	</div>

	{#key song.id}
	<audio bind:paused bind:currentTime bind:duration bind:volume>
		<source src={song.src} type="audio/ogg" />
	</audio>
	{/key}

	<div class="pt-10">
		<input
			type="range"
			min={50}
			max={duration}
			step={duration / 200}
			value={currentTime}
			class="range range-primary"
		/>
	</div>

	<div class="grid grid-cols-2 font-bold">
		<div class="text-left">{format(currentTime)}</div>
		<div class="text-right">{format(duration)}</div>
	</div>

	<div class="pt-4 grid grid-cols-5 place-items-center">
		<div
			class="text-secondary mr-10"
			on:click={() => (currentTime = currentTime - 10)}
		>
			<Replay10Icon />
		</div>
		<div
			class="text-secondary mr-10"
			on:click={async () =>
				(song = await $music[(song.id - 1) % $music.length])}
		>
			<TrackPrevIcon />
		</div>
		<div
			class="text-primary rounded-full shadow-2xl w-16 h-16 mx-auto"
			on:click={() => (paused = !paused)}
		>
			{#if paused}
				<PlayIcon />
			{:else}
				<PausedIcon />
			{/if}
		</div>
		<div
			class="text-secondary ml-10"
			on:click={m}
		>
			<TrackNextIcon />
		</div>
		<div
			class="text-secondary ml-10"
			on:click={() => (currentTime = currentTime + 10)}
		>
			<Forward10Icon />
		</div>
	</div>
	<div class="flex w-32 items-center text-secondary">
		{#if volume > 0 && volume <= 0.5}
			<VolumeDownIcon />
			{:else if volume == 0}
			<MuteIcon />
		{:else}
			<VolumeUpIcon />
		{/if}
		<input
			type="range"
			min={0}
			max={1}
			value={volume}
			step={0.01}
			class="range range-xs range-secondary"
		/>
	</div>
</section>
