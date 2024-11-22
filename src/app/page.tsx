import BusinessSolutions from "./_components/business-solutions";
import Featured from "./_components/featured";
import Hero from "./_components/hero";
import HowItWorks from "./_components/how-it-works";
import MultiCurrencyAccount from "./_components/multi-currency";
import OurServices from "./_components/services";
import TestimonialSlider from "./_components/testimonials-slider";
import VirtualCards from "./_components/virtual-cards";
import WhyWiremi from "./_components/why-wiremi";

export default function Home() {
	return (
		<>
			<Hero />
			<Featured />
			<WhyWiremi about={false} />
			<MultiCurrencyAccount />
			<VirtualCards />
			<OurServices />
			<HowItWorks />
			<BusinessSolutions />
			<TestimonialSlider />
		</>
	);
}
