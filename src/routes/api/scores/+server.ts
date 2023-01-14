import { json, type RequestEvent, type RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = ({ url }: RequestEvent) => {
	return json({
		"tier_1": {
			"human": {
				name: 'Alice',
				score: 88
			},
			"model": {
				name: 'ChatGPT',
				score: 91
			}
		},
		"tier_2": {
			"human": {
				name: 'Bob',
				score: 91
			},
			"model": {
				name: 'GPT-3 DaVinci',
				score: 78
			}
		},
		"tier_3": {
			"human": {
				name: 'Charlie',
				score: 97
			},
			"model": {
				name: 'nanoGPT',
				score: 33
			}
		},
		"tier_4": {
			"human": {
				name: 'Doug',
				score: 100
			},
			"model": {
				name: 'ELIZA',
				score: 10
			}
		}
	});
}
