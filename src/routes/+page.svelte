<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="title-box text-center">
	<h1 class="text-3xl font-bold underline m-5">Electric Sheep</h1>
	<p class="m-5">Can you tell a robot from a human?</p>

	<button class="mt-2 py-2 px-10 border-black border-2 rounded-md">Try</button>
</div>

<img alt="Cyborg sheep face" src="/steampunk-sheep.jpg" width="30%" class="m-10"/>

<!--ul>
	{#each data.scores as score}
		<li>{score.name}: {score.score}</li>
	{/each}
</ul-->
