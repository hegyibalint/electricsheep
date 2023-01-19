import type { PageLoad } from './$types';

interface Me {
	name: string;
	email: string;
}

export const load: PageLoad = async (load) => {
	const meRequest = await load.fetch('/api/me');

	return {
		me: await meRequest.json<Me>()
	};
};
