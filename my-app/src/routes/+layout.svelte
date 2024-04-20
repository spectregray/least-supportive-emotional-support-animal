<script>
	import Input from './Input.svelte';
	import './styles.css';
	import { messages, loading } from './stores.js';

	let msgsVal = [
		{
			id: 1,
			gpt: false,
			content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		},
		{
			id: 2,
			gpt: true,
			content: "Sucks to suck huh.",
			image: "https://pbs.twimg.com/media/EAmr-PAWsAEoiWR.jpg"
		}
	];

	msgsVal.forEach((x) => {
		messages.update((n) => {
			n.unshift(x)
			return n
		})
	})

	function newMessage(e) {
		messages.update((n) => {
			n.unshift({
				id: n.length + 1,
				content: e.detail,
				gpt: false,
			})
			return n
		})
		loading.set(true);
		setTimeout(() => {
			loading.set(false)
		}, 5000);
	}
	
</script>

<div class="app">
	<div class="main">
		<slot />
	</div>
	<div class="footer">
		<Input on:message={newMessage} />
	</div>
</div>
<style>
	.app {
		display: flex;
		flex-direction: column;
		height: 100vh;
	}

	.main {
		flex: 1 1 auto;
		max-width: 100vw;
		position: relative;
	}

	.footer {
		display: flex;
		padding: 15px;
	}
</style>
