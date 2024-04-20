<script>
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
	import Button from '$lib/components/Button.svelte';
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="Least Supportive Emotional Support Animal" content="Home" />
</svelte:head>

<section>
	<h1>
		<span class="welcome">
			<picture>
				<source srcset={welcome} type="image/webp" />
				<img src={welcome_fallback} alt="Welcome" />
			</picture>
		</span>

	</h1>

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
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>
