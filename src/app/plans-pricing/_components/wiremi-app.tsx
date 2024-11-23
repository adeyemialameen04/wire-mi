import GetApp from "@/_components/get-app";
import SectionHeader from "@/_components/section-header";
import { Verified } from "lucide-react";
import Image from "next/image";

const features = [
	"Streamlined digital transfers on the go",
	"Check live exchange rates",
	"Cashless convenience ",
];

export default function WiremiApp() {
	return (
		<section className="container grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 py-16">
			<div className="relative">
				<Image
					src="/titlted-phone.png"
					height={500}
					width={500}
					alt="Phone Image"
					className="object-contain"
				/>
				<Image
					src="/euro.png"
					height={140}
					width={140}
					alt="Phone Image"
					className="object-contain absolute -right-[30px] top-1 -rotate-[29deg] hidden sm:flex"
				/>
				<Image
					src="/euro.png"
					height={140}
					width={140}
					alt="Phone Image"
					className="object-contain absolute -right-[30px] bottom-4 -rotate-[29deg] hidden sm:flex"
				/>
				<Image
					src="/dollar1.png"
					height={140}
					width={140}
					alt="Phone Image"
					className="object-contain absolute -left-[30px] top-20 -rotate-[29deg] hidden sm:flex"
				/>
			</div>
			<div className="flex flex-col gap-4">
				<SectionHeader className="text-[#105CE2]">Wiremi App</SectionHeader>
				<h4 className="font-recoleta-alt-sb font-semibold text-[28px] text-[#00091E]">
					One app for all your transfers overseas
				</h4>
				<p className="font-light text-xl text-[#57686F]">
					Send money on the go with wiremi app. We believe in keeping things
					simple, fast and low cost. Just a few taps and your money can be on
					it’s way.{" "}
				</p>
				<ul className="flex flex-col gap-3 my-4">
					{features.map((item) => (
						<li className="flex items-center gap-2 text-[#57686F]" key={item}>
							<div className="p-2 rounded-full bg-[#105CE2]">
								<Verified className="h-4 w-4 text-white" />
							</div>
							{item}
						</li>
					))}
				</ul>
				<GetApp className="flex-col self-start sm:flex-row" />
			</div>
		</section>
	);
}
