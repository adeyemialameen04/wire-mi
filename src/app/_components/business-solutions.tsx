import SectionHeader from "@/_components/section-header";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function BusinessSolutions() {
	return (
		<section className="py-16 mt-10 bg-[#FAFBFB] border-t border-t-transparent text-black">
			<div className="container grid grid-cols-1 md:grid-cols-2 gap-8 md:flex-row">
				<div className="flex flex-col gap-4 order-1 md:order-2">
					<SectionHeader className="text-[#105CE2]">
						Business solutions
					</SectionHeader>
					<h4 className="font-recoleta-alt-sb font-semibold text-[28px]">
						Open a Wiremi business account today and enjoy all of it’s benefits
					</h4>
					<p className="font-light text-xl text-[#57686F]">
						At Wiremi, our mission is clear: to drive sustainable and inclusive
						growth by accelerating innovation and fostering collaboration. From
						digital banking to micro finance, we offer a range of services
						designed to promote financial resilience and empowerment.
					</p>
					<p className="font-light text-xl text-[#57686F]">
						We are one of the best international money transfer provider which
						is fast, safe and reliable{" "}
					</p>
					<div className="flex sm:items-center gap-3 flex-col sm:flex-row">
						<Button
							className="!bg-[#105CE2] hover:backdrop-opacity-90 transition-opacity duration-300 w-fit rounded-full"
							size={"lg"}
							asChild
						>
							<Link href={"/#sign-up"}>
								Create free account <ArrowRight />
							</Link>
						</Button>
						<Button
							className="!text-[#105CE2] border border-[#105CE2] !bg-transparent hover:backdrop-opacity-90 transition-opacity duration-300 w-fit rounded-full"
							size={"lg"}
							asChild
						>
							<Link href={"/#sign-in"}>
								Sign in <ArrowRight />
							</Link>
						</Button>
					</div>
				</div>
				<div className="flex flex-col gap-4 md:gap-5 items-center order-2 md:order-1">
					<Image
						height={350}
						width={700}
						alt="Payroll App Image"
						src="/payroll.png"
						className="rounded-t-lg"
					/>
					<div className="flex gap-3">
						<Image
							src="/receipt.png"
							height={40}
							width={40}
							alt="receipt icon"
							className="self-start"
						/>
						<div className="flex flex-col gap-4">
							<h3 className="font-recoleta-alt-md text-[#105CE2] font-medium text-2xl">
								Payroll
							</h3>
							<p className="text-[#00091E] sm:text-xl">
								Monitor your payroll timeline and details as a wiremi business
								owner, ensuring smooth cash flow and full control over your
								finances.
							</p>{" "}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
