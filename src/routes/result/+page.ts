import type { PageLoad } from './$types';

export const load: PageLoad = async (load) => {
	const opponent = await load.fetch('/api/result');
	return await opponent.json();
};