import PageHero from "@/_components/page-hero";
import ContactForm from "./_components/contact-form";
import { FAQs } from "./_components/faq";

export default function ContactPage() {
	return (
		<>
			<PageHero title="Contact us" desc="Have you got any questions?" />
			<ContactForm />
			<FAQs />
		</>
	);
}
