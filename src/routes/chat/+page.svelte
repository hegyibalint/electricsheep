<script lang="ts">
	import ChatMessage from '$lib/ChatMessage.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	export let rotation = '';
	rotation = 'transform: rotate(' + Math.ceil(Math.random() * 360) + 'deg);';
</script>

<div class="text-center flex-grow flex flex-col max-w-3xl md:mx-auto -mx-4">
	<div class="max-w-3xl flex-grow flex flex-col">
		<div class="flex-grow flex flex-col border-2 rounded-lg border-zinc-500">
			<div
				class="flex-grow-0 flex justify-between align-bottom w-full py-3 px-6 border-b-2 border-zinc-500"
			>
				<div class="flex-grow-0 flex gap-4 justify-start">
					<img
						alt="opponent"
						src="/sheep-face.png"
						class="flex-grow-0 h-12 w-12 rounded-full border-2 border-zinc-500"
						style={rotation}
					/>
					<p class="h-fit my-auto text-left">Opponent</p>
				</div>
				<p class="h-fit my-auto text-right">1/10 messages left</p>
			</div>

			<div class="flex-grow flex flex-col gap-2 p-5 overflow-y-scroll h-0">
				{#each data.chat.messages as message}
					{#if message.author === 'opponent'}
						<ChatMessage class="self-start bg-yellow-100" text={message.message} />
					{:else}
						<ChatMessage class="self-end bg-white" text={message.message} />
					{/if}
				{/each}
			</div>

			<div class="flex border-zinc-500 border-t-2">
				<input
					id="message-box"
					type="text"
					placeholder="Type..."
					class="flex-grow rounded-lg py-2 px-4"
				/>
				<button
					class="py-3 px-10 flex-grow-0 border-zinc-500 border-l-2 no-underline"
					on:click={() => {
						console.log('sending...');
					}}>Send</button
				>
			</div>
		</div>

		<div class="h-fit flex justify-center gap-4 p-5 pb-20">
			<a href="/result" class="no-underline text-xl py-3 px-5 border-black border-2 rounded-md"
				>Human</a
			>
			<a href="/result" class="no-underline text-xl py-3 px-5 border-black border-2 rounded-md"
				>Robot</a
			>
		</div>
	</div>
</div>
