<script lang="ts">
	import '$assets/styles/globals.css';
	import '$assets/styles/tailwind.css';
	import MessagesContainer from '$components/core/MessagesContainer.svelte';
	import TheFooter from '$components/core/TheFooter.svelte';
	import TheHeader from '$components/core/TheHeader.svelte';
</script>

<article class="flex flex-col h-screen">
	<TheHeader />

	<MessagesContainer />

	<TheFooter />
</article>
