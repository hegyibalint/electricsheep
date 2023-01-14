<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="title-box text-center">
	<h1 class="text-3xl font-bold underline m-5">Electric Sheep</h1>
	<p class="m-5">Can you tell a robot from a human?</p>

	<a href="/chat" class="mt-2 py-2 px-10 border-black border-2 rounded-md no-underline">Try</a>

	<h3 class="text-xl font-bold underline mt-10 m-5"><a href="/leaderboard">Leaderboard</a></h3>

	<div class="table mx-auto">
		<div class="table-row-group">
			<div class="table-row">
				<div class="table-cell text-left">Tier 1:</div>
				<div class="table-cell text-left pl-5">{data.scores.tier_1.human.name} ({data.scores.tier_1.human.score}%) / {data.scores.tier_1.model.name} ({data.scores.tier_1.model.score}%)</div>
			</div>
		</div>
		<div class="table-row-group">
			<div class="table-row">
				<div class="table-cell text-left">Tier 2:</div>
				<div class="table-cell text-left pl-5">{data.scores.tier_2.human.name} ({data.scores.tier_2.human.score}%) / {data.scores.tier_2.model.name} ({data.scores.tier_2.model.score}%)</div>
			</div>
		</div>
		<div class="table-row-group">
			<div class="table-row">
				<div class="table-cell text-left">Tier 3:</div>
				<div class="table-cell text-left pl-5">{data.scores.tier_3.human.name} ({data.scores.tier_3.human.score}%) / {data.scores.tier_3.model.name} ({data.scores.tier_3.model.score}%)</div>
			</div>
		</div>
		<div class="table-row-group">
			<div class="table-row">
				<div class="table-cell text-left">Tier 4:</div>
				<div class="table-cell text-left pl-5">{data.scores.tier_4.human.name} ({data.scores.tier_4.human.score}%) / {data.scores.tier_4.model.name} ({data.scores.tier_4.model.score}%)</div>
			</div>
		</div>
	</div>


<img alt="Cyborg sheep face" src="/steampunk-sheep.jpg" class="mx-auto my-10 w-60"/>

</div>


<!--ul>
	{#each data.scores as score}
		<li>{score.name}: {score.score}</li>
	{/each}
</ul-->
