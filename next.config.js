/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: [
			'raw.githubusercontent.com',
			'upload.wikimedia.org',
			'tailwindcss.com',
			'external-content.duckduckgo.com',
			'avatars.githubusercontent.com',
			'cdn4.iconfinder.com',
			'trpc.io',
			'vitejs.dev',
			'user-images.githubusercontent.com',
		],
	},
};

module.exports = nextConfig;
