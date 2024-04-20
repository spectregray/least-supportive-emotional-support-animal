<script>
	import Input from './Input.svelte';
	import '../styles.css';
	import { messages, loading } from './stores';
	import bertrand from '$lib/images/bertrand.gif';
	import norman from '$lib/images/norman.gif';
	import jimmy from '$lib/images/jimmy.gif';
	import harold from '$lib/images/harold.gif';
	const apiKey = import.meta.env.VITE_OPENAPI;
	import OpenAI from "openai";
    const openai = new OpenAI({ apiKey, dangerouslyAllowBrowser: true });

	// let msgsVal = [
	// 	{
	// 		id: 1,
	// 		gpt: false,
	// 		content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
	// 	},
	// 	{
	// 		id: 2,
	// 		gpt: true,
	// 		content: "Sucks to suck huh.",
	// 		image: "https://pbs.twimg.com/media/EAmr-PAWsAEoiWR.jpg"
	// 	}
	// ];

	// msgsVal.forEach((x) => {
	// 	messages.update((n) => {
	// 		n.unshift(x)
	// 		return n
	// 	})
	// })

	async function generateText(q) {
        const completion = await openai.chat.completions.create({
            messages: [
            {
                role: "system",
                content: `You are a talking cat. Your responses start with "meow meow" and respond in a Gen-Z tone. When you want to use "lmao", use "lmeow" instead. Don't use any capitalization. Express that you don't care at all without explicitly saying you do not care. Complain that the user is annoying, etc.`
            },
            {
                role: "user",
                content: q
            }
            ],
            model: "gpt-3.5-turbo"
        });
        const res = completion.choices[0].message.content;
        return res;
    }

	async function newMessage(e) {
		messages.update((n) => {
			n.unshift({
				id: n.length + 1,
				content: e.detail,
				gpt: false,
				therapist: therapist[0],
			})
			return n
		})
		loading.set(true);
		const response = await generateText(e.detail);
		loading.set(false)	
		messages.update((n) => {
			n.unshift({
				id: n.length + 1,
				content: response,
				gpt: true,
			})
			return n
		})	
	}
	let texts2 = [['harold', harold], ['bertrand', bertrand], ['jimmy', jimmy], ['norman', norman]]
  	let therapist = texts2[Math.floor(Math.random() * texts2.length)]; 
	
</script>

<div class="app">
	<div class="header">
		<div class="circle">
			<img src={therapist[1]} alt="cat pic" />
		</div>
		<h2>You are talking to</h2>
		<h1>{therapist[0].toUpperCase()}</h1>
	</div>
	<div class="main">
		<slot />
	</div>
	<div class="footer">
		<Input on:message={newMessage} />
	</div>
	<footer>
		<p>we are not held liable for any advice given or lack thereof</p>
	</footer>
</div>
<style>
	h1 {
		margin-top: 5px;
		margin-bottom: 5px;
	}
	h2 {
		font-size: 20px;
		margin: 5px 0 0 0;
	}
	.header {
		margin-top: 10px;
		display: flex;
		flex-direction: column;
		align-items: center;
		align-self: center;
	}
	.app {
		display: flex;
		flex-direction: column;
		height: 100vh;
	}

	.main {
		flex: 1 1 auto;
		max-width: 90vw;
		position: relative;
		justify-content: center;
		align-items: center;
	}

	.footer {
		display: flex;
		padding: 15px;
		max-width: 90vw;
	}
	.circle {
		border-radius: 50%;
		width: 100px;
		height: 100px;
		background-color: #f0f0f0;
		display: flex;
		justify-content: center;
		align-items: center;
		overflow: hidden;
	}
	img {
		width: 100%;
		height: 100%;
	}
</style>
