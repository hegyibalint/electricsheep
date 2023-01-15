import { json } from '@sveltejs/kit';

export function GET() {
	return json(
		{
			name: 'Alice',
			last_login: 'Soon enough',
		});
}
