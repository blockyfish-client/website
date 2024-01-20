export default function handler(req, res) {
	res.status(200).json({ statusCode: 403, message: "Forbidden resource", error: "Forbidden" });
}
