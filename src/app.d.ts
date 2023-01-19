// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare global {
	interface KV {
		ES_TEST_NAMESPACE: KVNamespace;
	}

	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		interface Platform {
			env?: KV;
		}
	}
}

export {};
