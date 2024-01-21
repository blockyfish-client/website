import NextCors from "nextjs-cors";

export default async function handler(req, res) {
	await NextCors(req, res, {
		methods: ["GET"],
		origin: "*",
		optionsSuccessStatus: 200
	});
	res.status(200).json([
		{
			id: "dQw4w9WgXcQ",
			title: "Never gonna give you up",
			visible: true,
			published_at: "2024-01-21T01:35:00.000Z",
			views: 100
		},
		{
			id: "dQw4w9WgXcQ",
			title: "Never gonna give you up",
			visible: true,
			published_at: "2024-01-21T01:35:00.000Z",
			views: 100
		},
		{
			id: "dQw4w9WgXcQ",
			title: "Never gonna give you up",
			visible: true,
			published_at: "2024-01-21T01:35:00.000Z",
			views: 100
		},
		{
			id: "dQw4w9WgXcQ",
			title: "Never gonna give you up",
			visible: true,
			published_at: "2024-01-21T01:35:00.000Z",
			views: 100
		}
	]);
}
