<script lang="ts">
	import { page } from '$app/stores';

	const message: Record<number, string> = {
		400: 'Please login.',
		404: 'The quest continues...',
		500: 'Please be patient while the bots figure it out :)'
	};
</script>

<header class="p-5 flex-grow-0 h-20 w-full max-w-3xl mx-auto flex justify-between">
	<a href="/" class="font-bold">Home</a>
	<a href="/me" class="font-bold">Settings</a>
</header>

<div class="m-auto text-center">
	<h1 class="text-xl">Error {$page.status}</h1>

	{#if $page.error}
		<h1 class="text-3xl my-10 mb-10">{$page.error.message}</h1>
	{/if}

	<p class="my-10">{message[$page.status] ?? message[500]}</p>

	<a href="/" class="font-bold text-3xl my-10">Home</a>

	<img alt="The sheep" src="/sheep.jpg" class="mx-auto my-10 w-1/2 invert" />
</div>
