<script lang="ts">
	import '../app.css';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="flex flex-col w-full flex-grow">
	<header class="p-5 flex-grow-0 h-20 w-full flex justify-between">
		<a href="/" class="font-bold">Home</a>
		<a href="/me" class="font-bold">Settings</a>
	</header>

	<div class="flex w-full flex-grow">
		<slot />
	</div>

	<footer class="w-full flex-grow-0 h-12 mt-10 text-center">
		<div class="flex justify-center gap-4 pb-2">
			<a href="/about" class="text-xs">About</a>
			<a href="https://github.com/hegyibalint/electricsheep" class="text-xs">GitHub</a>
			<a href="https://cv.balinthegyi.dev/" class="text-xs">Hire me</a>
		</div>
		<p class="text-xs">Made with <a href="https://svelte.dev/">Svelte</a></p>
	</footer>
</div>
