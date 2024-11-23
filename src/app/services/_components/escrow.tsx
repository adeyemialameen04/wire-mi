import SectionHeader from "@/_components/section-header";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function Escrow() {
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
				"py-20 border-t border-t-transparent text-black bg-[#FAFBFB]",
			)}
		>
			<div className="container grid grid-cols-1 md:grid-cols-2 gap-8 md:flex-row">
				<div className={cn("flex flex-col gap-4")}>
					<SectionHeader className="text-[#105CE2]">Escrow</SectionHeader>
					<h4 className="font-recoleta-alt-sb mb-4 font-semibold text-[28px]">
						Never buy or sell <span className="text-[#105CE2]">online</span>{" "}
						without escrow
					</h4>
					<p className="font-light text-xl text-[#57686F]">
						We aim to offer secure escrow services that protect both buyers and
						sellers in transactions, ensurng that funds are released only when
						predetermined conditions are met.
					</p>
					<p className="font-light text-xl text-[#57686F]">
						Escrow provides an added layer of security for both buyers and
						sellers in transactions, especially when trust or significant
						amounts are involved. By using escrow, funds are safeguarded by a
						neutral third party until all terms of the transaction are met,
						ensuring fair exchanges and reducing the risk of fraud. Escrow
						services like Wiremi’s help make transactions smoother and more
						reliable, allowing both parties to focus on successful outcomes
						rather than security concerns
					</p>
				</div>
				<div className={cn("flex flex-col gap-4 md:gap-5 items-center")}>
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
