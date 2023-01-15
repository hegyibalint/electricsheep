import { json, type RequestEvent, type RequestHandler } from '@sveltejs/kit';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const GET = () => {
	return json({
		human: {
			name: 'Alice',
			score: 88
		},
		model: {
			name: 'ChatGPT',
			score: 91
		}
	});
};
