<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="mx-auto text-center">

	<img alt="home" src="/sheep-face.png" class="m-auto h-24 pt-4 rounded-md"/>
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
