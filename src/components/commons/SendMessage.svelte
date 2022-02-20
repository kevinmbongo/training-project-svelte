<script lang="ts">
	export let text: string;
	export let isReceivedMessage: boolean;
</script>

<div
	class="{isReceivedMessage ? 'received' : 'send'} rounded-xl p-3 flex my-1 "
	style="max-width: 70%"
>
	<p class="text-white">{text}</p>
</div>

<style>
	.received {
		@apply bg-gray-600 justify-start;
	}

	.send {
		@apply bg-blue-500 self-end;
	}
</style>
