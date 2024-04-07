"use client";

import { useEffect, useState } from "react";

export function YoutubeViewbot() {
	const [hide, setHide] = useState(true);
	const [videoId, setVideoId] = useState("");
	useEffect(() => {
		window.addEventListener("blur", () => {
			setTimeout(() => {
				if (document.activeElement.tagName === "IFRAME") {
					setTimeout(() => setHide(true), 200);
				}
			});
		});

		fetch("/api/youtube")
			.then((response) => response.json())
			.then((json) => {
				setVideoId(json.id);
				setHide(false);
			});
	}, []);

	return (
		<div
			className="top-4 right-4 fixed flex flex-col justify-stretch gap-1 bg-gray-800 shadow-xl p-4 rounded-lg w-calc(100vw-2rem) max-w-72 h-40 text-white transition-all duration-500 overflow-hidden ease-[cubic-bezier(0.5,-0.4,0.2,1.4)]"
			style={{
				opacity: hide ? "0" : "1",
				pointerEvents: hide ? "none" : "",
				translate: hide ? "100% 0" : "0 0",
			}}
		>
			<p className="font-semibold">Help support my work!</p>
			<p className="text-xs">
				Click the button below to play a YouTube video in the
				background, which would really support me. Thanks!
			</p>
			<button
				type="button"
				className="relative mt-1 rounded-xl w-full h-10 overflow-hidden"
			>
				<div className="top-0 bottom-0 left-0 absolute w-1/4 origin-left scale-x-[4]">
					<iframe
						width="64"
						height="40"
						src={`https://www.youtube-nocookie.com/embed/${videoId}?controls=0&mute=1`}
						title="YouTube"
						frameBorder="0"
						allow="encrypted-media"
						referrerPolicy="strict-origin-when-cross-origin"
					/>
				</div>
				<div className="top-0 right-0 bottom-0 left-0 absolute flex justify-center items-center bg-blue-500 border-b-4 border-blue-600 rounded-xl w-full h-full pointer-events-none">
					Ok
				</div>
			</button>
		</div>
	);
}
