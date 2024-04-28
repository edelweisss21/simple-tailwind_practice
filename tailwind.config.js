/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['**/*.{html,js}'],
	theme: {
		extend: {
			fontFamily: {
				roboto: ['Roboto, sans-serif'],
				ubuntu: ['Ubuntu, sans-serif'],
			},

			colors: {
				bluegray: '#4C5866',
				lightpurple: '#85859B',
				darkpurple: '#7875FE',
				gray6: '#666666',
				lightgray: '#B5B5BD',
				gray3: '#333333',
				grayD: '#DDDDDD',
				grayBG: '#f7f7f7',
				graybefore: '#C0C0C0',
				silver: '#B5B5BD',
				darkblue: '#4C5866',
			},
		},
	},
	plugins: [],
};
