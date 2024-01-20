import NextCors from "nextjs-cors";

export default async function handler(req, res) {
	await NextCors(req, res, {
		methods: ["GET"],
		origin: "*",
		optionsSuccessStatus: 200
	});
	res.status(200).send(
		"The following spoofed Deeeep.io API responses are available:\n" + ["/regions", "/hosts?servers=1", "/maps/11953/packs", "/animals", "/auth/me", "/servers/l", "/auth/timezone"].join("\n")
	);
}
