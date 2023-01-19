<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="mx-auto text-center">
	<img alt="home" src="/sheep-face.png" class="m-auto h-24 pt-4 rounded-md" />
	<h1 class="text-3xl font-bold underline m-5">Results</h1>

	<div class="flex flex-col pt-5">
		<p>Your selection: HUMAN</p>
		<p>Your opponent was: HUMAN</p>

		<a href="/chat" class="no-underline text-xl m-10 py-5 px-5 border-black border-2 rounded-md"
			>Replay</a
		>

		<p>You're now 33th place by total score</p>
		<a href="/me#stats" class="mt-5">Check your stats</a>
		<a href="/leaderboard" class="mt-5">Leaderboard</a>
	</div>
</div>

<style>
	.table {
		@apply border-t-2 border-l-2 border-zinc-500;
	}
	.table-cell {
		@apply border-b-2 border-r-2 border-zinc-500 p-2;
	}
</style>
