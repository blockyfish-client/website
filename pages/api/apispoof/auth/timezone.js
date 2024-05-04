import NextCors from "nextjs-cors";

export default async function handler(req, res) {
	await NextCors(req, res, {
		methods: ["GET"],
		origin: "*",
		optionsSuccessStatus: 200,
	});
	res.status(200).json({
		t: "6e316a4357697248293c7e50604e464170675e3d37463742486e453c336b327175574655",
	});
}
