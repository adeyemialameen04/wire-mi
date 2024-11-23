import PageHero from "@/_components/page-hero";
import PlansAndPricing from "./_components/plans-and-pricing";
import WiremiApp from "./_components/wiremi-app";

export default function NewsPage() {
	return (
		<>
			<PageHero
				title="Plan & Pricing"
				desc="Transparent plans tailored to your financial journey"
			/>
			<PlansAndPricing />
			<WiremiApp />
		</>
	);
}
