import { json } from '@sveltejs/kit';

export function GET() {
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
