const config = {
	mode: 'jit',
	purge: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				charcoal: '#303030'
			}
		}
	},
	plugins: [
		require('@tailwindcss/typography')
	]
};

module.exports = config;
