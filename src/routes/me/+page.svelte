<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="mx-auto text-center">
	<img alt="home" src="/sheep-face.png" class="m-auto h-24 pt-4 rounded-md" />
	<h1 class="text-3xl font-bold underline m-5">Settings</h1>
	<p>Username: {data.me.name}</p>

	<h2 class="font-bold underline m-5">Billing</h2>
	<p>Balance: $$$ (X games left)</p>
	<a href="#">Add</a>
	<a href="#">Change payment method</a>

	<h2 class="font-bold underline m-5">Stats</h2>
	<p>Tier X: 33th place</p>
	<p>Accuracy: 24%</p>

	<p class="py-5">
		Your <a href="https://en.wikipedia.org/wiki/Confusion_matrix">confusion matrix</a>:
	</p>

	<div class="table mx-auto text-center">
		<div class="table-row-group">
			<div class="table-row">
				<div class="table-cell">X</div>
				<div class="table-cell">Is Human</div>
				<div class="table-cell">Is Robot</div>
			</div>
		</div>
		<div class="table-row-group">
			<div class="table-row">
				<div class="table-cell">Guess Human</div>
				<div class="table-cell">10</div>
				<div class="table-cell">5</div>
			</div>
		</div>
		<div class="table-row-group">
			<div class="table-row">
				<div class="table-cell">Guess Robot</div>
				<div class="table-cell">7</div>
				<div class="table-cell">2</div>
			</div>
		</div>
	</div>

	<p class="text-xs italics m-10" style="transform: skew(-10deg);">
		Please make sure you're not a robot.
	</p>
</div>

<style>
	.table {
		@apply border-t-2 border-l-2 border-zinc-500;
	}
	.table-cell {
		@apply border-b-2 border-r-2 border-zinc-500 p-2;
	}
</style>
