import SectionHeader from "@/_components/section-header";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

// absolute inset-0 bg-gradient-to-t from-black/60 to-black/0 p-6 flex flex-col justify-end
const plans = [
	[
		{
			name: "Freemium",
			features: [
				"Enjoy all free services on our wiremi app using our freemium plan",
			],
		},
		{
			name: "Wiremi lite",
			features: [
				"1 active wallet",
				"Cross border transactions",
				"5 saving instances",
				"Access to virtual cards",
				"$5,000 crypto transactions daily",
				"Crowdfunding feature",
			],
		},
	],
	[
		{
			name: "Wiremi premium",
			features: [
				"1 active wallet",
				"Cross border transactions",
				"5 saving instances",
				"Access to virtual cards",
				"$5,000 crypto transactions daily",
				"Crowdfunding feature",
			],
		},

		{
			name: "Wiremi business",
			features: [
				"1 active wallet",
				"Cross border transactions",
				"5 saving instances",
				"Access to virtual cards",
				"$5,000 crypto transactions daily",
				"Crowdfunding feature",
			],
		},
	],
];

export default function PlansAndPricing() {
	return (
		<section className="my-12 py-12 bg-[#FAFBFB] relative">
			{/* <Image */}
			{/* 	src="/star-5.png" */}
			{/* 	alt="Star" */}
			{/* 	height={65} */}
			{/* 	width={65} */}
			{/* 	className="absolute top-[50%] left-0 z-[1]" */}
			{/* /> */}
			<div className="container flex flex-col gap-7 relative z-[2]">
				<div>
					<SectionHeader className="text-[#105CE2]">
						Plans & Pricing
					</SectionHeader>
					<h5 className="font-recoleta-alt-sb font-semibold text-2xl text-[#00091E]">
						Subscription <span className="text-[#105CE2]">plans</span> that
						scale your financial growth
					</h5>
					<p className="text-[#57686F]">
						Our subscription plan offers flexibility in managing recurring
						payments while delivering personalized financial insights.
					</p>
				</div>

				<div className="grid gap-8 grid-cols-1 md:grid-cols-2">
					<div className="relative aspect-video overflow-hidden rounded-lg lg:aspect-square">
						<div className="size-[120px] rounded-full bg-white absolute -top-12 -right-12 z-10"></div>
						<Image
							src="/woman-smiling-with-card.png"
							alt="Person using phone"
							className="object-cover"
							fill
						/>
						<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from[#FFFFFF4D] to-[#FFFFFF80] p-6 flex flex-col justify-end">
							<p className="text-white mb-4">
								Create your free business account with us today and enjoy all of
								this plans in one.
							</p>
							<Button
								className="bg-blue-600 hover:bg-blue-700 text-white w-fit rounded-full"
								size={"lg"}
								asChild
							>
								<Link className="" href={"/#sign-up"}>
									Open an Account for free
								</Link>
							</Button>
						</div>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 md:gap-x-5">
						<div className="flex flex-col gap-4 md:gap-5 md:mt-16">
							{plans.map((planRow, rowIndex) => {
								const isFreemium = planRow[0].name.toLowerCase() === "freemium";

								return (
									<Card
										className={cn(
											"border-none shadow-lg",
											isFreemium
												? "bg-[#0A1628] text-white"
												: "bg-white text-[#105CE2]",
										)}
										key={`left-${rowIndex}`}
									>
										<CardHeader>
											<Image
												src={"/fi_1356698.png"}
												height={50}
												width={50}
												alt="Check Icon"
												className="mb-2"
											/>
											<CardTitle className="text-xl font-normal text-[#105CE2]">
												{planRow[0].name}
											</CardTitle>
										</CardHeader>
										<CardContent className="flex flex-col gap-2">
											{planRow[0].features.map((feature) => (
												<div
													className="flex items-center gap-2 text-sm"
													key={feature}
												>
													{!isFreemium && (
														<Image
															src={"/check-icon.png"}
															height={24}
															width={24}
															alt="Check Icon"
														/>
													)}
													{feature}
												</div>
											))}
										</CardContent>
									</Card>
								);
							})}
						</div>

						<div className="flex flex-col gap-4 md:gap-5">
							{plans.map((planRow, rowIndex) => {
								return (
									<Card
										className={cn(
											"border-none shadow-lg",
											"bg-white text-[#105CE2]",
										)}
										key={`left-${rowIndex}`}
									>
										<CardHeader>
											<Image
												src={"/fi_1356698.png"}
												height={50}
												width={50}
												alt="Check Icon"
												className="mb-2"
											/>
											<CardTitle className="text-xl font-normal text-[#105CE2]">
												{planRow[1].name}
											</CardTitle>
										</CardHeader>
										<CardContent className="flex flex-col gap-2">
											{planRow[1].features.map((feature) => (
												<div
													className="flex items-center gap-2 text-sm"
													key={feature}
												>
													<Image
														src={"/check-icon.png"}
														height={24}
														width={24}
														alt="Check Icon"
													/>
													{feature}
												</div>
											))}
										</CardContent>
									</Card>
								);
							})}
						</div>

						{/* Freemium Plan */}
						{/* <Card className="bg-[#0A1628] text-white"> */}
						{/* 	<CardHeader> */}
						{/* 		<div className="w-12 h-12 rounded-full bg-blue-600/20 flex items-center justify-center mb-4"> */}
						{/* 			<svg */}
						{/* 				className="w-6 h-6 text-blue-600" */}
						{/* 				fill="none" */}
						{/* 				height="24" */}
						{/* 				stroke="currentColor" */}
						{/* 				strokeLinecap="round" */}
						{/* 				strokeLinejoin="round" */}
						{/* 				strokeWidth="2" */}
						{/* 				viewBox="0 0 24 24" */}
						{/* 				width="24" */}
						{/* 			> */}
						{/* 				<path d="M8.56 3.69a9 9 0 0 0-2.92 1.95" /> */}
						{/* 				<path d="M3.69 8.56A9 9 0 0 0 3 12" /> */}
						{/* 				<path d="M3.69 15.44a9 9 0 0 0 1.95 2.92" /> */}
						{/* 				<path d="M8.56 20.31A9 9 0 0 0 12 21" /> */}
						{/* 				<path d="M15.44 20.31a9 9 0 0 0 2.92-1.95" /> */}
						{/* 				<path d="M20.31 15.44a9 9 0 0 0 21 12" /> */}
						{/* 				<path d="M20.31 8.56a9 9 0 0 0-1.95-2.92" /> */}
						{/* 				<path d="M15.44 3.69A9 9 0 0 0 12 3" /> */}
						{/* 			</svg> */}
						{/* 		</div> */}
						{/* 		<h3 className="text-xl font-bold">Freemium</h3> */}
						{/* 		<p className="text-gray-300"> */}
						{/* 			Enjoy all free services on our Wiremi app using our freemium */}
						{/* 			plan. */}
						{/* 		</p> */}
						{/* 	</CardHeader> */}
						{/* </Card> */}

						{/* Premium Plan */}
						{/* <Card> */}
						{/* 	<CardContent className="pt-6"> */}
						{/* 		<div className="w-12 h-12 rounded-full bg-blue-600/20 flex items-center justify-center mb-4"> */}
						{/* 			<Check className="w-6 h-6 text-blue-600" /> */}
						{/* 		</div> */}
						{/* 		<h3 className="text-xl font-bold text-blue-600 mb-4"> */}
						{/* 			Wiremi Premium */}
						{/* 		</h3> */}
						{/* 		<ul className="space-y-2"> */}
						{/* 			<li className="flex items-center gap-2"> */}
						{/* 				<Check className="w-4 h-4 text-blue-600" /> */}
						{/* 				<span>1 active wallet</span> */}
						{/* 			</li> */}
						{/* 			<li className="flex items-center gap-2"> */}
						{/* 				<Check className="w-4 h-4 text-blue-600" /> */}
						{/* 				<span>Cross-border transactions</span> */}
						{/* 			</li> */}
						{/* 			<li className="flex items-center gap-2"> */}
						{/* 				<Check className="w-4 h-4 text-blue-600" /> */}
						{/* 				<span>5 saving instances</span> */}
						{/* 			</li> */}
						{/* 			<li className="flex items-center gap-2"> */}
						{/* 				<Check className="w-4 h-4 text-blue-600" /> */}
						{/* 				<span>Access to virtual cards</span> */}
						{/* 			</li> */}
						{/* 			<li className="flex items-center gap-2"> */}
						{/* 				<Check className="w-4 h-4 text-blue-600" /> */}
						{/* 				<span>$5,000 crypto transactions daily</span> */}
						{/* 			</li> */}
						{/* 			<li className="flex items-center gap-2"> */}
						{/* 				<Check className="w-4 h-4 text-blue-600" /> */}
						{/* 				<span>Crowdfunding feature</span> */}
						{/* 			</li> */}
						{/* 		</ul> */}
						{/* 	</CardContent> */}
						{/* </Card> */}

						{/* Additional Plans (Lite, Business, etc.) */}
						{/* Repeat similar structure for Wiremi Lite, Business, or other plans */}
					</div>
				</div>
			</div>
		</section>
	);
}
