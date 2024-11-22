import SectionHeader from "@/_components/section-header";
import Image from "next/image";

export default function CoreValues() {
	return (
		<section className="py-20 bg-[#FAFBFB]">
			<div className="container flex flex-col gap-4 items-center">
				<SectionHeader className="text-[#105CE2]">
					Our core values
				</SectionHeader>
				<h3 className="uppercase tracking-widest text-3xl md:text-5xl bg-gradient-to-r from-[#105CE2] to-[#7E0094] text-transparent bg-clip-text font-recoleta-sb font-bold">
					Seamless
				</h3>
				<Image
					src={"/seamless-img.png"}
					height={314}
					width={1064}
					alt="Seamless Image"
				/>
				<div className="relative sm:px-8  mt-8 text-[#00091E]">
					<Image
						src={"/quote.png"}
						height={200}
						width={200}
						className="absolute z-[1] -top-[1.7rem] left-32 hidden sm:block"
						alt="Block Quote"
					/>
					<div className="sm:pl-8 mb-4">Tagline</div>
					<h6 className="z-[2] relative sm:text-center font-recoleta-alt-sb font-semibold text-2xl md:text-[40px] md:leading-[2.5rem]">
						Your world. Your wallet.{" "}
						<span className="text-[#105CE2]">
							Power your financial journey.
						</span>
					</h6>
				</div>
			</div>
		</section>
	);
}
