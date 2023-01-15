import type { PageLoad } from './$types';

export const load: PageLoad = async (load) => {
	const chat = await load.fetch('/api/chat');
	return {
		chat: await chat.json()
	};
};
