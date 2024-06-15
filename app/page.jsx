import PenguinGravity from "./components/penguinGravity";
import { Navbar } from "./components/navbar";
import Twemoji from "./components/twemoji";
import Link from "next/link";

export default function Home() {
	return (
		<main className="flex flex-col items-center bg-gray-900 px-4 pb-8 w-screen min-h-screen text-white">
			<div className="top-0 left-0 z-50 fixed flex justify-center items-center gap-2 border-orange-900 bg-orange-950 border-b w-screen h-16">
				<Twemoji text={"⚠️"} />
				<p>Important: This project has been discontinued</p>
			</div>
			<div className="relative flex flex-col justify-center items-center w-full select-none cover-height">
				<PenguinGravity />
				<h1 className="text-7xl [line-height:1.25] z-10 bg-clip-text bg-gradient-to-tr from-teal-400 to-blue-300 font-extrabold text-transparent">
					Blockyfish
				</h1>
				<h2 className="z-10 mb-4 text-center">
					Deeeep.io's best client mod
				</h2>
			</div>
			<Navbar />

			<div className="flex flex-col items-center gap-4 mt-8 w-full max-w-5xl">
				<p className="bg-clip-text bg-gradient-to-r from-orange-200 to-orange-300 font-medium text-4xl text-transparent">
					Downloads
				</p>
				<p>Downloads are no longer available</p>
				<p className="bg-clip-text bg-gradient-to-r from-cyan-200 to-cyan-300 mt-16 font-medium text-4xl text-transparent">
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
