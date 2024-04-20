<script>
	import { loading } from './stores.js';
	let content = "";
	let shiftDown = false;
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	function shiftCheck(e) {
		if (e.keyCode === 16) {
        	shiftDown = true;
		}
		if (
			(e.keyCode === 13 && !shiftDown)
		) {
			e.preventDefault();
		}
	}

	function handleInput(e) {
		if (e.keyCode === 16) {
			shiftDown = false;
		}
		if (e.keyCode === 13 && !shiftDown && content.trim().length !== 0) {
			dispatch("message", content);
			content = "";
		}
	}
</script>
<div class={"bubble right" + ($loading ? ' no' : '')}>
    <label class="input-sizer stacked">
        <textarea bind:value={content} on:keydown={shiftCheck} on:keyup={handleInput} oninput="this.parentNode.dataset.value = this.value" rows="1" placeholder="Enter message" disabled={$loading}></textarea>
    </label>
</div>
<style>
    .input-sizer {
		display: inline-grid;
		vertical-align: top;
		align-items: center;
		position: relative;
		padding: 0.25em 0.5em;
		margin: 5px;
		width: 100%;
	}
	.input-sizer.stacked {
		padding: 0.5em;
		align-items: stretch;
	}
	.input-sizer.stacked::after,
	.input-sizer.stacked textarea {
		grid-area: 2/1;
	}
	.input-sizer::after,
	.input-sizer textarea {
		width: auto;
		min-width: 1em;
		grid-area: 1/2;
		font: inherit;
		font-size: 18px;
		margin: 0;
		resize: none;
		background: none;
		-webkit-appearance: none;
			-moz-appearance: none;
				appearance: none;
		border: none;
	}
	.input-sizer::after {
		content: attr(data-value) " ";
		visibility: hidden;
		white-space: pre-wrap;
	}
	.input-sizer:focus-within textarea:focus {
		outline: none;
	}

.bubble {
    flex: 1 1 auto;
  position: relative;
  background-color: #fff;
  color: #000;
  box-shadow: 0 -4px #fff, 0 -8px #000, 4px 0 #fff, 4px -4px #000, 8px 0 #000, 0 4px #fff, 0 8px #000, -4px 0 #fff, -4px 4px #000, -8px 0 #000, -4px -4px #000, 4px 4px #000;
  box-sizing: border-box;
}

.bubble.no, .no .input-sizer, .no textarea {
	filter: brightness(0.8);
	opacity: 0.8;
	cursor:not-allowed;
}
</style>