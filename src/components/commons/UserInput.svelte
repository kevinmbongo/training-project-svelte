<script>
	import { mdiVoicemail } from '@mdi/js';
	import Icon from 'mdi-svelte';
</script>

<div class="w-full relative flex items-center">
	<input
		type="text"
		class="border border-slate-300 rounded-xl bg-gray-900 w-full text-white px-3 py-1"
	/>
	<div class="absolute bottom-4 right-5">
		<Icon path={mdiVoicemail} color="#CBD5E1" size="0.7" />
	</div>
</div>
