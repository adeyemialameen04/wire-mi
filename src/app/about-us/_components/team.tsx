import SectionHeader from "@/_components/section-header";
import { Sparkles } from "lucide-react";
import Image from "next/image";
const team = [
	{
		position: "ceo",
		name: "Mike obi",
		potrait: "mike-obi.png",
	},
	{
		position: "ceo",
		name: "Mike obi",
		potrait: "mike-obi.png",
	},
	{
		position: "ceo",
		name: "Mike obi",
		potrait: "mike-obi.png",
	},
	{
		position: "ceo",
		name: "Mike obi",
		potrait: "mike-obi.png",
	},
];

export default function Team() {
	return (
		<section className="container py-20 flex flex-col gap-4">
			<SectionHeader className="text-[#105CE2]">Our core values</SectionHeader>
			<h5 className="font-recoleta-alt-sb font-semibold text-2xl text-[#00091E]">
				Meet the <span className="text-[#105CE2]">management</span> team
			</h5>
			<p className="text-[#57686F] text-xl">
				The management team at Wiremi is a diverse group of seasoned
				professionals dedicated to steering the organization towards its
				strategic goals.
			</p>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
				{team.map((member, index) => (
					<div className="relative" key={member.name + index}>
						<div className="rounded-3xl relative h-[500px] max-w-full overflow-hidden bg-gradient-to-br from-[#377FFF] via-[#689EFD] to-[#1550BA]">
							<Image
								src={`/${member.potrait}`}
								alt="CEO Mike Obi"
								fill
								className="object-cover"
							/>
							<div className="absolute bottom-6 left-6 flex items-center gap-2">
								<Sparkles className="w-4 h-4 text-white" />
								<div className="text-white font-medium">
									<span className="opacity-80 text-sm uppercase">
										{member.position}
									</span>
									<h3 className="text-lg">{member.name}</h3>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
