/** @type {import('@sveltejs/kit').Config} */

import preprocess from 'svelte-preprocess';
import path from 'path';
import adapter from '@sveltejs/adapter-static';

const config = {
	kit: {
		adapter: adapter({
			// default options are shown
			pages: 'S3',
			assets: 'S3',
			fallback: null
		}),
		vite: {
			mode: process.env.MODE || 'development',
			resolve: {
				alias: {
					$src: path.resolve('./src/')
				}
			}
		}
	},

	preprocess: [
		preprocess({
			postcss: true
		})
	]
};

export default config;
