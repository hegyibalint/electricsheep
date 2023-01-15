<script lang="ts">
	import { page } from '$app/stores';

	const message = {
		400: 'Please login.',
		404: 'The quest continues...',
		500: 'Please be patient while the bots figure it out :)'
	};
</script>

<div class="m-auto text-center">
	<h1 class="text-xl my-10">Error {$page.status}</h1>

	{#if $page.error}
		<h1 class="text-3xl my-10 mb-80">{$page.error.message}</h1>
	{/if}

	<p>{message[$page.status] ?? message[500]}</p>

	<img alt="The sheep" src="/sheep.jpg" class="mx-auto my-10 w-1/2 invert" />

	<a href="/" class="font-bold text-3xl">Home</a>
</div>
