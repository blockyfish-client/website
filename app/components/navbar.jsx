import Image from "next/image";
import Link from "next/link";

export function Navbar() {
	return (
		<div className="top-16 sticky flex justify-center w-screen h-24 select-none">
			<div className="flex justify-between items-center bg-[#35425569] backdrop-blur-md m-4 p-4 rounded-xl w-full max-w-5xl">
				<div className="flex gap-1">
					<Link
						href={"/"}
						className="hover:bg-[#fff1] rounded-md w-8 h-8 transition-colors"
						draggable={false}
					>
						<Image
							src={"/icon.png"}
							width={32}
							height={32}
							draggable={false}
						/>
					</Link>
				</div>
				<div className="flex gap-1">
					{[
						{
							href: "https://github.com/blockyfish-client/",
							text: "GitHub",
						},
					].map((e) => (
						<Link
							key={e.href}
							href={e.href}
							className="hover:bg-[#fff1] px-3 py-2 rounded-md transition-colors"
							draggable={false}
							target={e.target || "_blank"}
						>
							{e.text}
						</Link>
					))}
				</div>
			</div>
		</div>
	);
}
