export default async function handler(req, res) {
	fetch(
		`https://www.googleapis.com/youtube/v3/search?key=${process.env.YT_API_KEY}&channelId=${process.env.YT_CHANNEL_ID}&part=id&order=date&maxResults=1`
	)
		.then((response) => response.json())
		.then((json) => {
			res.status(200).json({
				id: json.items[0].id.videoId || "",
			});
		});
}
