import GetApp from "@/_components/get-app";
import Image from "next/image";

export default function Hero() {
	return (
		<div className="relative pt-20 text-white w-full overflow-hidden">
			<div className="absolute inset-0 bg-[#014a9a]" />
			<div
				style={{
					backgroundImage: "url(/curly-bg.jpg)",
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
				}}
				className="absolute inset-0 mix-blend-multiply opacity-[0.01]"
				data-testid="banner"
			/>
			<div className="relative container mx-auto px-6 text-center z-10 flex flex-col">
				<h1 className="text-4xl font-bold mb-3 font-recoleta-md">
					Wiremi, your all in one financial hub
				</h1>
				<p className="text-lg mb-8 text-white font-recoleta-alt-thin font-normal">
					We help individuals and businesses to securely send and receive money
					globally, without too much fees!
				</p>
				<GetApp className="sm:flex-row self-center" />
				<Image
					src="/hero-img.png"
					height={580}
					width={1100}
					alt="Image"
					className="self-center mt-16"
				/>
			</div>
		</div>
	);
}
