import SectionHeader from "@/_components/section-header";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
	{
		question: "What is Wiremi?",
		answer:
			"Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
	},
	{
		question: "How do I get started with Wiremi?",
		answer: null,
	},
	{
		question: "Is my data safe with Wiremi?",
		answer: null,
	},
	{
		question: "Can Wiremi help my business grow?",
		answer: null,
	},
	{
		question: "How can I stay informed about financial trends?",
		answer: null,
	},
	{
		question: "Can I invest with Wiremi?",
		answer: null,
	},
	{
		question: "Are my savings safe with Wiremi?",
		answer: null,
	},
	{
		question: "Is Wiremi a fintech app?",
		answer: null,
	},
	{
		question: "Does Wiremi have a web app?",
		answer: null,
	},
	{
		question: "Does Wiremi offer loans to its users?",
		answer: null,
	},
];

export function FAQs() {
	return (
		<section className=" py-20 bg-[#FAFBFB] my-10">
			<div className="container max-w-[768px]">
				<div className="md:text-center flex flex-col items-center">
					<SectionHeader className="text-[#105CE2]">FAQs</SectionHeader>
					<h5 className="font-recoleta-alt-sb font-semibold text-2xl text-[#00091E]">
						Frequently asked questions
					</h5>
					<p className="text-[#57686F]">
						Everything you need to know about Wiremi.
					</p>
				</div>
				<Accordion type="single" collapsible className="w-full mt-5">
					{faqs.map((item) => (
						<AccordionItem key={item.question} value={item.question}>
							<AccordionTrigger className="text-[#00091E] text-left sm:text-center font-medium hover:no-underline">
								{item.question}
							</AccordionTrigger>
							<AccordionContent className="text-[#57686F]">
								{item.answer}
							</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
			</div>
		</section>
	);
}
