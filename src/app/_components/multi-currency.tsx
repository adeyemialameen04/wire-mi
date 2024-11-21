import GetApp from "@/_components/get-app";
import SectionHeader from "@/_components/section-header";
import { Card, CardContent } from "@/components/ui/card";
import { Verified } from "lucide-react";
import Image from "next/image";

export default function MultiCurrencyAccount() {
	const currencies = [
		{
			abbreviation: "gbp",
			full: "Great Britain Pounds",
			"flag-image": "gbp.png",
		},
		{
			abbreviation: "ngn",
			full: "Nigerian Naira",
			"flag-image": "ngn.png",
		},
		{
			abbreviation: "cad",
			full: "Canadain Dollars",
			"flag-image": "cad.png",
		},
		{
			abbreviation: "eur",
			full: "European Euro",
			"flag-image": "eur.png",
		},
	];
	return (
		<section className="py-20 bg-white border-t border-t-transparent text-black">
			<div className="container flex flex-col md:items-center gap-8 md:gap-14 xl:gap-20 md:flex-row justify-between">
				<Card
					className="bg-[#FDFDFF] flex-1 max-w-[602px] border-none order-2 md:order-1"
					// className="bg-[#FDFDFF]"
				>
					<CardContent className="flex flex-col gap-4 mt-4">
						{currencies.map((currency) => (
							<div
								className="p-5 sm:p-8 bg-white rounded-lg flex items-center gap-3"
								key={currency.abbreviation}
							>
								<Image
									src={`/${currency["flag-image"]}`}
									alt={`${currency.abbreviation.toUpperCase()} logo`}
									width={38}
									height={38}
									className="object-cover"
								/>
								<div className="flex flex-col gap-1">
									<p className="uppercase text-[#00091E] font-medium">
										{currency.abbreviation}
									</p>
									<p className="text-[#57686F] text-sm capitalize">
										{currency.full}
									</p>
								</div>
							</div>
						))}
					</CardContent>
				</Card>
				<div className="flex flex-col gap-2 flex-1 order-1 md:order-2">
					<SectionHeader className="text-[#105CE2]">
						Multi currency account
					</SectionHeader>
					<h4 className="font-recoleta-alt-sb font-semibold text-[28px]">
						One account for around the world{" "}
						<span className="text-[#105CE2]">35+ currencies</span>
					</h4>
					<p className="font-light text-xl text-[#57686F]">
						Hold over 35 currencies and exchange to the currency you need when
						you need it. Download our app to get started!{" "}
					</p>
					<ul className="flex flex-col gap-3 my-4">
						<li className="text-[#57686F] flex items-center gap-2">
							<Verified className="h-4 w-4 text-[#105CE2]" /> One account,
							multiple currencies
						</li>
						<li className="text-[#57686F] flex items-center gap-2">
							<Verified className="h-4 w-4 text-[#105CE2]" /> Regulated and
							secure
						</li>{" "}
						<li className="text-[#57686F] flex items-center gap-2">
							<Verified className="h-4 w-4 text-[#105CE2]" /> Fast and easy
						</li>
					</ul>
					<GetApp className="w-fit sm:flex-row" />
				</div>
			</div>
		</section>
	);
}
