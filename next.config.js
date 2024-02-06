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
			},
			{
				source: "/resources/:slug*",
				destination: "/docs/resources/:slug*"
			},
			{
				source: "/tutorial/:slug*",
				destination: "/docs/tutorial/:slug*"
			}
		];
	}
};

module.exports = nextConfig;
