import { defineConfig } from 'orval';
export default defineConfig({
	api: {
		input: 'http://localhost:4000/api/v1/docs/json',
		output: {
			target: './app/http/api.ts',
			client: 'axios',
			httpClient: 'axios',
			clean: true,
			baseUrl: 'http://localhost:4000',
			override: {
				fetch: {
					includeHttpResponseReturnType: false,
				},
			},
		},
	},
});
