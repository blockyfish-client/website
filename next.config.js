/** @type {import('next').NextConfig} */
const nextConfig = {
	async rewrites() {
		return [
			{
				source: "/docs/:slug*",
				destination: "/retype/:slug*/index.html"
			},
			{
				source: "/docs/resources/:slug*",
				destination: "/retype/resources/:slug*"
			}
		];
	}
};

module.exports = nextConfig;
