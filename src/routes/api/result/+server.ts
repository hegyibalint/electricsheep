import { json } from '@sveltejs/kit';

export const GET = () => {
	return json({
		opponent: "human",
		rank: 33
	});
};
