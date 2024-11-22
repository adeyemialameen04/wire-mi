import SectionHeader from "@/_components/section-header";
import { Verified } from "lucide-react";
import Image from "next/image";

export default function VirtualCards() {
	const unorderedList = [
		"Globally accepted",
		"Track expenses",
		"No minimun balance",
	];
	return (
		<section className="py-20 bg-gradient-to-tr from-[#0149A9] to-[#105CE2] border-t border-t-transparent">
			<div className="container grid grid-cols-1 md:grid-cols-2 gap-8 md:flex-row">
				<div className="flex flex-col gap-4">
					<SectionHeader className="text-white">
						Wiremi Virtual cards
					</SectionHeader>
					<h4 className="font-recoleta-alt-sb font-semibold text-[28px]">
						The ultimate card experience across borders
					</h4>
					<p className="font-light text-xl">
						Enjoy the flexibility of a Wiremi card and securely spend with
						virtual cards that you control. Spend anytime, anywhere around the
						world!{" "}
					</p>
					<ul className="flex flex-col gap-3 my-4">
						{unorderedList.map((item) => (
							<li className="flex items-center gap-2" key={item}>
								<div className="p-2 rounded-full bg-white">
									<Verified className="h-4 w-4 text-[#105CE2]" />
								</div>
								{item}
							</li>
						))}
					</ul>
				</div>
				<div className="flex flex-col gap-4 md:gap-5 items-center">
					<Image
						className="rounded-lg"
						height={530}
						width={577}
						alt="Cards"
						src={"/virtual-cards.png"}
					/>
				</div>
			</div>
		</section>
	);
}
