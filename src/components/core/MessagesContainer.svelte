<script lang="ts">
	import SendMessage from '$components/commons/SendMessage.svelte';
	import { currentUser } from 'src/store/auth';
	import { messages } from 'src/store/messageDataBase';
	import type { Message } from 'src/types';

	export let messagesList: Array<Message> = [];

	messages.subscribe((messages) => {
		messagesList = messages;
	});
</script>

<section class="flex-1 flex flex-col items-start px-8 py-5 ">
	{#each messagesList as message}
		<SendMessage
			text={message.text}
			isReceivedMessage={$currentUser.id === message.recipient.id}
		/>
	{/each}
</section>
