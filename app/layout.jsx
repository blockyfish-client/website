import { Quicksand } from "next/font/google";
import "./globals.css";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const quicksand = Quicksand({ subsets: ["latin"] });

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				<title>Blockyfish Client</title>
				<meta
					name="description"
					content="Deeeep.io's best client mod for hacks, cheats, and other neat quality-of-life features"
				/>

				<meta
					property="og:url"
					content="https://blockyfish.vercel.app/"
				/>
				<meta
					property="og:type"
					content="website"
				/>
				<meta
					property="og:title"
					content="Blockyfish Client"
				/>
				<meta
					property="og:description"
					content="Deeeep.io's best client mod for hacks, cheats, and other neat quality-of-life features"
				/>

				<meta
					property="og:image"
					content="https://blockyfish.vercel.app/icon64.png"
				/>

				<meta
					name="twitter:card"
					content="summary_large_image"
				/>
				<meta
					property="twitter:domain"
					content="blockyfish.vercel.app"
				/>
				<meta
					property="twitter:url"
					content="https://blockyfish.vercel.app/"
				/>
				<meta
					name="twitter:title"
					content="Blockyfish Client"
				/>
				<meta
					name="twitter:description"
					content="Deeeep.io's best client mod for hacks, cheats, and other neat quality-of-life features"
				/>
				<meta
					name="twitter:image"
					content="https://blockyfish.vercel.app/icon64.png"
				/>
			</head>
			<body
				className={quicksand.className}
				style={{
					overflowX: "hidden"
				}}
			>
				{children}
				<Analytics />
				<SpeedInsights />
			</body>
		</html>
	);
}
