import type { PageLoad } from './$types';

interface Me {
	name: string;
	avatar: string;
	email: string;
	last_login: string;
	balance: number;
	currency_symbol: string;
	rank: number;
	games_left: number;
	games_played_against_human: number;
	games_played_against_robot: number;
	success_guess_robot: number;
	success_guess_human: number;
	success_confuse_human: number;
}

export const load: PageLoad = async (load) => {
	const meRequest = await load.fetch('/api/me');

	return {
		me: await meRequest.json<Me>()
	};
};
