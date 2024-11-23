import SectionHeader from "@/_components/section-header";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { donations } from "@/data/mock/donation";
import { Donate } from "@/types/donations";
import Image from "next/image";

export default function CrowdFunding() {
	return (
		<section className="py-20 bg-[#FAFBFB]">
			<div className="container flex flex-col gap-3">
				<SectionHeader className="text-[#105EC2]">CrowdFunding</SectionHeader>
				<h4 className="font-recoleta-alt-sb font-semibold text-[28px] text-[#00091E]">
					Wiremi’s crowdfunding campaign offers an exciting opportunity for
					early investors to be part of a high-growth fintech venture with a
					focus on redefining cross-border payments
				</h4>
				<p className="text-[#57686F]">
					Investing in Wiremi is more than a financial opportunity – it’s a
					chance to be part of a vision that empowers people worldwide, bridging
					gaps and building a world where money moves as freely as information.
					We invite you to join us in this journey to revolutionize global
					payments, reshape the future of financial transactions, and create
					substantial value for stakeholders.
				</p>
				<p className="text-[#57686F]">
					ETFs and stocks are popular investment options to grow wealth over
					time. Stocks represent partial ownership in a single company, where
					you can make money if the company grows or through dividends. Stocks
					offer high potential returns but come with higher risks, as prices can
					fluctuate significantly. ETFs, or Exchange-Traded Funds, bundle
					various stocks or assets into one fund, providing built-in
					diversification. This means that ETFs are generally lower-risk and
					tend to offer more stable, moderate growth, making them ideal for
					beginners. Both stocks and ETFs offer better growth potential than
					traditional savings, and while many start with ETFs for stability,
					some move on to stocks for potentially higher returns. Together, they
					provide flexible options for investors at any experience level to
					reach financial goals over time.
				</p>
				<p className="font-semibold text-xl text-[#3C3E3E] my-3">
					Here are some of our crowdfunding projects which have been receiving
					donations
				</p>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:px-10 gap-4 md:gap-5">
					{donations.map((item, index) => (
						<DonateItem item={item} key={item.title + index} />
					))}
				</div>
			</div>
		</section>
	);
}

const DonateItem = ({ item }: { item: Donate }) => {
	return (
		<div className="flex flex-col gap-5 rounded-lg overflow-hidden shadow-md pb-8">
			<div className="relative h-[250px] w-full">
				<Image
					src={`/${item.poster}`}
					fill
					alt="News image"
					className="object-cover"
				/>
			</div>
			<div className="flex flex-col gap-8 px-4 pb-6">
				<p className="text-center text-[#37474F] lg:text-xl">{item.title}</p>
				<div className="flex flex-col gap-3 text-sm">
					<div className="flex items-center justify-between text-[#105CE2]">
						<p>${item.amountRaised} raised</p>
						<p>{item.percentageRaised}%</p>
					</div>
					<Slider disabled defaultValue={[item.percentageRaised]} step={1} />
				</div>
				<Button
					size={"lg"}
					className="bg-[#105CE2] px-12 font-semibold rounded-xl self-center w-fit text-[text-white] hover:text-[#105CE2] hover:bg-white transition-colors duration-200 justify-self-center"
				>
					Donate
				</Button>
			</div>
		</div>
	);
};
