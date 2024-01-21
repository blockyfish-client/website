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
			post_id: req.query.postid,
			parent_id: null,
			user_id: 5,
			text: "You should put no sexual harassment or grooming",
			likes: 10,
			created_at: "2024-01-02T01:25:28.000Z",
			updated_at: "2024-01-02T01:25:28.000Z",
			deleted_at: null,
			pinned: false,
			user: {
				id: 5,
				username: "Dummy",
				description: null,
				about: null,
				team_id: null,
				team_role: null,
				date_created: "2022-10-06T13:07:34.000Z",
				date_last_played: "2024-01-21T02:52:19.000Z",
				kill_count: 0,
				play_count: 0,
				highest_score: 0,
				picture: null,
				displayPicture: true,
				active: true,
				ban_message: null,
				coins: 0,
				tier: 1,
				xp: 420,
				migrated: false,
				verified: false,
				beta: false,
				forum_role: 0,
				forum_ban_by: null,
				forumRoles: []
			}
		}
	]);
}
