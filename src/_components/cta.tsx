import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CTA() {
	return (
		<div className="relative container py-24 bg-gradient-to-tr from-[#09327C] to-[#105CE2] border-t border-t-transparent my-10 xl:rounded-xl">
			<div
				style={{
					backgroundImage: "url(/curly-left.png)",
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
				}}
				className="absolute bottom-0 top-0 left-0 h-full w-full z-10"
				data-testid="banner"
			/>
			{/* <Image */}
			{/* 	src={"/telephone.png"} */}
			{/* 	className="absolute right-0 z-[1] bottom-0" */}
			{/* 	alt="Telephone Image" */}
			{/* 	height={420} */}
			{/* 	width={280} */}
			{/* /> */}
			<div
				style={{
					backgroundImage: "url(/telephone.png)",
					backgroundSize: "cover",
					backgroundPosition: "right",
					backgroundRepeat: "no-repeat",
				}}
				className="absolute bottom-0 right-0 h-full w-[260px] z-10 hidden md:inline-flex"
			/>
			<div className="relative container mx-auto px-4 sm:px-6 text-center z-10 flex flex-col">
				<h1 className="text-4xl font-semibold text-[#F4F4F5] mb-3 font-recoleta-alt-sb">
					Have you got any questions?
				</h1>
				<p className="text-lg mb-8 text-[#F2F4F7]font-normal">
					Contact us today and get all the answers to your questions to know
					everything about our all in one plaform
				</p>
				<Button
					className="rounded-full w-fit mx-auto bg-white text-black hover:text-white hover:bg-black transition-colors  duration-300"
					size={"lg"}
					asChild
				>
					<Link href={"/contact-us"}>
						Contact us <ArrowRight className="h-4 w-4" />
					</Link>
				</Button>
			</div>
		</div>
	);
}
