import Image from "next/image";
import Link from "next/link";

export function Navbar() {
	return (
		<div className="w-screen h-24 flex justify-center sticky top-0">
			<div className="bg-[#35425569] backdrop-blur-md max-w-5xl w-full flex justify-between items-center m-4 p-4 rounded-xl">
				<div className="flex gap-1">
					<Link
						href={"/"}
						className="hover:bg-[#fff1] transition-colors w-8 h-8 rounded-md"
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
						{ href: "/faq", text: "FAQs", target: "_self" },
						{ href: "/docs", text: "Docs", target: "_self" },
						{ href: "https://github.com/blockyfish-client/desktop-client", text: "GitHub" }
					].map((e, i) => (
						<Link
							key={i}
							href={e.href}
							className="hover:bg-[#fff1] transition-colors px-3 py-2 rounded-md"
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
