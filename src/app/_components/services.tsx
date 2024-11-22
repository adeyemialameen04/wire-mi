import SectionHeader from "@/_components/section-header";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";

export default function OurServices() {
	// male-employee-getting-used-his-new-office-job-along-with-female-colleagues.png
	// people-office-work-day.png
	// five-co-workers-desk.png
	// medium-shot-smiley-people-working-together.png
	const images = [
		[
			{
				image:
					"male-employee-getting-used-his-new-office-job-along-with-female-colleagues.png",
				label: "Crowdfunding",
			},
			{
				image: "people-office-work-day.png",
				label: "Savings",
			},
		],
		[
			{
				image: "five-co-workers-desk.png",
				label: "Escrow",
			},
			{
				image: "medium-shot-smiley-people-working-together.png",
				label: "Send & recieve money",
			},
		],
	];
	return (
		<section className="py-16 mt-10 bg-[#FAFBFB] border-t border-t-transparent text-black">
			<div className="container grid grid-cols-1 md:grid-cols-2 gap-8 md:flex-row">
				<div className="flex flex-col gap-4 order-1 md:order-2">
					<SectionHeader className="text-[#105CE2]">Our Services</SectionHeader>
					<h4 className="font-recoleta-alt-sb font-semibold text-[28px]">
						Explore the wide range of services we offer
					</h4>
					<p className="font-light text-xl text-[#57686F]">
						At Wiremi, we believe that every challenge presents an opportunity
						for innovation and growth. Our diverse range of services is crafted
						to meet the unique needs of our clients, no matter the industry.
						From personalized consulting and strategic planning to cutting-edge
						technology solutions and comprehensive support, we are committed to
						delivering exceptional value.
					</p>
					<p className="font-light text-xl text-[#57686F]">
						Explore our offerings to find tailored services that not only
						address your immediate needs but also empower you to unlock new
						possibilities for success
					</p>
					<Button
						className="!bg-[#105CE2] hover:backdrop-opacity-90 transition-opacity duration-300 w-fit rounded-full"
						size={"lg"}
					>
						Explore <ArrowRight />
					</Button>
				</div>
				<div className="flex flex-col gap-4 md:gap-5 items-center order-2 md:order-1">
					<div className="grid grid-cols-2 gap-x-4 md:gap-x-5">
						<div className="flex flex-col gap-4 md:gap-5">
							{images.map((imageRow, rowIndex) => (
								<div key={`left-${rowIndex}`} className={cn("flex flex-col")}>
									<Image
										height={250}
										width={260}
										alt={imageRow[0].label}
										src={`/${imageRow[0].image}`}
										className="rounded-t-lg"
									/>
									<div className="p-4 bg-white rounded-b-lg flex items-center gap-2">
										<Sparkles className="w-4 h-4 text-[#105CE2]" />{" "}
										{imageRow[0].label}
									</div>
								</div>
							))}
						</div>
						<div className="flex flex-col gap-4 md:gap-5 mt-12">
							{images.map((imageRow, rowIndex) => (
								<div key={`right-${rowIndex}`} className={cn("flex flex-col")}>
									<Image
										height={250}
										width={260}
										alt={imageRow[1].label}
										src={`/${imageRow[1].image}`}
										className="rounded-t-lg"
									/>
									<div className="p-4 bg-white rounded-b-lg flex items-center gap-2">
										<Sparkles className="w-4 h-4 text-[#105CE2]" />{" "}
										{imageRow[1].label}
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
