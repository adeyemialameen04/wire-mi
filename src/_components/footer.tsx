import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { slugify } from "@/lib/helpers";
import {
	Mail,
	MapPin,
	Phone,
	Instagram,
	Twitter,
	Linkedin,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
	const quickLinks = [
		{
			title: "Quick links",
			links: ["About us", "Services", "News", "Plans"],
		},
		{
			title: "Services",
			links: ["Invest", "Save", "Flight", "Escrow", "Loans"],
		},
		{
			title: "Support",
			links: ["Contact us", "FAQs", "Privacy policy", "Terms & conditions"],
		},
	];

	return (
		<footer className="bg-[#0149A9] py-12">
			<div className="flex flex-col container">
				<div className="flex justify-between flex-col md:flex-row items-start">
					<div className="flex flex-col gap-3">
						<h3 className="font-semibold text-2xl md:text-3xl">
							Sign up for our newsletter
						</h3>
						<small>
							Be the first to know about releases and industry news and
							insights.
						</small>
					</div>
					<form className="flex gap-3">
						<Input placeholder="Enter your email address" />
						<Button className="!bg-[#F9F9F966] text-white" type="submit">
							Submit
						</Button>
					</form>
				</div>
				<Separator className="bg-white mt-4" />
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-7">
					<div className="space-y-4">
						<div className="flex items-center space-x-2">
							<Image src="/white-logo.png" alt="Logo" width={140} height={40} />
						</div>
						<div className="space-y-2">
							<div className="flex items-center space-x-2">
								<MapPin className="w-4 h-4 flex-shrink-0" />
								<span>
									21 King Street West, Hamilton L8P4W7 Ontario, Canada.
								</span>
							</div>
							<div className="flex items-center space-x-2">
								<Mail className="w-4 h-4 flex-shrink-0" />
								<span>contact@wiremi.ca</span>
							</div>
							<div className="flex items-center space-x-2">
								<Phone className="w-4 h-4 flex-shrink-0" />
								<span>+1 289 7884 976</span>
							</div>
						</div>
						<div className="flex space-x-4">
							<Instagram className="w-5 h-5" />
							<Twitter className="w-5 h-5" />
							<Linkedin className="w-5 h-5" />
						</div>
					</div>
					<div className="grid grid-cols-3 gap-4">
						{quickLinks.map((item) => (
							<div key={item.title}>
								<h3 className="font-bold mb-2">{item.title}</h3>
								<ul className="space-y-1">
									{item.links.map((link) => (
										<li key={link}>
											<Link href={`/${slugify(link)}`}>{link}</Link>
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</div>
			</div>
		</footer>
	);
}
