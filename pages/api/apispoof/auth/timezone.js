import NextCors from "nextjs-cors";

export default async function handler(req, res) {
	await NextCors(req, res, {
		methods: ["GET"],
		origin: "*",
		optionsSuccessStatus: 200
	});
	res.status(200).json({ t: "52765d755740523629524a297d453232296e3668635143506d405b487049734f705b546f" });
}
