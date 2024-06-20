import PenguinGravity from "./components/penguinGravity";
import { Navbar } from "./components/navbar";
import Twemoji from "./components/twemoji";
import Link from "next/link";
import Markdown from "react-markdown";
import { promises as fs } from "node:fs";

const notice = await fs.readFile(`${process.cwd()}/app/notice.md`, "utf8");

export default function Home() {
	return (
		<main className="flex flex-col items-center bg-gray-900 px-4 pb-8 w-screen min-h-screen text-white">
			<div className="top-0 left-0 z-50 fixed flex justify-center items-center gap-2 border-orange-900 bg-orange-950 border-b w-screen h-16">
				<Twemoji text={"⚠️"} />
				<p>Important: This project has been discontinued.</p>
			</div>
			<div className="relative flex flex-col justify-center items-center w-full select-none cover-height">
				<PenguinGravity />
				<h1 className="text-7xl [line-height:1.25] z-10 bg-clip-text bg-gradient-to-tr from-teal-400 to-blue-300 font-extrabold text-transparent">
					Blockyfish
				</h1>
				<h2 className="z-10 mb-4 text-center">
					Deeeep.io's best client mod
				</h2>
				<h2 className="z-10 mt-4 mb-2 text-center">
					Blockyfish is no longer supported, read more about this
					below.
					<br />
					Please use fsploit instead.
				</h2>
				<Link
					href="https://fsploit.vercel.app"
					className="z-50 flex justify-center items-center gap-3 border-emerald-700 hover:border-emerald-800 bg-emerald-600 hover:bg-emerald-700 shadow-lg px-6 py-3 border-b-4 rounded-2xl text-white transition-colors"
					target="_blank"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						fill="currentColor"
						class="bi bi-globe"
						viewBox="0 0 16 16"
					>
						<title>🌐</title>
						<path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855A8 8 0 0 0 5.145 4H7.5zM4.09 4a9.3 9.3 0 0 1 .64-1.539 7 7 0 0 1 .597-.933A7.03 7.03 0 0 0 2.255 4zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a7 7 0 0 0-.656 2.5zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5zM8.5 5v2.5h2.99a12.5 12.5 0 0 0-.337-2.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5zM5.145 12q.208.58.468 1.068c.552 1.035 1.218 1.65 1.887 1.855V12zm.182 2.472a7 7 0 0 1-.597-.933A9.3 9.3 0 0 1 4.09 12H2.255a7 7 0 0 0 3.072 2.472M3.82 11a13.7 13.7 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5zm6.853 3.472A7 7 0 0 0 13.745 12H11.91a9.3 9.3 0 0 1-.64 1.539 7 7 0 0 1-.597.933M8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855q.26-.487.468-1.068zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.7 13.7 0 0 1-.312 2.5m2.802-3.5a7 7 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7 7 0 0 0-3.072-2.472c.218.284.418.598.597.933M10.855 4a8 8 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4z" />
					</svg>
					fsploit website
				</Link>
			</div>
			<Navbar />

			<div className="flex flex-col items-center gap-4 mt-8 w-full max-w-5xl">
				<p className="bg-clip-text bg-gradient-to-r from-orange-200 to-orange-300 font-medium text-4xl text-transparent">
					End of support announcement
				</p>
				<div className="prose-blockquote:text-slate-300 prose-h2:mt-6 prose-h1:mb-2 prose-img:rounded-lg w-full prose-a:text-blue-300 prose-h2:text-lg prose-h1:text-2xl prose-a:no-underline prose-invert prose">
					<Markdown
						components={{
							p(props) {
								return (
									<Twemoji {...props} text={props.children} />
								);
							},
						}}
					>
						{notice}
					</Markdown>
				</div>
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
						{
							title: "Blaststar",
							link: "https://github.com/blaststar",
							avatar: "https://avatars.githubusercontent.com/u/74274507",
							text: "Moral support",
						},
					].map((e) => (
						<a
							key={e.title}
							className="flex flex-col justify-start items-center gap-2 border-[#fff1] hover:border-[#fff4] bg-gray-800 p-4 border rounded-md w-64 h-54 transition-colors"
							href={e.link}
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
