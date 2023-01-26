import type { PageLoad } from './$types';

interface Chat {
	messages: [Message]
}

interface Message {
	content: string;
	author: string;
}

export const load: PageLoad = async (load) => {
	const meRequest = await load.fetch('/api/chat');

	return {
		chat: await meRequest.json<Chat>()
	};
};
