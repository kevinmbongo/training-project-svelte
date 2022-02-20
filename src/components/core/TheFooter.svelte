<script lang="ts">
	import '$assets/styles/globals.css';
	import '$assets/styles/tailwind.css';
	import UserInput from '$components/commons/UserInput.svelte';
	import { mdiAppleIcloud, mdiCamera } from '@mdi/js';
	import Icon from 'mdi-svelte';
</script>

<footer class="bg-gray-900 flex mx-2">
	<div class="flex justify-between mx-3 my-2">
		<div class="mx-1">
			<Icon path={mdiCamera} color="#CBD5E1" size="1.5" />
		</div>
		<div class="mx-1">
			<Icon path={mdiAppleIcloud} color="#CBD5E1" size="1.5" />
		</div>
	</div>
	<UserInput />
	<nav />
</footer>
