import SectionHeader from "@/_components/section-header";
import { Separator } from "@radix-ui/react-separator";
import React from "react";
import AppShowcase from "./spiral";

export default function HowItWorks() {
	const steps = [
		{
			title: "Install the app",
			description:
				"Download and install our app effortlessly from your preferred app store. With just a few taps, you'll gain access to a world of functionality right at your fingertips",
		},
		{
			title: "Set up your account",
			description:
				"Personalize your experience by setting up your account. Customize your preferences by choosing an account type & a price plan, add your information, and tailor the app to suit your needs—all in a few simple steps.",
		},
		{
			title: "Enjoy the features",
			description:
				"Once your account is set up, it's time to dive into the features and start enjoying everything the app has to offer.",
		},
	];

	return (
		<section className="py-20 my-8 bg-white">
			<div className="container grid grid-cols-1 md:grid-cols-2 gap-8">
				<div>
					<SectionHeader className="text-[#105CE2] mb-4">
						Our Services
					</SectionHeader>
					<div className="flex flex-col gap-4">
						{steps.map((step, index) => (
							<React.Fragment key={index}>
								<div className="flex gap-5">
									<p className="text-[#00091E] font-recoleta-sb text-3xl font-semibold">
										{`0${index + 1}`}
									</p>
									<div className="flex flex-col gap-5">
										<h5 className="text-[#00091E] font-recoleta-md text-3xl font-medium">
											{step.title}
										</h5>
										<p className="text-[#3C5154]">{step.description}</p>
									</div>
								</div>
								{index + 1 !== steps.length && (
									<Separator className="h-[1px] w-full bg-[#CDCAC6]" />
								)}
							</React.Fragment>
						))}
					</div>
				</div>
				<AppShowcase />
			</div>
		</section>
	);
}
