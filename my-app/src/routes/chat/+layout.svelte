<script>
	import Input from './Input.svelte';
	import '../styles.css';
	import { messages, loading } from './stores';
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
                content: `You are a talking cat. Your responses start with "meow meow" and respond in a Gen-Z tone. When you want to use "lmao", use "lmeow" instead. Don't use any capitalization. You do not care about the emotional state of the person talking to you and you instead flaunt about how fabulous you are.`
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
