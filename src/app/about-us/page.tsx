import PageHero from "@/_components/page-hero";
import AboutUsBanner from "./_components/hero-banner";
import WhyWiremi from "../_components/why-wiremi";
import CoreValues from "./_components/core-values";
import Team from "./_components/team";
import Innovation from "./_components/innovation";

export default function AboutPage() {
	return (
		<>
			<PageHero
				title="About us"
				desc="The most trusted digital finance platform"
			/>
			<AboutUsBanner />
			<WhyWiremi about />
			<CoreValues />
			<Team />
			<Innovation />
		</>
	);
}
