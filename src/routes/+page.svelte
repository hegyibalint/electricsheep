<script lang="ts">
	export let counts: string[] = [];

	// const poop = fetch('/api/poop');
	const poop = [];
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<button
	on:click={() => {
		counts = [...counts, counts.length.toString()];
	}}>Press me</button
>

<p>You pressed the button times</p>
{#each counts as count}
	<p>I'm {count}</p>
{/each}

<style>
</style>
