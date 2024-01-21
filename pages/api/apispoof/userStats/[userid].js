import NextCors from "nextjs-cors";

export default async function handler(req, res) {
	await NextCors(req, res, {
		methods: ["GET"],
		origin: "*",
		optionsSuccessStatus: 200
	});
	res.status(200).json({
		user_id: req.query.userid,
		rank_kc: 1,
		rank_kc_dirty: false,
		rank_kc_updated_at: "2024-01-21T02:44:05.000Z",
		rank_pc: 1,
		rank_pc_dirty: false,
		rank_pc_updated_at: "2024-01-21T02:50:02.495Z",
		rank_hs: 1,
		rank_hs_dirty: false,
		rank_hs_updated_at: "2024-01-20T20:47:58.000Z",
		created_at: "2024-01-21T02:44:07.000Z",
		updated_at: "2024-01-21T02:50:02.495Z",
		pd: {
			played: 420,
			won: 420,
			ratio: 100
		}
	});
}
