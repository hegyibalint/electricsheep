import { Miniflare, Log, LogLevel } from 'miniflare';
import { dev } from '$app/environment';

export const fallBackPlatformToMiniFlareInDev = async (_platform: App.Platform | undefined) => {
	if (!dev) return _platform;
	if (_platform) return _platform;

	console.log('Initializing miniflare');
	const mf = new Miniflare({
		log: new Log(LogLevel.INFO),
		kvPersist: '.miniflare/kv-data', // Use filebase or in memory store
		//kvNamespaces: ['ES_TEST_NAMESPACE'], //Declare array with NameSpaces
		wranglerConfigPath: true,
		globalAsyncIO: true,
		globalTimers: true,
		globalRandom: true,

		script: `
		addEventListener("fetch", (event) => {
			event.waitUntil(Promise.resolve(event.request.url));
			event.respondWith(new Response(event.request.headers.get("X-Message")));
		});
		addEventListener("scheduled", (event) => {
			event.waitUntil(Promise.resolve(event.scheduledTime));
		});
		`
	});

	const env = (await mf.getBindings()) as KV;
	return { env };
};
