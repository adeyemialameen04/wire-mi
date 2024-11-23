import SectionHeader from "@/_components/section-header";
import { cn } from "@/lib/utils";
import { Verified } from "lucide-react";
import Image from "next/image";

export default function VirtualCards({ landing }: { landing: boolean }) {
	const unorderedList = [
		"Globally accepted",
		"Track expenses",
		"No minimun balance",
	];
	return (
		<section
			className={cn(
				"py-20 text-black",
				landing && "bg-gradient-to-tr from-[#0149A9] to-[#105CE2] text-white",
			)}
		>
			<div className="container grid grid-cols-1 md:grid-cols-2 gap-8 md:flex-row">
				<div
					className={cn(
						"flex flex-col gap-4",
						!landing && "order-1 md:order-2",
					)}
				>
					<SectionHeader
						className={cn(landing ? "text-white" : "text-[#105EC2]")}
					>
						Wiremi Virtual cards
					</SectionHeader>
					<h4 className="font-recoleta-alt-sb font-semibold text-[28px]">
						The ultimate card experience across borders
					</h4>
					<p className="font-light text-[#57686F] md:text-xl md:font-normal">
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
				<div
					className={cn(
						"flex flex-col gap-4 md:gap-5 items-center",
						!landing && "order-2 md:order-1",
					)}
				>
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
