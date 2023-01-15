<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	let array = [
		{username:"Alice", avatar:"./sheep-face.png", total_points: 1000, games_played:1500, success_ratio: 66},
		{username:"Bob", avatar:"./old-sheep-face.png", total_points: 900, games_played:901, success_ratio: 99},
		{username:"Charlie", avatar:"./openai-sheep-face.png", total_points: 888, games_played:1000, success_ratio: 88},
		{username:"Doug", avatar:"./facebook-sheep-face.png", total_points: 765, games_played:2000, success_ratio: 38},
		{username:"Eddy", avatar:"./github-sheep-face.png", total_points: 600, games_played:2500, success_ratio: 24},
		{username:"Alice", avatar:"./sheep-face.png", total_points: 1000, games_played:1500, success_ratio: 66},
		{username:"Bob", avatar:"./old-sheep-face.png", total_points: 900, games_played:901, success_ratio: 99},
		{username:"Charlie", avatar:"./openai-sheep-face.png", total_points: 888, games_played:1000, success_ratio: 88},
		{username:"Doug", avatar:"./facebook-sheep-face.png", total_points: 765, games_played:2000, success_ratio: 38},
		{username:"Eddy", avatar:"./github-sheep-face.png", total_points: 600, games_played:2500, success_ratio: 24},
		{username:"Alice", avatar:"./sheep-face.png", total_points: 1000, games_played:1500, success_ratio: 66},
		{username:"Bob", avatar:"./old-sheep-face.png", total_points: 900, games_played:901, success_ratio: 99},
		{username:"Charlie", avatar:"./openai-sheep-face.png", total_points: 888, games_played:1000, success_ratio: 88},
		{username:"Doug", avatar:"./facebook-sheep-face.png", total_points: 765, games_played:2000, success_ratio: 38},
		{username:"Eddy", avatar:"./github-sheep-face.png", total_points: 600, games_played:2500, success_ratio: 24},
		{username:"Alice", avatar:"./sheep-face.png", total_points: 1000, games_played:1500, success_ratio: 66},
		{username:"Bob", avatar:"./old-sheep-face.png", total_points: 900, games_played:901, success_ratio: 99},
		{username:"Charlie", avatar:"./openai-sheep-face.png", total_points: 888, games_played:1000, success_ratio: 88},
		{username:"Doug", avatar:"./facebook-sheep-face.png", total_points: 765, games_played:2000, success_ratio: 38},
		{username:"Eddy", avatar:"./github-sheep-face.png", total_points: 600, games_played:2500, success_ratio: 24},
		{username:"Alice", avatar:"./sheep-face.png", total_points: 1000, games_played:1500, success_ratio: 66},
		{username:"Bob", avatar:"./old-sheep-face.png", total_points: 900, games_played:901, success_ratio: 99},
		{username:"Charlie", avatar:"./openai-sheep-face.png", total_points: 888, games_played:1000, success_ratio: 88},
		{username:"Doug", avatar:"./facebook-sheep-face.png", total_points: 765, games_played:2000, success_ratio: 38},
		{username:"Eddy", avatar:"./github-sheep-face.png", total_points: 600, games_played:2500, success_ratio: 24},
		{username:"Alice", avatar:"./sheep-face.png", total_points: 1000, games_played:1500, success_ratio: 66},
		{username:"Bob", avatar:"./old-sheep-face.png", total_points: 900, games_played:901, success_ratio: 99},
		{username:"Charlie", avatar:"./openai-sheep-face.png", total_points: 888, games_played:1000, success_ratio: 88},
		{username:"Doug", avatar:"./facebook-sheep-face.png", total_points: 765, games_played:2000, success_ratio: 38},
		{username:"Eddy", avatar:"./github-sheep-face.png", total_points: 600, games_played:2500, success_ratio: 24},
		{username:"Alice", avatar:"./sheep-face.png", total_points: 1000, games_played:1500, success_ratio: 66},
		{username:"Bob", avatar:"./old-sheep-face.png", total_points: 900, games_played:901, success_ratio: 99},
		{username:"Charlie", avatar:"./openai-sheep-face.png", total_points: 888, games_played:1000, success_ratio: 88},
		{username:"Doug", avatar:"./facebook-sheep-face.png", total_points: 765, games_played:2000, success_ratio: 38},
		{username:"Eddy", avatar:"./github-sheep-face.png", total_points: 600, games_played:2500, success_ratio: 24},
		{username:"Alice", avatar:"./sheep-face.png", total_points: 1000, games_played:1500, success_ratio: 66},
		{username:"Bob", avatar:"./old-sheep-face.png", total_points: 900, games_played:901, success_ratio: 99},
		{username:"Charlie", avatar:"./openai-sheep-face.png", total_points: 888, games_played:1000, success_ratio: 88},
		{username:"Doug", avatar:"./facebook-sheep-face.png", total_points: 765, games_played:2000, success_ratio: 38},
		{username:"Eddy", avatar:"./github-sheep-face.png", total_points: 600, games_played:2500, success_ratio: 24},
		{username:"Alice", avatar:"./sheep-face.png", total_points: 1000, games_played:1500, success_ratio: 66},
		{username:"Bob", avatar:"./old-sheep-face.png", total_points: 900, games_played:901, success_ratio: 99},
		{username:"Charlie", avatar:"./openai-sheep-face.png", total_points: 888, games_played:1000, success_ratio: 88},
		{username:"Doug", avatar:"./facebook-sheep-face.png", total_points: 765, games_played:2000, success_ratio: 38},
		{username:"Eddy", avatar:"./github-sheep-face.png", total_points: 600, games_played:2500, success_ratio: 24},
		{username:"Alice", avatar:"./sheep-face.png", total_points: 1000, games_played:1500, success_ratio: 66},
		{username:"Bob", avatar:"./old-sheep-face.png", total_points: 900, games_played:901, success_ratio: 99},
		{username:"Charlie", avatar:"./openai-sheep-face.png", total_points: 888, games_played:1000, success_ratio: 88},
		{username:"Doug", avatar:"./facebook-sheep-face.png", total_points: 765, games_played:2000, success_ratio: 38},
		{username:"Eddy", avatar:"./github-sheep-face.png", total_points: 600, games_played:2500, success_ratio: 24},
	];

	// Holds table sort state.  Initialized to reflect table sorted by id column ascending.
	let sortBy = {col: "success_ratio", ascending: true};
	
	$: sort = (column) => {
		
		if (sortBy.col == column) {
			sortBy.ascending = !sortBy.ascending
		} else {
			sortBy.col = column
			sortBy.ascending = true
		}
		
		// Modifier to sorting function for ascending or descending
		let sortModifier = (sortBy.ascending) ? 1 : -1;
		
		let sort = (a, b) => 
			(a[column] < b[column]) 
			? -1 * sortModifier 
			: (a[column] > b[column]) 
			? 1 * sortModifier 
			: 0;
		
		array = array.sort(sort);
	}
</script>

<style>
	th, td {
		@apply py-1 px-5;
	}
	tbody tr:hover {
		@apply bg-amber-100;
	}

</style>

<div class="mx-auto text-center">
	<h1 class="text-3xl font-bold underline m-5">Leaderboard</h1>
	
	<div class="flex flex-wrap justify-around">

		<div>
			<h2 class="text-xl font-bold underline m-5">Best Combined Score</h2>
			<ol>
				<li>Alice</li>
				<li>Bob</li>
				<li>Charlie</li>
			</ol>	
		</div>

		<div>
			<h2 class="text-xl font-bold underline m-5">Best Robot Hunters</h2>
			<ol>
				<li>Alice</li>
				<li>Bob</li>
				<li>Charlie</li>
			</ol>	
		</div>

		<div>
			<h2 class="text-xl font-bold underline m-5">Best Human Detectors</h2>
			<ol>
				<li>Alice</li>
				<li>Bob</li>
				<li>Charlie</li>
			</ol>	
		</div>

		<div>
			<h2 class="text-xl font-bold underline m-5">Best At Being Robots</h2>
			<ol>
				<li>Alice</li>
				<li>Bob</li>
				<li>Charlie</li>
			</ol>	
		</div>

	</div>

	<table class="m-auto mt-10">
		<thead>
			<tr class="bg-amber-100">
				<th></th>
				<th on:click={sort("success_ratio")}>Success Ratio</th>
				<th on:click={sort("total_points")}>Total Points</th>
				<th on:click={sort("games_played")}>Games Played</th>
				<th on:click={sort("total_points")}>Detected Human</th>
				<th on:click={sort("total_points")}>Detected Robot</th>
				<th on:click={sort("total_points")}>Mistaken for Robot</th>
			</tr>
		</thead>
		<tbody>
			{#each array as row}
				<tr>
					<td class="flex gap-4">
						<img alt="{row.username}'s avatar" src={row.avatar} class="w-7 h-7 rounded-full">
						<p class="h-fit my-auto text-left">{row.username}</p>
					</td>
					<td>{row.success_ratio} %</td>
					<td>{row.total_points}</td>
					<td>{row.games_played}</td>
				</tr>
			{/each}
		</tbody>
	</table>

	<p class="text-xs py-10" style="transform: skew(-7deg);">Top 100 by total points. Only includes players with at least 10 games.</p>

</div>
