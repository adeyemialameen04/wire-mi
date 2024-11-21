import SectionHeader from "@/_components/section=-header";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function WhyWiremi() {
	// male-employee-getting-used-his-new-office-job-along-with-female-colleagues.png
	// people-office-work-day.png
	// five-co-workers-desk.png
	// medium-shot-smiley-people-working-together.png
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
		<section className="py-20 bg-[#FAFBFB] border-t border-t-transparent text-black">
			<div className="container grid grid-cols-1 md:grid-cols-2 gap-8 md:flex-row">
				<div className="flex flex-col gap-4">
					<SectionHeader className="text-[#105CE2]">Why Wiremi</SectionHeader>
					<h4 className="font-recoleta-alt-sb mb-4 font-semibold text-[28px]">
						We accelerate <span>financial</span> inclusion and sustainable
						growth
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
					<Button
						className="!bg-[#105CE2] hover:backdrop-opacity-90 transition-opacity duration-300 w-fit rounded-full"
						size={"lg"}
					>
						Read more
					</Button>
				</div>
				<div className="flex flex-col gap-4 md:gap-5 items-center">
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
