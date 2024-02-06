import { Quicksand } from "next/font/google";
import "./globals.css";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const quicksand = Quicksand({ subsets: ["latin"] });

export const metadata = {
	title: "Blockyfish Client",
	description: "Deeeep.io's best client mod"
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
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
