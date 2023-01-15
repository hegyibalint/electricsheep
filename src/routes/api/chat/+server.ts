import { json } from '@sveltejs/kit';

export function GET() {
	return json({
		messages: [
			{
				message: "ciao",
				author: "opponent"
			},
			{
				message: "ciao a te, come stai?",
				author: "player"
			},
			{
				message: "tutto bene, grazie.",
				author: "opponent"
			}
		]
	});
}
