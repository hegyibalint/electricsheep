<script lang="ts">
	import Podium from '$lib/Podium.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	let scores = [
		{
			username: 'Alice',
			avatar: './sheep-face.png',
			total_points: 1000,
			games_played: 1500,
			success_ratio: 66,
			detected_humans: 33,
			detected_robots: 45,
			mistaken_robot: 10
		},
		{
			username: 'Bob',
			avatar: './old-sheep-face.png',
			total_points: 900,
			games_played: 901,
			success_ratio: 99,
			detected_humans: 34,
			detected_robots: 44,
			mistaken_robot: 3
		},
		{
			username: 'Charlie',
			avatar: './openai-sheep-face.png',
			total_points: 888,
			games_played: 1000,
			success_ratio: 88,
			detected_humans: 53,
			detected_robots: 15,
			mistaken_robot: 46
		},
		{
			username: 'Doug',
			avatar: './facebook-sheep-face.png',
			total_points: 765,
			games_played: 2000,
			success_ratio: 38,
			detected_humans: 99,
			detected_robots: 0,
			mistaken_robot: 99
		},
		{
			username: 'Eddy',
			avatar: './github-sheep-face.png',
			total_points: 600,
			games_played: 2500,
			success_ratio: 24,
			detected_humans: 3,
			detected_robots: 89,
			mistaken_robot: 30
		},
		{
			username: 'Alice',
			avatar: './sheep-face.png',
			total_points: 1000,
			games_played: 1500,
			success_ratio: 66,
			detected_humans: 33,
			detected_robots: 45,
			mistaken_robot: 10
		},
		{
			username: 'Bob',
			avatar: './old-sheep-face.png',
			total_points: 900,
			games_played: 901,
			success_ratio: 99,
			detected_humans: 34,
			detected_robots: 44,
			mistaken_robot: 3
		},
		{
			username: 'Charlie',
			avatar: './openai-sheep-face.png',
			total_points: 888,
			games_played: 1000,
			success_ratio: 88,
			detected_humans: 53,
			detected_robots: 15,
			mistaken_robot: 46
		},
		{
			username: 'Doug',
			avatar: './facebook-sheep-face.png',
			total_points: 765,
			games_played: 2000,
			success_ratio: 38,
			detected_humans: 99,
			detected_robots: 0,
			mistaken_robot: 99
		},
		{
			username: 'Eddy',
			avatar: './github-sheep-face.png',
			total_points: 600,
			games_played: 2500,
			success_ratio: 24,
			detected_humans: 3,
			detected_robots: 89,
			mistaken_robot: 30
		},
		{
			username: 'Alice',
			avatar: './sheep-face.png',
			total_points: 1000,
			games_played: 1500,
			success_ratio: 66,
			detected_humans: 33,
			detected_robots: 45,
			mistaken_robot: 10
		},
		{
			username: 'Bob',
			avatar: './old-sheep-face.png',
			total_points: 900,
			games_played: 901,
			success_ratio: 99,
			detected_humans: 34,
			detected_robots: 44,
			mistaken_robot: 3
		},
		{
			username: 'Charlie',
			avatar: './openai-sheep-face.png',
			total_points: 888,
			games_played: 1000,
			success_ratio: 88,
			detected_humans: 53,
			detected_robots: 15,
			mistaken_robot: 46
		},
		{
			username: 'Doug',
			avatar: './facebook-sheep-face.png',
			total_points: 765,
			games_played: 2000,
			success_ratio: 38,
			detected_humans: 99,
			detected_robots: 0,
			mistaken_robot: 99
		},
		{
			username: 'Eddy',
			avatar: './github-sheep-face.png',
			total_points: 600,
			games_played: 2500,
			success_ratio: 24,
			detected_humans: 3,
			detected_robots: 89,
			mistaken_robot: 30
		},
		{
			username: 'Alice',
			avatar: './sheep-face.png',
			total_points: 1000,
			games_played: 1500,
			success_ratio: 66,
			detected_humans: 33,
			detected_robots: 45,
			mistaken_robot: 10
		},
		{
			username: 'Bob',
			avatar: './old-sheep-face.png',
			total_points: 900,
			games_played: 901,
			success_ratio: 99,
			detected_humans: 34,
			detected_robots: 44,
			mistaken_robot: 3
		},
		{
			username: 'Charlie',
			avatar: './openai-sheep-face.png',
			total_points: 888,
			games_played: 1000,
			success_ratio: 88,
			detected_humans: 53,
			detected_robots: 15,
			mistaken_robot: 46
		},
		{
			username: 'Doug',
			avatar: './facebook-sheep-face.png',
			total_points: 765,
			games_played: 2000,
			success_ratio: 38,
			detected_humans: 99,
			detected_robots: 0,
			mistaken_robot: 99
		},
		{
			username: 'Eddy',
			avatar: './github-sheep-face.png',
			total_points: 600,
			games_played: 2500,
			success_ratio: 24,
			detected_humans: 3,
			detected_robots: 89,
			mistaken_robot: 30
		},
		{
			username: 'Alice',
			avatar: './sheep-face.png',
			total_points: 1000,
			games_played: 1500,
			success_ratio: 66,
			detected_humans: 33,
			detected_robots: 45,
			mistaken_robot: 10
		},
		{
			username: 'Bob',
			avatar: './old-sheep-face.png',
			total_points: 900,
			games_played: 901,
			success_ratio: 99,
			detected_humans: 34,
			detected_robots: 44,
			mistaken_robot: 3
		},
		{
			username: 'Charlie',
			avatar: './openai-sheep-face.png',
			total_points: 888,
			games_played: 1000,
			success_ratio: 88,
			detected_humans: 53,
			detected_robots: 15,
			mistaken_robot: 46
		},
		{
			username: 'Doug',
			avatar: './facebook-sheep-face.png',
			total_points: 765,
			games_played: 2000,
			success_ratio: 38,
			detected_humans: 99,
			detected_robots: 0,
			mistaken_robot: 99
		},
		{
			username: 'Eddy',
			avatar: './github-sheep-face.png',
			total_points: 600,
			games_played: 2500,
			success_ratio: 24,
			detected_humans: 3,
			detected_robots: 89,
			mistaken_robot: 30
		},
		{
			username: 'Alice',
			avatar: './sheep-face.png',
			total_points: 1000,
			games_played: 1500,
			success_ratio: 66,
			detected_humans: 33,
			detected_robots: 45,
			mistaken_robot: 10
		},
		{
			username: 'Bob',
			avatar: './old-sheep-face.png',
			total_points: 900,
			games_played: 901,
			success_ratio: 99,
			detected_humans: 34,
			detected_robots: 44,
			mistaken_robot: 3
		},
		{
			username: 'Charlie',
			avatar: './openai-sheep-face.png',
			total_points: 888,
			games_played: 1000,
			success_ratio: 88,
			detected_humans: 53,
			detected_robots: 15,
			mistaken_robot: 46
		},
		{
			username: 'Doug',
			avatar: './facebook-sheep-face.png',
			total_points: 765,
			games_played: 2000,
			success_ratio: 38,
			detected_humans: 99,
			detected_robots: 0,
			mistaken_robot: 99
		},
		{
			username: 'Eddy',
			avatar: './github-sheep-face.png',
			total_points: 600,
			games_played: 2500,
			success_ratio: 24,
			detected_humans: 3,
			detected_robots: 89,
			mistaken_robot: 30
		},
		{
			username: 'Alice',
			avatar: './sheep-face.png',
			total_points: 1000,
			games_played: 1500,
			success_ratio: 66,
			detected_humans: 33,
			detected_robots: 45,
			mistaken_robot: 10
		},
		{
			username: 'Bob',
			avatar: './old-sheep-face.png',
			total_points: 900,
			games_played: 901,
			success_ratio: 99,
			detected_humans: 34,
			detected_robots: 44,
			mistaken_robot: 3
		},
		{
			username: 'Charlie',
			avatar: './openai-sheep-face.png',
			total_points: 888,
			games_played: 1000,
			success_ratio: 88,
			detected_humans: 53,
			detected_robots: 15,
			mistaken_robot: 46
		},
		{
			username: 'Doug',
			avatar: './facebook-sheep-face.png',
			total_points: 765,
			games_played: 2000,
			success_ratio: 38,
			detected_humans: 99,
			detected_robots: 0,
			mistaken_robot: 99
		},
		{
			username: 'Eddy',
			avatar: './github-sheep-face.png',
			total_points: 600,
			games_played: 2500,
			success_ratio: 24,
			detected_humans: 3,
			detected_robots: 89,
			mistaken_robot: 30
		},
		{
			username: 'Alice',
			avatar: './sheep-face.png',
			total_points: 1000,
			games_played: 1500,
			success_ratio: 66,
			detected_humans: 33,
			detected_robots: 45,
			mistaken_robot: 10
		},
		{
			username: 'Bob',
			avatar: './old-sheep-face.png',
			total_points: 900,
			games_played: 901,
			success_ratio: 99,
			detected_humans: 34,
			detected_robots: 44,
			mistaken_robot: 3
		},
		{
			username: 'Charlie',
			avatar: './openai-sheep-face.png',
			total_points: 888,
			games_played: 1000,
			success_ratio: 88,
			detected_humans: 53,
			detected_robots: 15,
			mistaken_robot: 46
		},
		{
			username: 'Doug',
			avatar: './facebook-sheep-face.png',
			total_points: 765,
			games_played: 2000,
			success_ratio: 38,
			detected_humans: 99,
			detected_robots: 0,
			mistaken_robot: 99
		},
		{
			username: 'Eddy',
			avatar: './github-sheep-face.png',
			total_points: 600,
			games_played: 2500,
			success_ratio: 24,
			detected_humans: 3,
			detected_robots: 89,
			mistaken_robot: 30
		},
		{
			username: 'Alice',
			avatar: './sheep-face.png',
			total_points: 1000,
			games_played: 1500,
			success_ratio: 66,
			detected_humans: 33,
			detected_robots: 45,
			mistaken_robot: 10
		},
		{
			username: 'Bob',
			avatar: './old-sheep-face.png',
			total_points: 900,
			games_played: 901,
			success_ratio: 99,
			detected_humans: 34,
			detected_robots: 44,
			mistaken_robot: 3
		},
		{
			username: 'Charlie',
			avatar: './openai-sheep-face.png',
			total_points: 888,
			games_played: 1000,
			success_ratio: 88,
			detected_humans: 53,
			detected_robots: 15,
			mistaken_robot: 46
		},
		{
			username: 'Doug',
			avatar: './facebook-sheep-face.png',
			total_points: 765,
			games_played: 2000,
			success_ratio: 38,
			detected_humans: 99,
			detected_robots: 0,
			mistaken_robot: 99
		},
		{
			username: 'Eddy',
			avatar: './github-sheep-face.png',
			total_points: 600,
			games_played: 2500,
			success_ratio: 24,
			detected_humans: 3,
			detected_robots: 89,
			mistaken_robot: 30
		},
		{
			username: 'Alice',
			avatar: './sheep-face.png',
			total_points: 1000,
			games_played: 1500,
			success_ratio: 66,
			detected_humans: 33,
			detected_robots: 45,
			mistaken_robot: 10
		},
		{
			username: 'Bob',
			avatar: './old-sheep-face.png',
			total_points: 900,
			games_played: 901,
			success_ratio: 99,
			detected_humans: 34,
			detected_robots: 44,
			mistaken_robot: 3
		},
		{
			username: 'Charlie',
			avatar: './openai-sheep-face.png',
			total_points: 888,
			games_played: 1000,
			success_ratio: 88,
			detected_humans: 53,
			detected_robots: 15,
			mistaken_robot: 46
		},
		{
			username: 'Doug',
			avatar: './facebook-sheep-face.png',
			total_points: 765,
			games_played: 2000,
			success_ratio: 38,
			detected_humans: 99,
			detected_robots: 0,
			mistaken_robot: 99
		},
		{
			username: 'Eddy',
			avatar: './github-sheep-face.png',
			total_points: 600,
			games_played: 2500,
			success_ratio: 24,
			detected_humans: 3,
			detected_robots: 89,
			mistaken_robot: 30
		},
		{
			username: 'Alice',
			avatar: './sheep-face.png',
			total_points: 1000,
			games_played: 1500,
			success_ratio: 66,
			detected_humans: 33,
			detected_robots: 45,
			mistaken_robot: 10
		},
		{
			username: 'Bob',
			avatar: './old-sheep-face.png',
			total_points: 900,
			games_played: 901,
			success_ratio: 99,
			detected_humans: 34,
			detected_robots: 44,
			mistaken_robot: 3
		},
		{
			username: 'Charlie',
			avatar: './openai-sheep-face.png',
			total_points: 888,
			games_played: 1000,
			success_ratio: 88,
			detected_humans: 53,
			detected_robots: 15,
			mistaken_robot: 46
		},
		{
			username: 'Doug',
			avatar: './facebook-sheep-face.png',
			total_points: 765,
			games_played: 2000,
			success_ratio: 38,
			detected_humans: 99,
			detected_robots: 0,
			mistaken_robot: 99
		},
		{
			username: 'Eddy',
			avatar: './github-sheep-face.png',
			total_points: 600,
			games_played: 2500,
			success_ratio: 24,
			detected_humans: 3,
			detected_robots: 89,
			mistaken_robot: 30
		},
		{
			username: 'Alice',
			avatar: './sheep-face.png',
			total_points: 1000,
			games_played: 1500,
			success_ratio: 66,
			detected_humans: 33,
			detected_robots: 45,
			mistaken_robot: 10
		},
		{
			username: 'Bob',
			avatar: './old-sheep-face.png',
			total_points: 900,
			games_played: 901,
			success_ratio: 99,
			detected_humans: 34,
			detected_robots: 44,
			mistaken_robot: 3
		},
		{
			username: 'Charlie',
			avatar: './openai-sheep-face.png',
			total_points: 888,
			games_played: 1000,
			success_ratio: 88,
			detected_humans: 53,
			detected_robots: 15,
			mistaken_robot: 46
		},
		{
			username: 'Doug',
			avatar: './facebook-sheep-face.png',
			total_points: 765,
			games_played: 2000,
			success_ratio: 38,
			detected_humans: 99,
			detected_robots: 0,
			mistaken_robot: 99
		},
		{
			username: 'Eddy',
			avatar: './github-sheep-face.png',
			total_points: 600,
			games_played: 2500,
			success_ratio: 24,
			detected_humans: 3,
			detected_robots: 89,
			mistaken_robot: 30
		},
		{
			username: 'Alice',
			avatar: './sheep-face.png',
			total_points: 1000,
			games_played: 1500,
			success_ratio: 66,
			detected_humans: 33,
			detected_robots: 45,
			mistaken_robot: 10
		},
		{
			username: 'Bob',
			avatar: './old-sheep-face.png',
			total_points: 900,
			games_played: 901,
			success_ratio: 99,
			detected_humans: 34,
			detected_robots: 44,
			mistaken_robot: 3
		},
		{
			username: 'Charlie',
			avatar: './openai-sheep-face.png',
			total_points: 888,
			games_played: 1000,
			success_ratio: 88,
			detected_humans: 53,
			detected_robots: 15,
			mistaken_robot: 46
		},
		{
			username: 'Doug',
			avatar: './facebook-sheep-face.png',
			total_points: 765,
			games_played: 2000,
			success_ratio: 38,
			detected_humans: 99,
			detected_robots: 0,
			mistaken_robot: 99
		},
		{
			username: 'Eddy',
			avatar: './github-sheep-face.png',
			total_points: 600,
			games_played: 2500,
			success_ratio: 24,
			detected_humans: 3,
			detected_robots: 89,
			mistaken_robot: 30
		},
		{
			username: 'Alice',
			avatar: './sheep-face.png',
			total_points: 1000,
			games_played: 1500,
			success_ratio: 66,
			detected_humans: 33,
			detected_robots: 45,
			mistaken_robot: 10
		},
		{
			username: 'Bob',
			avatar: './old-sheep-face.png',
			total_points: 900,
			games_played: 901,
			success_ratio: 99,
			detected_humans: 34,
			detected_robots: 44,
			mistaken_robot: 3
		},
		{
			username: 'Charlie',
			avatar: './openai-sheep-face.png',
			total_points: 888,
			games_played: 1000,
			success_ratio: 88,
			detected_humans: 53,
			detected_robots: 15,
			mistaken_robot: 46
		},
		{
			username: 'Doug',
			avatar: './facebook-sheep-face.png',
			total_points: 765,
			games_played: 2000,
			success_ratio: 38,
			detected_humans: 99,
			detected_robots: 0,
			mistaken_robot: 99
		},
		{
			username: 'Eddy',
			avatar: './github-sheep-face.png',
			total_points: 600,
			games_played: 2500,
			success_ratio: 24,
			detected_humans: 3,
			detected_robots: 89,
			mistaken_robot: 30
		},
		{
			username: 'Alice',
			avatar: './sheep-face.png',
			total_points: 1000,
			games_played: 1500,
			success_ratio: 66,
			detected_humans: 33,
			detected_robots: 45,
			mistaken_robot: 10
		},
		{
			username: 'Bob',
			avatar: './old-sheep-face.png',
			total_points: 900,
			games_played: 901,
			success_ratio: 99,
			detected_humans: 34,
			detected_robots: 44,
			mistaken_robot: 3
		},
		{
			username: 'Charlie',
			avatar: './openai-sheep-face.png',
			total_points: 888,
			games_played: 1000,
			success_ratio: 88,
			detected_humans: 53,
			detected_robots: 15,
			mistaken_robot: 46
		},
		{
			username: 'Doug',
			avatar: './facebook-sheep-face.png',
			total_points: 765,
			games_played: 2000,
			success_ratio: 38,
			detected_humans: 99,
			detected_robots: 0,
			mistaken_robot: 99
		},
		{
			username: 'Eddy',
			avatar: './github-sheep-face.png',
			total_points: 600,
			games_played: 2500,
			success_ratio: 24,
			detected_humans: 3,
			detected_robots: 89,
			mistaken_robot: 30
		},
		{
			username: 'Alice',
			avatar: './sheep-face.png',
			total_points: 1000,
			games_played: 1500,
			success_ratio: 66,
			detected_humans: 33,
			detected_robots: 45,
			mistaken_robot: 10
		},
		{
			username: 'Bob',
			avatar: './old-sheep-face.png',
			total_points: 900,
			games_played: 901,
			success_ratio: 99,
			detected_humans: 34,
			detected_robots: 44,
			mistaken_robot: 3
		},
		{
			username: 'Charlie',
			avatar: './openai-sheep-face.png',
			total_points: 888,
			games_played: 1000,
			success_ratio: 88,
			detected_humans: 53,
			detected_robots: 15,
			mistaken_robot: 46
		},
		{
			username: 'Doug',
			avatar: './facebook-sheep-face.png',
			total_points: 765,
			games_played: 2000,
			success_ratio: 38,
			detected_humans: 99,
			detected_robots: 0,
			mistaken_robot: 99
		},
		{
			username: 'Eddy',
			avatar: './github-sheep-face.png',
			total_points: 600,
			games_played: 2500,
			success_ratio: 24,
			detected_humans: 3,
			detected_robots: 89,
			mistaken_robot: 30
		},
		{
			username: 'Alice',
			avatar: './sheep-face.png',
			total_points: 1000,
			games_played: 1500,
			success_ratio: 66,
			detected_humans: 33,
			detected_robots: 45,
			mistaken_robot: 10
		},
		{
			username: 'Bob',
			avatar: './old-sheep-face.png',
			total_points: 900,
			games_played: 901,
			success_ratio: 99,
			detected_humans: 34,
			detected_robots: 44,
			mistaken_robot: 3
		},
		{
			username: 'Charlie',
			avatar: './openai-sheep-face.png',
			total_points: 888,
			games_played: 1000,
			success_ratio: 88,
			detected_humans: 53,
			detected_robots: 15,
			mistaken_robot: 46
		},
		{
			username: 'Doug',
			avatar: './facebook-sheep-face.png',
			total_points: 765,
			games_played: 2000,
			success_ratio: 38,
			detected_humans: 99,
			detected_robots: 0,
			mistaken_robot: 99
		},
		{
			username: 'Eddy',
			avatar: './github-sheep-face.png',
			total_points: 600,
			games_played: 2500,
			success_ratio: 24,
			detected_humans: 3,
			detected_robots: 89,
			mistaken_robot: 30
		},
		{
			username: 'Alice',
			avatar: './sheep-face.png',
			total_points: 1000,
			games_played: 1500,
			success_ratio: 66,
			detected_humans: 33,
			detected_robots: 45,
			mistaken_robot: 10
		},
		{
			username: 'Bob',
			avatar: './old-sheep-face.png',
			total_points: 900,
			games_played: 901,
			success_ratio: 99,
			detected_humans: 34,
			detected_robots: 44,
			mistaken_robot: 3
		},
		{
			username: 'Charlie',
			avatar: './openai-sheep-face.png',
			total_points: 888,
			games_played: 1000,
			success_ratio: 88,
			detected_humans: 53,
			detected_robots: 15,
			mistaken_robot: 46
		},
		{
			username: 'Doug',
			avatar: './facebook-sheep-face.png',
			total_points: 765,
			games_played: 2000,
			success_ratio: 38,
			detected_humans: 99,
			detected_robots: 0,
			mistaken_robot: 99
		},
		{
			username: 'Eddy',
			avatar: './github-sheep-face.png',
			total_points: 600,
			games_played: 2500,
			success_ratio: 24,
			detected_humans: 3,
			detected_robots: 89,
			mistaken_robot: 30
		},
		{
			username: 'Alice',
			avatar: './sheep-face.png',
			total_points: 1000,
			games_played: 1500,
			success_ratio: 66,
			detected_humans: 33,
			detected_robots: 45,
			mistaken_robot: 10
		},
		{
			username: 'Bob',
			avatar: './old-sheep-face.png',
			total_points: 900,
			games_played: 901,
			success_ratio: 99,
			detected_humans: 34,
			detected_robots: 44,
			mistaken_robot: 3
		},
		{
			username: 'Charlie',
			avatar: './openai-sheep-face.png',
			total_points: 888,
			games_played: 1000,
			success_ratio: 88,
			detected_humans: 53,
			detected_robots: 15,
			mistaken_robot: 46
		},
		{
			username: 'Doug',
			avatar: './facebook-sheep-face.png',
			total_points: 765,
			games_played: 2000,
			success_ratio: 38,
			detected_humans: 99,
			detected_robots: 0,
			mistaken_robot: 99
		},
		{
			username: 'Eddy',
			avatar: './github-sheep-face.png',
			total_points: 600,
			games_played: 2500,
			success_ratio: 24,
			detected_humans: 3,
			detected_robots: 89,
			mistaken_robot: 30
		},
		{
			username: 'Alice',
			avatar: './sheep-face.png',
			total_points: 1000,
			games_played: 1500,
			success_ratio: 66,
			detected_humans: 33,
			detected_robots: 45,
			mistaken_robot: 10
		},
		{
			username: 'Bob',
			avatar: './old-sheep-face.png',
			total_points: 900,
			games_played: 901,
			success_ratio: 99,
			detected_humans: 34,
			detected_robots: 44,
			mistaken_robot: 3
		},
		{
			username: 'Charlie',
			avatar: './openai-sheep-face.png',
			total_points: 888,
			games_played: 1000,
			success_ratio: 88,
			detected_humans: 53,
			detected_robots: 15,
			mistaken_robot: 46
		},
		{
			username: 'Doug',
			avatar: './facebook-sheep-face.png',
			total_points: 765,
			games_played: 2000,
			success_ratio: 38,
			detected_humans: 99,
			detected_robots: 0,
			mistaken_robot: 99
		},
		{
			username: 'Eddy',
			avatar: './github-sheep-face.png',
			total_points: 600,
			games_played: 2500,
			success_ratio: 24,
			detected_humans: 3,
			detected_robots: 89,
			mistaken_robot: 30
		}
	];

	// Holds table sort state.  Initialized to reflect table sorted by id column ascending.
	let sortBy = { col: 'success_ratio', ascending: true };

	$: sort = (column: string) => {
		if (sortBy.col == column) {
			sortBy.ascending = !sortBy.ascending;
		} else {
			sortBy.col = column;
			sortBy.ascending = true;
		}

		// Modifier to sorting function for ascending or descending
		let sortModifier = sortBy.ascending ? 1 : -1;

		let sort = <T>(a: Record<string, T>, b: Record<string, T>) =>
			a[column] < b[column] ? -1 * sortModifier : a[column] > b[column] ? 1 * sortModifier : 0;

		scores = scores.sort(sort);
	};

	export let podiumStubs = {
		first: { name: 'Alice', avatar: './openai-sheep-face.png' },
		second: { name: 'Bob', avatar: './sheep-face.png' },
		third: { name: 'Charlie', avatar: './facebook-sheep-face.png' }
	};
</script>


<header class="p-5 flex-grow-0 h-20 w-full max-w-3xl mx-auto flex justify-between">
	<a href="/" class="font-bold">Home</a>
	<a href="/me" class="font-bold">Settings</a>
</header>


<div class="w-full mx-auto text-center">
	<h1 class="text-3xl font-bold underline m-5">Leaderboard</h1>

	<div class="mx-auto w-fit flex flex-wrap justify-around">
		<div>
			<h2 class="text-xl font-bold m-5">Best Average Score</h2>
			<Podium {...podiumStubs} />
		</div>

		<div>
			<h2 class="text-xl font-bold m-5">Best Robot Hunters</h2>
			<Podium {...podiumStubs} />
		</div>

		<div>
			<h2 class="text-xl font-bold m-5">Best Human Detectors</h2>
			<Podium {...podiumStubs} />
		</div>

		<div>
			<h2 class="text-xl font-bold m-5">Best At Being Robots</h2>
			<Podium {...podiumStubs} />
		</div>
	</div>

	<div class="-mx-4 md:mx-auto mt-10 w-fit overflow-scroll">
		<table>
			<thead>
				<tr class="bg-amber-100">
					<th />
					<th
						on:click={() => {
							sort('success_ratio');
						}}>Average score</th
					>
					<th
						on:click={() => {
							sort('total_points');
						}}>Total Points</th
					>
					<th
						on:click={() => {
							sort('games_played');
						}}>Games Played</th
					>
					<th
						on:click={() => {
							sort('detected_humans');
						}}>Detected Human</th
					>
					<th
						on:click={() => {
							sort('detected_robots');
						}}>Detected Robot</th
					>
					<th
						on:click={() => {
							sort('mistaken_robot');
						}}>Mistaken for Robot</th
					>
				</tr>
			</thead>
			<tbody>
				{#each scores as row}
					<tr>
						<td id={row.username} class="flex gap-4">
							<img alt="{row.username}'s avatar" src={row.avatar} class="w-7 h-7 rounded-full" />
							<p class="h-fit my-auto text-left">{row.username}</p>
						</td>
						<td>{row.success_ratio / 100}</td>
						<td>{row.total_points}</td>
						<td>{row.games_played}</td>
						<td>{row.detected_humans}%</td>
						<td>{row.detected_robots}%</td>
						<td>{row.mistaken_robot}%</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>

	<p class="text-xs py-10" style="transform: skew(-7deg);">
		Top 100 by total points. Only includes players with at least 10 games.
	</p>
</div>

<style>
	th,
	td {
		@apply py-1 px-5;
	}
	tbody tr:hover {
		@apply bg-amber-100;
	}
</style>
