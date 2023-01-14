import type { PageLoad } from './$types';

export const load: PageLoad = async (load) => {
	const scores = await load.fetch('/api/scores');
	return {
		scores: await scores.json()
	};
};
