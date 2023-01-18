import { syncedStore, getYjsDoc } from "@syncedstore/core";


/** @type {import('./$types').PageServerLoad} */
export async function load({ cookies }) {
	
	const store = syncedStore({ players_pool: [] });
}

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		console.log(data.get('user_id'));

		store.players_pool.push(user_id);

	}
};

  