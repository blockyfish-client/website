"use client";

export default function PenguinGravity() {
	return (
		<div
			id="penguinGravity"
			className="top-0 [filter:brightness(0.6)_contrast(0.6)_grayscale(1)_opacity(0.2)] left-0 z-0 absolute bg-blend-luminosity overflow-hidden"
			style={{
				marginLeft: "-16px",
				width: "calc(100% + 32px)",
				height: "calc(100% + 16px)",
			}}
		>
			{Array(6)
				.fill(0)
				.map((e) => {
					const isBaby = Math.random() > 0.5;
					return (
						<img
							key={e}
							src={
								isBaby
									? "/animals/babypenguin.png"
									: "/animals/penguin.png"
							}
							alt="🐧"
							width={isBaby ? 48 : 64}
							style={{
								left: `${Math.random() * 100}%`,
								top: `${Math.random() * 100}%`,
								transform: `rotate(${Math.random() * 360}deg)`,
							}}
							className="absolute box2d"
						/>
					);
				})}
			<script src="/box-2d.js" />
		</div>
	);
}
