import Image from "next/image";
import { Navbar } from "../components/navbar";
import Link from "next/link";

export default function Error404() {
	return (
		<main className="bg-gray-900 text-white min-h-screen w-screen flex flex-col items-center pb-8 px-4">
			<Navbar />
			<div className="flex flex-col items-center justify-center w-full h-[calc(100vh-8rem)] px-8">
				<Image
					src={"/404.png"}
					width={300}
					height={300}
					alt={"404"}
					draggable={false}
					className="text-[150px]"
				/>
				<p className="text-xl font-bold mt-4">Oops! We lost a penguin.</p>
				<p>We couldn't find the page you were looking for.</p>
				<Link
					href={"/"}
					className="mt-4 px-4 py-2 bg-[#fff1] hover:bg-[#fff2] border border-[#fff1] hover:border-[#fff2] transition-colors rounded-xl"
				>
					Go to home page
				</Link>
			</div>
		</main>
	);
}
