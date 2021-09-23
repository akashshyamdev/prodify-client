const path = require(`path`);

module.exports = {
	webpack: {
		alias: {
			'@': path.resolve(__dirname, 'src/'),
			'@components': path.resolve(__dirname, 'src/components'),
			'@services': path.resolve(__dirname, 'src/services'),
			'@types': path.resolve(__dirname, 'src/types'),
		},
	},
	style: {
		postcss: {
			plugins: [
				require('tailwindcss'),
				require('autoprefixer'),
			],
		},
	},
};
