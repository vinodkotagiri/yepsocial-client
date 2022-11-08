/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			backgroundImage: {
				'login-bg': "url('/src/assets/images/login-people-cover.jpg')",
				'register-bg': "url('/src/assets/images/register-bg.jpg')",
			},
		},
	},
	plugins: [require('tailwind-gradient-mask-image')],
}
