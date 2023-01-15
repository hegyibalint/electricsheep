import { json } from '@sveltejs/kit';

export const GET: RequestHandler = ({ url }: RequestEvent) => {
	return json({
		messages: [
			{
				message: 'ciao',
				author: 'opponent'
			},
			{
				message: 'ciao a te, come stai?',
				author: 'player'
			},
			{
				message: 'tutto bene, grazie.',
				author: 'opponent'
			}
		]
	});
};
