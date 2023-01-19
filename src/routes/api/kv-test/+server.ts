import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { v4 as uuidv4 } from 'uuid';

export const GET: RequestHandler = async ({ platform }) => {
	const ES_TEST_NAMESPACE = platform?.env?.ES_TEST_NAMESPACE;

	await platform?.env?.ES_TEST_NAMESPACE.put(String(uuidv4()), JSON.stringify(new Date()), {
		metadata: { someMetadataKey: 'someMetadataValue' }
	});

	return json(await ES_TEST_NAMESPACE?.list());
};
