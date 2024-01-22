import PenguinGravity from "./components/penguinGravity";
import { Navbar } from "./components/navbar";
import Twemoji from "./components/twemoji";
import Link from "next/link";
import { DownloadScrollButton } from "./clientside";

export default function Home() {
	return (
		<main className="bg-gray-900 text-white min-h-screen w-screen flex flex-col items-center pb-8 px-4">
			<div className="flex flex-col items-center justify-center w-full h-[calc(100dvh-6rem)] relative select-none">
				<PenguinGravity />
				<p className="text-7xl [line-height:1.25] bg-gradient-to-tr from-teal-400 to-blue-300 font-extrabold bg-clip-text text-transparent z-10">Blockyfish</p>
				<p className="text-center z-10 mb-4">Deeeep.io's best client mod</p>

				<DownloadScrollButton />
			</div>
			<Navbar />

			<div className="flex flex-col items-center max-w-5xl w-full mt-16 gap-4">
				<p className="text-4xl text-transparent bg-gradient-to-r from-emerald-200 to-emerald-300 bg-clip-text font-medium">Features</p>
				<div className="flex flex-wrap gap-4 w-fit justify-center mb-24">
					{[
						{
							title: "🚀 Easy installation",
							text: "Installation is super easy with the one-click installer"
						},
						{
							title: "🧩 Plugins",
							text: "Robust plugins system to customize your experience"
						},
						{
							title: "🚫 Ad-free",
							text: "Includes adblock for uninterrupted gameplay"
						},
						{
							title: "🛠️ For developers",
							text: "Easy plugins creation for developers"
						}
					].map((e, i) => (
						<div
							key={i}
							className="w-64 h-36 bg-gray-800 rounded-md p-4 border border-[#fff1] hover:border-[#fff4] transition-colors"
						>
							<p className="text-xl font-medium text-emerald-200">
								<Twemoji text={e.title} />
							</p>
							<p className="mt-3">{e.text}</p>
						</div>
					))}
				</div>

				<div
					id="download"
					className="flex flex-col items-center gap-4"
				>
					<p className="text-4xl text-transparent bg-gradient-to-r from-orange-200 to-orange-300 bg-clip-text font-medium">Download</p>
					<Link
						className="bg-blue-500 hover:bg-blue-600 border-b-4 border-blue-600 hover:border-blue-700 transition-colors text-white py-3 px-4 rounded-2xl shadow-lg flex gap-3 items-center justify-center"
						href={"https://github.com/blockyfish-client/desktop-client/releases/download/v3.1.1/Blockyfish_Client_Setup_Windows_3.1.1.exe"}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							fill="currentColor"
							viewBox="0 0 16 16"
						>
							<path d="M6.555 1.375 0 2.237v5.45h6.555zM0 13.795l6.555.933V8.313H0v5.482zm7.278-5.4.026 6.378L16 16V8.395H7.278zM16 0 7.33 1.244v6.414H16z" />
						</svg>
						Download for Windows
					</Link>
					<p>Currently, only Windows is supported. MacOS, Linux, and Android support is coming soon!</p>
				</div>

				<p className="text-4xl text-transparent bg-gradient-to-r from-cyan-200 to-cyan-300 bg-clip-text font-medium mt-24">Contributors</p>
				<div className="flex flex-wrap gap-4 w-fit justify-center">
					{[
						{
							title: "ItsPi3141",
							link: "https://github.com/ItsPi3141/",
							avatar: "https://avatars.githubusercontent.com/u/90981829",
							text: "Main developer"
						},
						{
							title: "nostopgmaming17",
							link: "https://github.com/nostopgmaming17",
							avatar: "https://avatars.githubusercontent.com/u/65682727",
							text: "Creator of the new script injector"
						}
					].map((e, i) => (
						<a
							key={i}
							className="flex flex-col gap-2 w-64 h-54 bg-gray-800 rounded-md p-4 justify-start items-center border border-[#fff1] hover:border-[#fff4] transition-colors"
							href={e.link}
							target="_blank"
							draggable={false}
						>
							<p className="text-center text-xl font-medium text-cyan-200">{e.title}</p>
							<img
								src={e.avatar}
								width={64}
								height={64}
								draggable={false}
								className="rounded-full border border-gray-600 bg-[#0003]"
							/>
							<p className="text-center mt-3">{e.text}</p>
						</a>
					))}
				</div>
			</div>
		</main>
	);
}
