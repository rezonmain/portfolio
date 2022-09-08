/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: [
			'raw.githubusercontent.com',
			'upload.wikimedia.org',
			'www.nstinfotech.com',
			'external-content.duckduckgo.com',
			'avatars.githubusercontent.com',
			'cdn4.iconfinder.com',
		],
	},
};

module.exports = nextConfig;
