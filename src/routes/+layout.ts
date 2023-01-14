import type { PageLoad } from './$types';

export const load: PageLoad = async (load) => {
	const login_name = await load.fetch('/api/login');
	return {
		login_name: await login_name.json()
	};
};
