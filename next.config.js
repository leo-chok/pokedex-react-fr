/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ['raw.githubusercontent.com', 's3.pokeos.com'],
	},
}

module.exports = nextConfig
