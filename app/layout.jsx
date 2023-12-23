import { Quicksand } from "next/font/google";
import "./globals.css";

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
					overflowX: "hidden",
					overflowY: "scroll"
				}}
			>
				{children}
			</body>
		</html>
	);
}
