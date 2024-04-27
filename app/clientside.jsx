"use client";

import { useState } from "react";

export function DownloadScrollButton() {
	const [ripple, setRipple] = useState(false);
	const [rippleX, setRippleX] = useState(0);
	const [rippleY, setRippleY] = useState(0);
	return (
		<>
			<button
				className="z-50 flex justify-center items-center gap-3 bg-blue-500 hover:bg-blue-600 shadow-lg px-4 py-3 border-b-4 border-blue-600 hover:border-blue-700 rounded-2xl text-white transition-colors"
				onClick={() => {
					const d = document.getElementById("download");
					d.scrollIntoView({
						behavior: "smooth",
						block: "center",
					});
					setTimeout(() => {
						const b = d.getBoundingClientRect();
						const x = b.x + b.width / 2;
						const y = b.y + b.height / 2;
						setRippleX(x);
						setRippleY(y);
						setRipple(true);
						setTimeout(() => {
							setRipple(false);
						}, 550);
					}, 750);
				}}
				type="button"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					fill="currentColor"
					viewBox="0 0 16 16"
				>
					<title>📥</title>
					<path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
					<path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
				</svg>
				Download
			</button>
			{ripple && (
				<div
					id="ripple-container"
					className="top-0 left-0 fixed w-screen h-screen overflow-hidden"
				>
					<Ripple left={rippleX} top={rippleY} />
				</div>
			)}
		</>
	);
}

function Ripple({ top, left }) {
	return (
		<div
			className="rounded-full w-[100vw] h-[100vw] pointer-events-none select-none ripple-anim"
			style={{
				top: top || 0,
				left: left || 0,
			}}
		/>
	);
}
