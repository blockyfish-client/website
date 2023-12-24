"use client";

export default function PenguinGravity() {
	return (
		<div
			id="penguinGravity"
			className="absolute top-0 left-0 z-0 overflow-hidden bg-blend-luminosity [filter:brightness(0.6)_contrast(0.6)_grayscale(1)_opacity(0.2)]"
			style={{
				marginLeft: "-16px",
				width: "calc(100% + 32px)",
				height: "calc(100% + 16px)"
			}}
		>
			{Array(6)
				.fill(0)
				.map((_, i) => {
					var isBaby = Math.random() > 0.5;
					return (
						<img
							key={i}
							src={isBaby ? "/animals/babypenguin.png" : "/animals/penguin.png"}
							width={isBaby ? 48 : 64}
							style={{
								left: Math.random() * 100 + "%",
								top: Math.random() * 100 + "%",
								transform: "rotate(" + Math.random() * 360 + "deg)"
							}}
							className="box2d absolute"
						/>
					);
				})}
			<script src="/box-2d.js"></script>
		</div>
	);
}
