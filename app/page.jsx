import { Navbar } from "./components/navbar";

export default function Home() {
	return (
		<main className="bg-gray-900 text-white min-h-screen w-[calc(100vw-1rem)] flex flex-col items-center pb-8 px-4">
			<div className="flex flex-col items-center justify-center w-full h-[calc(100vh-6rem)]">
				<p className="text-7xl [line-height:1.25] bg-gradient-to-tr from-teal-400 to-blue-300 font-extrabold bg-clip-text text-transparent">Blockyfish</p>
				<p className="text-center">Deeeep.io's best client mod</p>
			</div>
			<Navbar />

			<div className="flex flex-col items-center max-w-5xl w-full mt-16 gap-4">
				<p className="text-4xl text-transparent bg-gradient-to-r from-emerald-200 to-emerald-300 bg-clip-text font-medium">Features</p>
				<div className="flex flex-wrap gap-4 w-fit justify-center">
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
							<p className="text-xl font-medium text-emerald-200">{e.title}</p>
							<p className="mt-3">{e.text}</p>
						</div>
					))}
				</div>

				<p className="text-4xl text-transparent bg-gradient-to-r from-orange-200 to-orange-300 bg-clip-text font-medium mt-24">Download</p>
				<p>Coming soon</p>

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
