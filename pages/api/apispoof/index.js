import NextCors from "nextjs-cors";

export default async function handler(req, res) {
	await NextCors(req, res, {
		methods: ["GET"],
		origin: "*",
		optionsSuccessStatus: 200
	});
	res.status(200).send(
		"The following spoofed Deeeep.io API responses are available:\n" +
			[
				"/animals",
				"/auth/me",
				"/auth/timezone",
				"/forumPosts/[region]/[postid]",
				"/forumPosts/[region]/[postid]/comments",
				"/forumPosts/[region]",
				"/hosts",
				"/leaderboard",
				"/maps/[id]/packs",
				"/playHistories/u/[userid]",
				"/regions",
				"/servers/l",
				"/socialNetworks/u/[userid]",
				"/twitch",
				"/users/[userid]",
				"/users/u/[username]",
				"/userStats/[userid]",
				"/videos"
			].join("\n")
	);
}
