<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	data.me.games_played = data.me.games_played_against_human + data.me.games_played_against_robot;
	data.me.failure_guess_human = data.me.games_played_against_human - data.me.success_guess_human;
	data.me.failure_guess_robot = data.me.games_played_against_robot - data.me.success_guess_robot;
	data.me.success_guess = data.me.success_guess_human + data.me.success_guess_robot;
</script>

<header class="p-5 flex-grow-0 h-20 w-full max-w-3xl mx-auto flex justify-between">
	<a href="/" class="font-bold">Home</a>
	<div />
</header>

<div class="mx-auto max-w-3xl text-center">
	<h1 class="text-3xl font-bold underline m-5">Settings</h1>

	<div class="flex flex-wrap gap-5 justify-between">
		<div class="w-80 flex-grow border-2 border-zinc-200 p-3">
			<h2 id="user-data" class="font-bold underline m-5">User Data</h2>
			<div class="table mx-auto text-left">
				<div class="table-row-group">
					<div class="table-row">
						<div class="table-cell"><p>Username:</p></div>
						<div class="table-cell"><p>{data.me.name}</p></div>
					</div>
				</div>
				<div class="table-row-group">
					<div class="table-row">
						<div class="table-cell"><p>Email:</p></div>
						<div class="table-cell"><p>{data.me.email}</p></div>
					</div>
				</div>
				<div class="table-row-group">
					<div class="table-row">
						<div class="table-cell"><p>Status:</p></div>
						<div class="table-cell">
							<div class="flex justify-between">
								<p>Active</p>
								<a href="#" class="text-right">Delete account</a>
							</div>
						</div>
					</div>
				</div>
				<div class="table-row-group">
					<div class="table-row">
						<div class="table-cell h-full align-middle p-1"><p class="">Avatar:</p></div>
						<div class="table-cell p-1">
							<div class="flex align-middle">
								<img alt="user's avatar" src={data.me.avatar} class="w-20 h-20 rounded-full" />
								<a href="#" class="my-auto mx-5">Change</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="w-80 flex-grow border-2 border-zinc-200 p-3">
			<h2 id="billing" class="font-bold underline m-5">Billing</h2>
			<div class="table mx-auto text-left">
				<div class="table-row-group">
					<div class="table-row">
						<div class="table-cell"><p>Balance:</p></div>
						<div class="table-cell">
							<div class="flex justify-between">
								<p>{data.me.balance}{data.me.currency_symbol}</p>
								<a href="#" class="text-right">Details</a>
							</div>
						</div>
					</div>
				</div>
				<div class="table-row-group">
					<div class="table-row">
						<div class="table-cell"><p>Games left:</p></div>
						<div class="table-cell">
							<div class="flex justify-between">
								<p>{data.me.games_left}</p>
								<a href="#" class="text-right">Buy more</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="w-80 flex-grow border-2 border-zinc-200 p-3">
			<h2 id="stats" class="font-bold underline m-5">Stats</h2>
			<div class="table mx-auto text-left">
				<div class="table-row-group">
					<div class="table-row">
						<div class="table-cell"><p>Rank:</p></div>
						<div class="table-cell"><p># {data.me.rank}</p></div>
					</div>
				</div>
				<div class="table-row-group">
					<div class="table-row">
						<div class="table-cell"><p>Total Points:</p></div>
						<div class="table-cell">
							<p>{data.me.success_guess + data.me.success_confuse_human}</p>
						</div>
					</div>
				</div>
				<div class="table-row-group">
					<div class="table-row">
						<div class="table-cell"><p>Games Played:</p></div>
						<div class="table-cell"><p>{data.me.games_played}</p></div>
					</div>
				</div>
				<div class="table-row-group">
					<div class="table-row">
						<div class="table-cell"><p>... against humans:</p></div>
						<div class="table-cell"><p>{data.me.games_played_against_human}</p></div>
					</div>
				</div>
				<div class="table-row-group">
					<div class="table-row">
						<div class="table-cell"><p>... against robots:</p></div>
						<div class="table-cell"><p>{data.me.games_played_against_robot}</p></div>
					</div>
				</div>
				<div class="table-row-group">
					<div class="table-row">
						<div class="table-cell"><p>Opponent classified correctly:</p></div>
						<div class="table-cell"><p>{data.me.success_guess}</p></div>
					</div>
				</div>
				<div class="table-row-group">
					<div class="table-row">
						<div class="table-cell"><p>... as human:</p></div>
						<div class="table-cell"><p>{data.me.success_guess_human}</p></div>
					</div>
				</div>
				<div class="table-row-group">
					<div class="table-row">
						<div class="table-cell"><p>... as robot:</p></div>
						<div class="table-cell"><p>{data.me.success_guess_robot}</p></div>
					</div>
				</div>
				<div class="table-row-group">
					<div class="table-row">
						<div class="table-cell"><p>You got confused for a robot:</p></div>
						<div class="table-cell"><p>{data.me.success_confuse_human}</p></div>
					</div>
				</div>
			</div>

			<h2 id="confusion-matrix" class="font-bold underline m-5">
				<a href="https://en.wikipedia.org/wiki/Confusion_matrix">Confusion matrix</a>
			</h2>
			<div class="table confusion-matrix mx-auto text-center max-w-fit mb-5">
				<div class="table-row-group">
					<div class="table-row">
						<div class="table-cell" />
						<div class="table-cell">Guess Human</div>
						<div class="table-cell">Guess Robot</div>
					</div>
				</div>
				<div class="table-row-group">
					<div class="table-row">
						<div class="table-cell">Is Human</div>
						<div class="table-cell">{data.me.success_guess_human}</div>
						<div class="table-cell">{data.me.failure_guess_human}</div>
					</div>
				</div>
				<div class="table-row-group">
					<div class="table-row">
						<div class="table-cell">Is Robot</div>
						<div class="table-cell">{data.me.failure_guess_robot}</div>
						<div class="table-cell">{data.me.success_guess_robot}</div>
					</div>
				</div>
			</div>

			<a href="/chat" class="m-auto">Play again</a>
		</div>
	</div>
</div>

<style>
	.table {
		@apply w-full;
	}
	.confusion-matrix {
		@apply border-t-2 border-l-2 border-zinc-500;
	}
	.confusion-matrix .table-cell {
		@apply border-b-2 border-r-2 border-zinc-500 p-2;
	}
	.table-cell {
		@apply px-2;
	}
</style>
