import SectionHeader from "@/_components/section-header";
import Image from "next/image";
const data = [
	{
		title: "Our Vision",
		desc: "We aspire to be the most respected and sought-after financial technology company that actively generates social value. Our goal is to serve 1 billion users.",
	},
	{
		title: "Our Achievements",
		desc: "Our achievement is centered on redefining the financial experience for our users. We have processed over 10 million dollars in the last quarter",
	},
	{
		title: "Our Mission",
		desc: "Our mission is to break down barriers to access, enhance financial literacy, and provide tools that enable users to take control of their financial futures.",
	},
];

export default function Innovation() {
	return (
		<section className="container py-20 flex flex-col gap-4">
			<SectionHeader className="text-[#105CE2]">
				Wiremi’s Innovation
			</SectionHeader>
			<h5 className="font-recoleta-alt-sb font-semibold text-2xl text-[#00091E]">
				Innovation is at the <span className="text-[#105CE2]">heart</span> of
				our platform
			</h5>
			<p className="text-[#57686F] text-xl">
				We harness the latest technologies to create intuitive solutions that
				simplify financial management for our users. By continuously exploring
				new ideas and methodologies, we strive to enhance accessibility,
				security, and efficiency in every transaction.
			</p>
			<div className="flex flex-col items-center gap-4 md:px-14 mt-10">
				<Image
					src="/innovation.png"
					alt=""
					height={420}
					width={980}
					className="object-cover"
				/>
				<div className="flex flex-col md:flex-row md:text-center gap-5">
					{data.map((item) => (
						<div className="flex flex-col gap-4" key={item.title}>
							<h5 className="text-[#105CE2] font-recoleta-alt-sb font-semibold text-2xl">
								{item.title}
							</h5>
							<p className="text-[#57686F]">{item.desc}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
