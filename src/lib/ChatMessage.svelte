<script lang="ts">
	let clazz = '';
	export let text = '';

	export { clazz as class };
</script>

<div class={`p-2 border-2 border-zinc-500 rounded-lg ${clazz}`}>
	{text}
</div>
