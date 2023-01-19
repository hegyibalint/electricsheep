<script lang="ts">
	import ChatMessage from '$lib/ChatMessage.svelte';
	import type { PageData } from './$types';
	import { goto } from '$app/navigation';
	import { browser } from '$app/environment';

	export let data: PageData;
	export let time_left = 120;
	export const opponent_style = 'transform: rotate(' + Math.ceil(Math.random() * 360) + 'deg); background-color: rgb('+ Math.ceil(Math.random() * 256) +', '+ Math.ceil(Math.random() * 256) +', '+ Math.ceil(Math.random() * 256) +')';

	// Timer redirecting to the results
	var timer = setInterval(function(){
        time_left--;
        if (time_left < 1) {
            clearInterval(timer);
			browser ? goto('/result') : null;
        }
    }, 1000);

</script>

<header class="p-5 flex-grow-0 h-20 w-full max-w-3xl mx-auto flex justify-between">
	<a href="/" class="font-bold">Home</a>
	<a href="/me" class="font-bold">Settings</a>
</header>

<div class="text-center flex-grow flex flex-col max-w-3xl md:mx-auto -mx-4">
	<div class="max-w-3xl flex-grow flex flex-col">
		<div class="flex-grow flex flex-col border-2 rounded-lg border-black">
			<div
				class="flex-grow-0 flex justify-between align-bottom w-full py-3 px-6 border-b-2 rounded-t-lg border-black bg-amber-100"
			>
				<div class="flex-grow-0 flex gap-4 justify-start">
					<img
						alt="opponent"
						src="/sheep-face.png"
						class="flex-grow-0 h-12 w-12 rounded-full border-black"
						style={opponent_style}
					/>
					<p class="h-fit my-auto text-left">Opponent</p>
				</div>
				<p class="h-fit my-auto text-xl text-right" class:expiring-timer={time_left < 20}>
					0{Math.floor(time_left / 60)}:{#if time_left % 60 < 10}0{/if}{time_left % 60}
				</p>
			</div>

			<!--div class="flex-grow flex flex-col gap-2 p-5 overflow-y-scroll h-0">
				{#each $svelteStore.messages as message}
					{#if message.author == my_identifier}
					<ChatMessage class="self-end bg-white" text={message.text} />
					{:else}
					<ChatMessage class="self-start bg-yellow-100" text={message.text} />
					{/if}
				{/each}
			</div>

			<form on:submit|preventDefault={send} class="flex border-zinc-500 border-t-2">
				<input
					class="flex-grow rounded-lg py-3 px-4 focus:outline-none"
					autocomplete="off"
					placeholder="Type..."
					bind:value={message}
				/>
			</form-->

		</div>

		<form method="POST" action="/result" class="h-fit flex justify-center gap-4 p-5 md:pb-20">
			<div class="flex gap-0 border-black border-2 rounded-md">

				<label>
					<input type="radio" id="guess" name="guess" class="hiddenn" value="human">
					<p class="no-underline text-xl py-3 px-5 rounded-l-md border-r-2 border-black">Human</p>
				</label>

				<label>
					<input type="radio" id="guess" name="guess" class="hiddenn" value="robot">
					<p class="no-underline text-xl py-3 px-5 rounded-r-md border-black">Robot</p>
				</label>

			</div>
			<input type="submit" class="no-underline text-xl py-3 px-5 border-black border-2 rounded-md" value="Check"/>
		</form>
	</div>
</div>

<style>
	.expiring-timer {
		@apply animate-bounce text-red-600;
	}
	label #guess:checked + p {
		@apply bg-amber-300;
	}
	#guess {
		@apply hidden;
	}

</style>
