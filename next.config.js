/** @type {import('next').NextConfig} */
const nextConfig = {
	async rewrites() {
		return [
			{
				source: "/docs/:slug*",
				destination: "/retype/:slug*/index.html"
			},
			{
				source: "/resources/:slug*",
				destination: "/retype/resources/:slug*"
			},
			{
				source: "/apispoof/:slug*",
				destination: "/api/apispoof/:slug*"
			}
		];
	}
};

module.exports = nextConfig;
