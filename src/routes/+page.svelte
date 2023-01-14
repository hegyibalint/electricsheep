<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<h1 class="text-3xl font-bold underline">Hello world!</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<ul>
	{#each data.scores as score}
		<li>{score.name}: {score.score}</li>
	{/each}
</ul>

<style>
</style>
