<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="m-auto text-center">
	<h1 class="text-3xl m-10">
		Can you tell <span class="font-bold underline">humans</span> from
		<span class="font-bold underline">robots</span>?
	</h1>

	<div class="flex justify-center">
		<div class="flex border-2 border-black bg-white rounded-md py-2 px-5 w-fit">
			<a class="my-auto text-xl no-underline" href="/chat">Let me try</a>
		</div>
	</div>

	<script src="https://accounts.google.com/gsi/client" async defer></script>

	<div class="py-3 px-10 mt-5">
		<a href="/rules">Rules</a>  <a href="/leaderboard">Leaderboard</a>
	</div>

	<img alt="The sheep" src="/sheep.jpg" class="mx-auto my-2 w-1/3" />
	<p class="text-xs" style="transform: skew(-10deg);">
		Made by a <a href="https://huggingface.co/stabilityai/stable-diffusion-2">talented artist</a>
	</p>
</div>
