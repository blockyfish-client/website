"use client";
import { useState } from "react";
import { Navbar } from "../components/navbar";

export default function Faq() {
	return (
		<main className="flex flex-col items-center bg-gray-900 px-4 pb-8 w-screen min-h-screen text-white">
			<Navbar />
			<div className="flex flex-col items-center gap-4 mt-8 w-full max-w-5xl">
				<p className="bg-clip-text bg-gradient-to-r from-pink-200 to-pink-300 font-medium text-4xl text-center text-transparent">
					Frequenty Asked Questions
				</p>
				{[
					{
						q: "Will I get banned from the game for using Blockyfish client?",
						a: "Nope! Deeeep.io currently does not detect whether you are using Blockyfish or not.",
					},
					{
						q: "How do I install Blockyfish client?",
						a: "After you have downloaded the client, simply run the installer.\nThe client is currently supported on Windows, macOS, and Linux.",
					},
					{
						q: "Can I get Blockyfish client on my phone?",
						a: "Android support is coming soon and will be added in the future. As for iOS, it will not be supported in the forseeable future.",
					},
					{
						q: "What is the official website for Blockyfish client?",
						a: "This website (blockyfish.vercel.app) is the ONLY official website for Blockyfish client. Other websites which claim to be the official website may contain malicious content.",
					},
					{
						q: "Why can't I open the installer on MacOS? (App can't be opened because it is from an unidentified developer.)",
						a: `This is because of MacOS's Gatekeeper feature. It prevents unsigned applications from being installed by default. Signing the application would cost around $100USD per year.\nTo get around the Gatekeeper, hold the control key and click on the app. Then click "Open", then click "Open" again when it gives you a warning. Your preference will be saved and MacOS will let you open the app normally from now on.`,
					},
				].map((e) => {
					const [open, setOpen] = useState(false);
					return (
						<div
							key={e.q}
							className="bg-gray-800 rounded-md w-full text-pink-200 overflow-hidden"
						>
							<button
								className="flex justify-between items-center p-4 w-full"
								onClick={() => setOpen(!open)}
								type="button"
							>
								<p className="w-full font-medium text-left text-xl">
									{e.q}
								</p>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									fill="currentColor"
									viewBox="0 0 16 16"
									className={`${
										open ? "rotate-90" : "rotate-0"
									} transition-transform`}
								>
									<title>▶️</title>
									<path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
								</svg>
							</button>

							{open && (
								<div className="bg-[#def1] p-4 w-full">
									<div className="space-y-4 w-full text-left">
										{e.a.split("\n").map((e) => (
											<p key={e}>{e}</p>
										))}
									</div>
								</div>
							)}
						</div>
					);
				})}
			</div>
		</main>
	);
}
