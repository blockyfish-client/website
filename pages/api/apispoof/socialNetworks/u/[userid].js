import NextCors from "nextjs-cors";

export default async function handler(req, res) {
	await NextCors(req, res, {
		methods: ["GET"],
		origin: "*",
		optionsSuccessStatus: 200
	});
	res.status(200).json([
		{
			id: 1,
			user_id: req.query.userid,
			platform_id: "dc",
			platform_user_id: "Discord",
			platform_user_url: null,
			verified: false,
			created_at: "2022-05-22T17:17:29.000Z",
			updated_at: "2023-07-11T00:50:06.000Z"
		},
		{
			id: 2,
			user_id: req.query.userid,
			platform_id: "yt",
			platform_user_id: "YouTube",
			platform_user_url: "https://www.youtube.com/@DeeeepioHacker",
			verified: true,
			created_at: "2022-05-22T17:18:15.000Z",
			updated_at: "2022-12-20T18:43:23.000Z"
		}
	]);
}
