/** @type {import('./$types').PageServerLoad} */
export async function load({ cookies }) {
}

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		var guess = data.get('guess');

		// const guessRequest = await fetch('/api/guess');
		// fetch(
		// 	"/api/guess",
		
		// )
	}
};
