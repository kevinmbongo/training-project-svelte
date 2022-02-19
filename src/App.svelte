<script lang="ts">
	import '$assets/styles/globals.css';
	import '$assets/styles/tailwind.css';
	import {
		mdiAppleIcloud,
		mdiCamera,
		mdiChevronLeft,
		mdiChevronRight,
		mdiVideoOutline,
		mdiVoicemail
	} from '@mdi/js';
	import Icon from 'mdi-svelte';
</script>

<article class="flex flex-col h-screen">
	<header class="bg-gray-700 flex justify-between px-5 py-3 items-center ">
		<div>
			<Icon path={mdiChevronLeft} color="#57A6FF" size="1.5" />
		</div>

		<div class="flex flex-col justify-center items-center">
			<div
				class="rounded-full  text-white bg-slate-300 w-10 h-10 flex items-center justify-center font-bold"
			>
				J
			</div>

			<div class="flex justify-center items-center text-sm text-white mt-2">
				<span>JB</span>
				<Icon path={mdiChevronRight} color="#57A6FF" size="0.9" />
			</div>
		</div>
		<div>
			<Icon path={mdiVideoOutline} color="#57A6FF" size="1.5" />
		</div>
	</header>

	<section class="flex-1 flex flex-col items-start px-8 py-5 ">
		<div class="bg-blue-500 rounded-xl p-3 flex justify-start " style="max-width: 70%">
			<p class="text-white">lo</p>
		</div>

		<div class="bg-gray-600 rounded-xl p-3 self-end my-5" style="max-width: 70%">
			<p class="text-white">lo</p>
		</div>
	</section>

	<footer class="bg-gray-900 flex">
		<div class="flex justify-between mx-3 my-2">
			<div class="mx-1">
				<Icon path={mdiCamera} color="#CBD5E1" size="1.5" />
			</div>
			<div class="mx-1">
				<Icon path={mdiAppleIcloud} color="#CBD5E1" size="1.5" />
			</div>
		</div>
		<div class="w-full relative flex items-center">
			<input type="text" class="border border-red-900 rounded-xl bg-gray-900 w-full" />
			<div class="absolute bottom-4 right-5">
				<Icon path={mdiVoicemail} color="#CBD5E1" size="0.7" />
			</div>
		</div>
		<nav />
	</footer>
</article>
