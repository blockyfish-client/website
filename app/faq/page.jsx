"use client";
import { useState } from "react";
import { Navbar } from "../components/navbar";

export default function Faq() {
	return (
		<main className="bg-gray-900 text-white min-h-screen w-screen flex flex-col items-center pb-8 px-4">
			<Navbar />
			<div className="flex flex-col items-center max-w-5xl w-full mt-8 gap-4">
				<p className="text-4xl text-transparent text-center bg-gradient-to-r from-pink-200 to-pink-300 bg-clip-text font-medium">Frequenty Asked Questions</p>
				{[
					{
						q: "Will I get banned from the game for using Blockyfish client?",
						a: "Nope! Deeeep.io currently does not detect whether you are using Blockyfish or not."
					},
					{
						q: "How do I install Blockyfish client?",
						a: "After you have downloaded the client, simply run the installer.\nThe client currently only works on Windows."
					},
					{
						q: "Can I get Blockyfish client on my phone?",
						a: "Android support is coming soon and will be added in the future. As for iOS, it will not be supported in the forseeable future."
					},
					{
						q: "What is the official website for Blockyfish client?",
						a: "This website (blockyfish.netlify.app) is the ONLY official website for Blockyfish client. Other websites which claim to be the official website may contain malicious content."
					}
				].map((e, i) => {
					const [open, setOpen] = useState(false);
					return (
						<div
							key={i}
							className="w-full bg-gray-800 rounded-md text-pink-200 overflow-hidden"
						>
							<button
								className="flex justify-between items-center p-4 w-full"
								onClick={() => setOpen(!open)}
							>
								<p className="text-xl w-full text-left font-medium">{e.q}</p>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									fill="currentColor"
									viewBox="0 0 16 16"
									className={(open ? "rotate-90" : "rotate-0") + " transition-transform"}
								>
									<path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
								</svg>
							</button>

							{open && (
								<div className="w-full bg-[#def1] p-4">
									<div className="w-full text-left space-y-4">
										{e.a.split("\n").map((e, i) => (
											<p key={i}>{e}</p>
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
