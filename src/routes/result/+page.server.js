/** @type {import('./$types').PageServerLoad} */
export async function load({ cookies }) {
	//const user = await db.getUserFromSession(cookies.get('sessionid'));
	//return { user };
}

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		console.log(data.get('guess'));
		return { guess: data.get('guess') };
	}
};

  