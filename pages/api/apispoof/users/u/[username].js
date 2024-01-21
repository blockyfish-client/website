import NextCors from "nextjs-cors";

export default async function handler(req, res) {
	await NextCors(req, res, {
		methods: ["GET"],
		origin: "*",
		optionsSuccessStatus: 200
	});
	res.status(200).json({
		id: 5,
		username: req.query.username,
		description: "This account does not exist",
		about: "Dummy account",
		team_id: null,
		team_role: null,
		date_created: "1970-01-01T00:00:01.000Z",
		date_last_played: new Date(Date.now() - 6942069).toISOString(),
		profile_views: 69000,
		kill_count: 69420,
		play_count: 420,
		highest_score: 6942069,
		picture: null,
		displayPicture: true,
		active: true,
		ban_message: null,
		coins: 69420,
		tier: 10,
		xp: 4206969,
		migrated: true,
		verified: false,
		beta: false
	});
}
