import type { PageLoad } from './$types';

export const load: PageLoad = async (load) => {
	const me = await load.fetch('/api/me');
	return {
		me: await me.json()
	};
};
