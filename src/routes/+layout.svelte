<script lang="ts">
	import '../app.css';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="flex flex-col w-full flex-grow">
	<div class="flex flex-col w-full flex-grow">
		<slot />
	</div>

	<footer class="w-full flex-grow-0 h-12 mt-10 text-center">
		<div class="flex justify-center gap-4 pb-2">
			<a href="/rules" class="text-xs">The Rules</a>
			<a href="/leaderboard" class="text-xs">Leaderboard</a>
			<a href="/about" class="text-xs">About Us</a>
			<a href="https://github.com/hegyibalint/electricsheep" class="text-xs">GitHub</a>
		</div>
		<p class="text-xs">Made with <a href="https://svelte.dev/">Svelte</a></p>
	</footer>
</div>
