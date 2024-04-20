<script>
	import Message from './Message.svelte';
	import { messages } from './stores.js';

	let msgVal = [];
	const unsubscribe = messages.subscribe((value) => {
		msgVal = value;
	});
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="chat-scroll">
	<div class="c-inner">
		{#each msgVal as msg (msg.id)}
			<Message {...msg} />
		{/each}
	</div>
</div>

<style>
	.chat-scroll {
		position: absolute;
		height: 100%;
		max-width: 100vw;
		top: 0px;
		left: 0px;
		overflow-y: auto;
		display: flex;
		flex-flow: column-reverse;
	}

	.c-inner {
		margin: 20px;
		display: flex;
		flex-flow: column-reverse;
	}
</style>
