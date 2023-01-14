<script lang="ts">
	import ChatMessage from '$lib/ChatMessage.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>


<header class="absolute top-0 left-0 p-5 h-20 m-auto ">
	<a href="/" class="font-bold">Electric Sheep</a>
	<!--p>{data.name}</p-->
</header>

<div class="title-box text-center">

	<img alt="home" src="/steampunk-sheep-face.png" class="m-auto h-20 pt-4"/>
	<h1 class="text-3xl font-bold underline m-5">Chat</h1>

	<div class="w-6/12 m-auto">

		<div class="border-2 rounded-lg border-zinc-500 h-fit">

			<div class="flex justify-between align-bottom w-full h-fit text-left p-5 border-b-2 border-zinc-500">
				<p>Opponent</p>
				<p class="text-xs">is typing...</p>
			</div>
				
			<div class="p-2 flex flex-col">
				<ChatMessage class="self-start" />
				<ChatMessage class="self-end" />
			</div>

			<div>
				<input type="text" placeholder="Type..." class="w-full border-zinc-500 rounded-lg border-t-2 p-2" />
			</div>
		</div>

	</div>

</div>

