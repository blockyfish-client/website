import { Navbar } from "../components/navbar";
import Image from "next/image";
import Link from "next/link";

export default function Error404() {
	return (
		<main className="flex min-h-screen w-screen flex-col items-center bg-gray-900 px-4 pb-8 text-white">
			<Navbar />
			<div className="flex h-[calc(100vh-8rem)] w-full flex-col items-center justify-center px-8">
				<Image src={"/404.png"} width={300} height={300} alt={"404"} draggable={false} className="text-[150px]" />
				<p className="mt-4 text-xl font-bold">Oops! We lost a penguin.</p>
				<p>We couldn't find the page you were looking for.</p>
				<Link href={"/"} className="mt-4 rounded-xl border border-[#fff1] bg-[#fff1] px-4 py-2 transition-colors hover:border-[#fff2] hover:bg-[#fff2]">
					Go to home page
				</Link>
			</div>
		</main>
	);
}
