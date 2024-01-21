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
			forum_id: req.query.region,
			user_id: 1,
			category: "general",
			title: "The forums does not exist",
			text: "The forum feature is currently not available",
			comment_count: 69,
			likes: 420,
			created_at: "2024-01-01T19:53:26.000Z",
			updated_at: "2024-01-01T19:53:26.000Z",
			deleted_at: null,
			views: 9999,
			pinned: true,
			user: {
				id: 1,
				username: "Forum_Overlord",
				description: null,
				about: null,
				team_id: null,
				team_role: null,
				date_created: "1970-01-01T00:00:01.000Z",
				date_last_played: new Date(Date.now() - 6942069).toISOString(),
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
				verified: true,
				beta: false,
				forum_role: 0,
				forum_ban_by: null,
				forumRoles: [
					{
						forum_id: req.query.region,
						user_id: 1,
						role: 4, // 2 is moderator, 4 is admin
						created_at: "2022-06-08T22:49:20.000Z",
						updated_at: "2022-06-08T22:49:21.000Z"
					}
				]
			}
		}
	]);
}
