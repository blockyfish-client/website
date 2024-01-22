import ipLocation from "iplocation";
const requestIp = require("request-ip");
import NextCors from "nextjs-cors";

export default async function handler(req, res) {
	await NextCors(req, res, {
		methods: ["GET"],
		origin: "*",
		optionsSuccessStatus: 200
	});
	try {
		const ipData = await ipLocation(requestIp.getClientIp(req));
		res.status(200).json([ipData.latitude, ipData.longitude, ipData.country.code]);
	} catch {
		res.status(200).json([37.751, -97.822, "US"]);
	}
}
