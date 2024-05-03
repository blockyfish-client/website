import NextCors from "nextjs-cors";

export default async function handler(req, res) {
	await NextCors(req, res, {
		methods: ["GET"],
		origin: "*",
		optionsSuccessStatus: 200,
	});
	res.status(200).json(
		// [
		// 	{ id: "AS", latitude: 35.5826, longitude: 139.746, gamemodes: ["6", "5", "2"] },
		// 	{ id: "EU", latitude: 52.35, longitude: 4.9167, gamemodes: ["1", "2", "5"] },
		// 	{ id: "LAS", latitude: -23.5338, longitude: -46.6253, gamemodes: ["1"] },
		// 	{ id: "NAE", latitude: 40, longitude: -74, gamemodes: ["1", "2", "5", "6"] },
		// 	{ id: "OCE", latitude: -33.9256, longitude: 151.191, gamemodes: ["1"] }
		// ]
		[
			{
				id: "AS",
				latitude: 35.5826,
				longitude: 139.746,
				gamemodes: ["6"],
			},
			{
				id: "EU",
				latitude: 52.35,
				longitude: 4.9167,
				gamemodes: ["1"],
			},
			{
				id: "LAS",
				latitude: -23.5338,
				longitude: -46.6253,
				gamemodes: ["1"],
			},
			{
				id: "NAE",
				latitude: 40,
				longitude: -74,
				gamemodes: ["1", "6"],
			},
			{
				id: "OCE",
				latitude: -33.9256,
				longitude: 151.191,
				gamemodes: ["1"],
			},
		]
	);
}
