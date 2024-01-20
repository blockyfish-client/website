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
			}
		];
	}
};

module.exports = nextConfig;
