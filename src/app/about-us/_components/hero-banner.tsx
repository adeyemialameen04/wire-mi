import Image from "next/image";

const data = [
	{
		icon: "bitcoin-icons_graph-outline.png",
		title: "$450,000",
		desc: "processed monthly",
	},
	{
		icon: "clarity_bank-line.png",

		title: "1 Million+",
		desc: "bank accounts",
	},
	{
		icon: "prime_users.png",
		title: "200+ agents",
		desc: "worldwide",
	},
	{
		icon: "vaadin_money-exchange.png",
		title: "$900,000 ",
		desc: "in year 2023",
	},
];
export default function AboutUsBanner() {
	return (
		<div className="container bg-[#F5F8FF] rounded-xl flex justify-between gap-5 py-9 px-12 flex-wrap relative -top-12">
			{data.map((item) => (
				<div className="flex gap-3 items-start" key={item.icon}>
					<div className="p-3 bg-[#00091E] rounded-md">
						<Image
							height={28}
							width={28}
							src={`/${item.icon}`}
							alt="Icon"
							className="object-contain"
						/>
					</div>
					<div className="text-[#00091E] font-recoleta-alt-sb font-semibold text-[20px]">
						<p>{item.title}</p>
						<p>{item.desc}</p>
					</div>
				</div>
			))}
		</div>
	);
}
