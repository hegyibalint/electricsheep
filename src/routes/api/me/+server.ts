import { json } from '@sveltejs/kit';

export const GET: RequestHandler = ({ url }: RequestEvent) => {
	return json(
		{
			name: 'Alice',
			last_login: 'Soon enough',
		});
}
