<script>
	export let opponent_style = ''; //transform: rotate(0deg); background-color: rgb(255, 0, 0)';
	let angle = 0;

	// sheep animation
	setInterval(function () {
		angle++;
		angle = angle++ % 360;
		//opponent_style = 'transform: rotate(' + Math.ceil(Math.random() * 360) + 'deg); background-color: rgb('+ Math.ceil(Math.random() * 256) +', '+ Math.ceil(Math.random() * 256) +', '+ Math.ceil(Math.random() * 256) +')';
		opponent_style = 'background-color: red; transform: rotate(' + angle + 'deg);';
	}, 10);

	// ellipsis animation
	export let ellipsis = '...';
	let dots = 0;
	setInterval(function () {
		dots = dots % 3;
		dots++;
		ellipsis = '.'.repeat(dots);
	}, 500);

	// request player
	// import { players } from "./store";

	// export let my_player_id = "player_" + Math.ceil(Math.random())

	// function playerAvailable() {
	// 	let updatedPlayers = [...$players, my_player_id];
	// 	players.set(updatedPlayers);
	// }
	// playerAvailable()

	// // request player
	// async function doPost () {
	// 	const res = await fetch('https://httpbin.org/post', {
	// 		method: 'POST',
	// 		body: JSON.stringify({
	// 			foo,
	// 			bar
	// 		})
	// 	})

	// 	const json = await res.json()
	// 	result = JSON.stringify(json)
	// }
</script>

<header class="p-5 flex-grow-0 h-20 w-full max-w-3xl mx-auto flex justify-between">
	<a href="/" class="font-bold">Home</a>
	<a href="/me" class="font-bold">Settings</a>
</header>

<div class="m-auto text-center flex flex-col gap-5 h-fit max-w-3xl">
	<img
		alt="The sheep"
		src="/sheep-face.png"
		class="mx-auto my-2 w-28 rounded-full hue-rotating"
		style={opponent_style}
	/>
	<h1 class="text-3xl font-bold underline m-5">Hang on{ellipsis}</h1>
</div>

<style>
	.hue-rotating {
		animation: filter-animation 8s infinite;
	}

	@keyframes filter-animation {
		0% {
			filter: hue-rotate(0deg);
		}

		50% {
			filter: hue-rotate(180deg);
		}

		100% {
			filter: hue-rotate(359deg);
		}
	}
</style>
