<script>
	import '../app.css';
</script>



<header class="absolute top-0 w-full h-20">
	<!--img alt="home" src="/favicon-inverted.ico" class="h-16 pt-4 pl-4"/-->
</header>

<slot />

<footer class="absolute bottom-0 w-full h-12 text-center">
	<div class="flex justify-center gap-4 pb-2">
		<a href="#" class="text-xs">About</a>
		<a href="#" class="text-xs">Contact</a>
	</div>
	<p class="text-xs">Made with <a href="#">Svelte</a></p>
</footer>