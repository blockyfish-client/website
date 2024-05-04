import PenguinGravity from "./components/penguinGravity";
import { Navbar } from "./components/navbar";
import Twemoji from "./components/twemoji";
import Link from "next/link";
import { DownloadScrollButton } from "./clientside";

export default function Home() {
	return (
		<main className="flex flex-col items-center bg-gray-900 px-4 pb-8 w-screen min-h-screen text-white">
			<div className="relative flex flex-col justify-center items-center w-full select-none cover-height">
				<PenguinGravity />
				<h1 className="text-7xl [line-height:1.25] z-10 bg-clip-text bg-gradient-to-tr from-teal-400 to-blue-300 font-extrabold text-transparent">
					Blockyfish
				</h1>
				<h2 className="z-10 mb-4 text-center">
					Deeeep.io's best client mod
				</h2>

				<DownloadScrollButton />
			</div>
			<Navbar />

			<div className="flex flex-col items-center gap-4 mt-16 w-full max-w-5xl">
				<p className="bg-clip-text bg-gradient-to-r from-emerald-200 to-emerald-300 font-medium text-4xl text-transparent">
					Features
				</p>
				<div className="flex flex-wrap justify-center gap-4 mb-24 w-fit">
					{[
						{
							title: "🚀 Easy installation",
							text: "Installation is super easy with the one-click installer",
						},
						{
							title: "🧩 Plugins",
							text: "Robust plugins system to customize your experience",
						},
						{
							title: "🚫 Ad-free",
							text: "Includes adblock for uninterrupted gameplay",
						},
						{
							title: "🛠️ For developers",
							text: "Easy plugins creation for developers",
						},
					].map((e) => (
						<div
							key={e.title}
							className="border-[#fff1] hover:border-[#fff4] bg-gray-800 p-4 border rounded-md w-64 h-36 transition-colors"
						>
							<p className="font-medium text-emerald-200 text-xl">
								<Twemoji text={e.title} />
							</p>
							<p className="mt-3">{e.text}</p>
						</div>
					))}
				</div>

				<div id="download" className="flex flex-col items-center gap-4">
					<p className="bg-clip-text bg-gradient-to-r from-orange-200 to-orange-300 font-medium text-4xl text-transparent">
						Download
					</p>
					<Link
						className="flex justify-center items-center gap-3 bg-blue-500 hover:bg-blue-600 shadow-lg px-4 py-3 border-b-4 border-blue-600 hover:border-blue-700 rounded-2xl text-white transition-colors"
						href={
							"https://github.com/blockyfish-client/desktop-client/releases/download/v3.2.0/blockyfish-client-win-3.2.0.exe"
						}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							fill="currentColor"
							viewBox="0 0 16 16"
						>
							<title>🪟</title>
							<path d="M6.555 1.375 0 2.237v5.45h6.555zM0 13.795l6.555.933V8.313H0v5.482zm7.278-5.4.026 6.378L16 16V8.395H7.278zM16 0 7.33 1.244v6.414H16z" />
						</svg>
						Download for Windows (x64)
					</Link>
					<Link
						className="flex justify-center items-center gap-3 bg-blue-500 hover:bg-blue-600 shadow-lg px-4 py-3 border-b-4 border-blue-600 hover:border-blue-700 rounded-2xl text-white transition-colors"
						href={
							"https://github.com/blockyfish-client/desktop-client/releases/download/v3.2.0/blockyfish-client-mac-3.2.0.dmg"
						}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							fill="currentColor"
							viewBox="0 0 16 16"
						>
							<title>🍎</title>
							<path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282" />
							<path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282" />
						</svg>
						Download for MacOS (Universal)
					</Link>
					<Link
						className="flex justify-center items-center gap-3 bg-blue-500 hover:bg-blue-600 shadow-lg px-4 py-3 border-b-4 border-blue-600 hover:border-blue-700 rounded-2xl text-white transition-colors"
						href={
							"https://github.com/blockyfish-client/desktop-client/releases/download/v3.2.0/blockyfish-client-linux-3.2.0.tar.xz"
						}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							fill="currentColor"
							viewBox="0 0 24 24"
						>
							<title>🐧</title>
							<path d="M14.62,8.35C14.2,8.63 12.87,9.39 12.67,9.54C12.28,9.85 11.92,9.83 11.53,9.53C11.33,9.37 10,8.61 9.58,8.34C9.1,8.03 9.13,7.64 9.66,7.42C11.3,6.73 12.94,6.78 14.57,7.45C15.06,7.66 15.08,8.05 14.62,8.35M21.84,15.63C20.91,13.54 19.64,11.64 18,9.97C17.47,9.42 17.14,8.8 16.94,8.09C16.84,7.76 16.77,7.42 16.7,7.08C16.5,6.2 16.41,5.3 16,4.47C15.27,2.89 14,2.07 12.16,2C10.35,2.05 9,2.81 8.21,4.4C8,4.83 7.85,5.28 7.75,5.74C7.58,6.5 7.43,7.29 7.25,8.06C7.1,8.71 6.8,9.27 6.29,9.77C4.68,11.34 3.39,13.14 2.41,15.12C2.27,15.41 2.13,15.7 2.04,16C1.85,16.66 2.33,17.12 3.03,16.96C3.47,16.87 3.91,16.78 4.33,16.65C4.74,16.5 4.9,16.6 5,17C5.65,19.15 7.07,20.66 9.24,21.5C13.36,23.06 18.17,20.84 19.21,16.92C19.28,16.65 19.38,16.55 19.68,16.65C20.14,16.79 20.61,16.89 21.08,17C21.57,17.09 21.93,16.84 22,16.36C22.03,16.1 21.94,15.87 21.84,15.63" />
						</svg>
						Download for Linux (x64)
					</Link>
					<p>Android support is coming soon!</p>
					<p>
						Join the{" "}
						<Link
							href={"https://discord.gg/vQnrUVxAvT"}
							target="_blank"
							className="font-bold text-blue-300"
						>
							Discord server
						</Link>{" "}
						and stay up to date with the latest news.
					</p>
				</div>

				<p className="bg-clip-text bg-gradient-to-r from-cyan-200 to-cyan-300 mt-24 font-medium text-4xl text-transparent">
					Contributors
				</p>
				<div className="flex flex-wrap justify-center gap-4 w-fit">
					{[
						{
							title: "ItsPi3141",
							link: "https://github.com/ItsPi3141/",
							avatar: "https://avatars.githubusercontent.com/u/90981829",
							text: "Main developer",
						},
						{
							title: "cantevenread (Loop)",
							link: "https://github.com/cantevenread/",
							avatar: "https://avatars.githubusercontent.com/u/78627491",
							text: "Original developer",
						},
						{
							title: "nostopgmaming17",
							link: "https://github.com/nostopgmaming17",
							avatar: "https://avatars.githubusercontent.com/u/65682727",
							text: "New script injector",
						},
						{
							title: "mahdi13377",
							link: "https://github.com/mahdi13377",
							avatar: "https://avatars.githubusercontent.com/u/147645370",
							text: "Ideas for new Blockyfish features",
						},
					].map((e) => (
						<a
							key={e.title}
							className="flex flex-col justify-start items-center gap-2 border-[#fff1] hover:border-[#fff4] bg-gray-800 p-4 border rounded-md w-64 h-54 transition-colors"
							href={e.link}
							target="_blank"
							rel="noopener noreferrer"
							draggable={false}
						>
							<p className="font-medium text-center text-cyan-200 text-xl">
								{e.title}
							</p>
							<img
								src={e.avatar}
								width={64}
								height={64}
								draggable={false}
								className="border-gray-600 bg-[#0003] border rounded-full"
								alt={`${e.title}'s avatar`}
							/>
							<p className="mt-3 text-center">{e.text}</p>
						</a>
					))}
				</div>
			</div>
		</main>
	);
}
