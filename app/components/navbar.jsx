import Link from "next/link";

export function Navbar() {
	return (
		<div className="sticky top-0 flex h-24 w-screen justify-center select-none">
			<div className="m-4 flex w-full max-w-5xl items-center justify-between rounded-xl bg-[#35425569] p-4 backdrop-blur-md">
				<div className="flex gap-1">
					<Link href={"/"} className="h-8 w-8 rounded-md transition-colors hover:bg-[#fff1]" draggable={false}>
						<img alt="logo" src={"/logo.svg"} width={32} height={32} draggable={false} />
					</Link>
				</div>
				<div className="flex gap-1">
					{[
						{
							href: "https://discord.gg/Kg6pvzVQHA",
							text: "Discord",
						},
					].map((e) => (
						<Link
							key={e.href}
							href={e.href}
							className="rounded-md px-3 py-2 transition-colors hover:bg-[#fff1]"
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
