<script lang="ts">
	import '$assets/styles/globals.css';
	import '$assets/styles/tailwind.css';
	import { mdiChevronLeft, mdiChevronRight, mdiVideoOutline } from '@mdi/js';
	import Icon from 'mdi-svelte';
</script>

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
