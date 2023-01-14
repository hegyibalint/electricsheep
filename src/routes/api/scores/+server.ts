import { json } from '@sveltejs/kit';

/** @type {import("./$types").RequestHandler} */
export function GET({ url }) {
	return json([
		{
			name: 'Alice',
			score: 5
		},
		{
			name: 'Bob',
			score: 5
		},
		{
			name: 'Charlie',
			score: 5
		}
	]);
}
