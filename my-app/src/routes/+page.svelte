<script>
	import Button from '$lib/components/Button.svelte';
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="Least Supportive Emotional Support Animal" content="Home" />
</svelte:head>

<section>
	<h1>
		<div class="welcome">
			least supportive <br> emotional support <br> animal
		</div>
	</h1>
	
	<img src="/favicon.png" alt="chat box" />

	<h1> talk to an unlicensed therapist right meow </h1>

	<Button variant="primary" size="large" aria-current={$page.url.pathname === '/chat' ? 'page' : undefined}>
		<a href="/chat">enter chat</a>
	</Button>

</section>

<style>

	a{
		text-decoration: none;
		color: white;
	}

	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		height: 100px;
		justify-content: center;
		animation: title-animate 5s infinite;
		/* padding: 0 0 calc(100% * 495 / 2048) 0;
		background-image: url('$lib/images/chat-box.png');
		background-size: contain;
		background-repeat: no-repeat; */
	}

	@keyframes title-animate {
		15% {
				font-size: 50px; 
  				transform: rotate(-10deg);
			}
	}
</style>
