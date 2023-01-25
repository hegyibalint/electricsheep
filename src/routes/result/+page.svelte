<script lang="ts">
	import { page } from '$app/stores';
	import type { PageData } from './$types';

	export let data: PageData = {};
	export let guess = $page.url.searchParams.get('guess');
</script>

<header class="p-5 flex-grow-0 h-20 w-full max-w-3xl mx-auto flex justify-between">
	<a href="/" class="font-bold">Home</a>
	<a href="/me" class="font-bold">Settings</a>
</header>

<div class="mx-auto text-center">
	<h1 class="text-3xl font-bold underline m-5">Results</h1>

	<div class="flex flex-col pt-5">
		<p>Your guess:</p>
		<p class="my-5">{guess}</p>
		<p>Your opponent was:</p>

		<p
			class="text-2xl font-bold mt-5"
			class:success={guess === data.opponent}
			class:fail={guess != data.opponent}
		>
			{#if guess === data.opponent}🎉{:else}❌{/if}
			{data.opponent}
			{#if guess === data.opponent}🎉{:else}❌{/if}
		</p>

		<a href="/chat" class="no-underline text-xl m-10 py-5 px-5 border-black border-2 rounded-md"
			>Replay</a
		>

		<p>
			You're now ranking
			<span class="font-bold">
				#{data.rank}
			</span>
			by total score
		</p>
		<a href="/me#stats" class="mt-5">Check your stats</a>
		<a href="/leaderboard" class="mt-5">Leaderboard</a>
	</div>
</div>

<style lang="postcss">
	.success {
		@apply text-green-600;
	}
	.fail {
		@apply text-red-600;
	}
</style>
