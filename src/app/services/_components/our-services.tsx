import SectionHeader from "@/_components/section-header";
import { Youtube } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function OurServices() {
	return (
		<section className={cn("py-20 border-t border-t-transparent text-black")}>
			<div className="container grid grid-cols-1 md:grid-cols-2 gap-8 md:flex-row">
				<div className={cn("flex flex-col gap-4")}>
					<SectionHeader className="text-[#105CE2]">Our Services</SectionHeader>
					<h4 className="font-recoleta-alt-sb mb-4 font-semibold text-[28px]">
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
				</div>
				<div className={cn("relative h-fit rounded-md overflow-hidden")}>
					<div className="absolute bottom-0 left-0 right-0 py-4 px-10 text-white  backdrop-blur supports-[backdrop-filter]:bg-[#00000000] flex items-center gap-2 font-medium text-sm">
						Watch on <Youtube /> Youtube
					</div>
					<Image
						height={426}
						width={700}
						alt="Image"
						src="/contactless-cashless-payment-through-qr-code-mobile-banking.jpg"
					/>
				</div>
			</div>
		</section>
	);
}
