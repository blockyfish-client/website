"use client";

import { useState } from "react";

export function DownloadScrollButton() {
	const [ripple, setRipple] = useState(false);
	const [rippleX, setRippleX] = useState(0);
	const [rippleY, setRippleY] = useState(0);
	return (
		<>
			<button
				className="bg-blue-500 hover:bg-blue-600 border-b-4 border-blue-600 hover:border-blue-700 transition-colors text-white py-3 px-4 rounded-2xl shadow-lg flex gap-3 items-center justify-center z-50"
				onClick={() => {
					const d = document.getElementById("download");
					d.scrollIntoView({
						behavior: "smooth",
						block: "center"
					});
					setTimeout(() => {
						var b = d.getBoundingClientRect();
						var x = b.x + b.width / 2;
						var y = b.y + b.height / 2;
						setRippleX(x);
						setRippleY(y);
						setRipple(true);
						setTimeout(() => {
							setRipple(false);
						}, 1000);
					}, 750);
				}}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					fill="currentColor"
					viewBox="0 0 16 16"
				>
					<path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
					<path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
				</svg>
				Download
			</button>
			{ripple && (
				<div
					id="ripple-container"
					className="fixed w-screen h-screen top-0 left-0 overflow-hidden"
				>
					<Ripple
						left={rippleX}
						top={rippleY}
					/>
				</div>
			)}
		</>
	);
}

function Ripple({ top, left }) {
	return (
		<div
			className="ripple-anim w-[100vw] h-[100vw] rounded-full select-none pointer-events-none"
			style={{
				top: top || 0,
				left: left || 0
			}}
		></div>
	);
}
