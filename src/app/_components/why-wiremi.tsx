import SectionHeader from "@/_components/section-header";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import AboutUsBanner from "../about-us/_components/hero-banner";
import { cn } from "@/lib/utils";

export default function WhyWiremi({ about }: { about: boolean }) {
	const images = [
		[
			"male-employee-getting-used-his-new-office-job-along-with-female-colleagues.png",
			"people-office-work-day.png",
		],
		[
			"five-co-workers-desk.png",
			"medium-shot-smiley-people-working-together.png",
		],
	];
	return (
		<section
			className={cn(
				"py-20 border-t border-t-transparent text-black",
				!about && "bg-[#FAFBFB]",
			)}
		>
			<div className="container grid grid-cols-1 md:grid-cols-2 gap-8 md:flex-row">
				<div
					className={cn("flex flex-col gap-4", about && "order-1 md:order-2")}
				>
					<SectionHeader className="text-[#105CE2]">Why Wiremi</SectionHeader>
					<h4 className="font-recoleta-alt-sb mb-4 font-semibold text-[28px]">
						We accelerate <span className="text-[#105CE2]">financial</span>{" "}
						inclusion and sustainable growth
					</h4>
					<p className="font-light text-xl text-[#57686F]">
						At Wiremi, our mission is clear: to drive sustainable and inclusive
						growth by accelerating innovation and fostering collaboration. From
						digital banking to micro finance, we offer a range of services
						designed to promote financial resilience and empowerment.
					</p>
					<p className="font-light text-xl text-[#57686F]">
						We are one of the best international money transfer provider which
						is fast, safe and reliable
					</p>
					{about && (
						<p className="font-light text-xl text-[#57686F]">
							We understand that financial inclusion is a catalyst for economic
							development and social progress. By unlocking the potential of
							individuals, businesses, and communities, we create opportunities
							for prosperity and well-being. Our approach to financial inclusion
							goes beyond traditional banking services. We believe in providing
							innovative solutions that meet the diverse needs of our users.
							From digital banking to microfinance, we offer a range of services
							designed to promote financial resilience and empowerment. At
							Wiremi, we recognize that sustainable growth is essential for
							long-term prosperity. That's why we invest in initiatives that
							promote environmental sustainability, social equity, and economic
							resilience. By integrating sustainability into our business
							practices, we aim to create lasting value for society and the
							planet. Through targeted investments, capacity-building
							programs,and advocacy efforts, Wiremi is driving positive change.
							We work with stakeholders across sectors to build a more inclusive
							and sustainable future. Together, we can unlock the potential of
							individuals, businesses, and communities to create a better world
							for all. Join us on our mission to empower financial inclusion and
							sustainable growth.
						</p>
					)}
					{!about && (
						<Button
							className="!bg-[#105CE2] hover:backdrop-opacity-90 transition-opacity duration-300 w-fit rounded-full"
							size={"lg"}
							asChild
						>
							<Link href={"/about-us"}>
								Read more <ArrowRight />
							</Link>
						</Button>
					)}
				</div>
				<div
					className={cn(
						"flex flex-col gap-4 md:gap-5 items-center",
						about && "order-2 md:order-1",
					)}
				>
					{images.map((imageRow, index) => (
						<div className="grid grid-cols-2 gap-4 md:gap-5" key={index}>
							{imageRow.map((image) => (
								<Image
									className="rounded-lg"
									height={240}
									width={240}
									key={image}
									alt="Image"
									src={`/${image}`}
								/>
							))}
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
