import { json } from '@sveltejs/kit';

export const GET: RequestHandler = ({ url }: RequestEvent) => {
	return json({
		username: 'Alice',
		email: 'alice@electricsheep.com',
		last_login: 'A moment ago',
		stats: {
			tier_1: {
				"total_games": 10000,
				"total_points": 5000,
				"discover_opponent": 2000,
				"got_misclassified": 3000,
			},
			tier_2: {
				"total_games": 10000,
				"total_points": 5000,
				"discover_opponent": 2000,
				"got_misclassified": 3000,
			},
			tier_3: {
				"total_games": 10000,
				"total_points": 5000,
				"discover_opponent": 2000,
				"got_misclassified": 3000,
			}
		}

	});
};
