<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>


<header class="absolute top-0 left-0 w-full h-20">
	<a href="/"><img alt="home" src="/favicon-inverted.ico" class="h-16 pt-4 pl-4"/></a>
	<!--p>{data.name}</p-->
</header>

<div class="title-box text-center">
	<h1 class="text-3xl font-bold underline m-5">Leaderboard</h1>

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

</div>


<!--ul>
	{#each data.scores as score}
		<li>{score.name}: {score.score}</li>
	{/each}
</ul-->
