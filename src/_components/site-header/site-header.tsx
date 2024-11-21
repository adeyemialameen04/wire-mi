"use client";

import { Button } from "@/components/ui/button";
import { slugify } from "@/lib/helpers";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SiteHeader = () => {
	const navLinks = [
		"About us",
		"Services",
		"Plans & Pricing",
		"News",
		"Contact",
	];

	return (
		<header className="bg-[#0149A9] py-4">
			<div className="flex items-center justify-between gap-3 container">
				<div className="">
					<Image
						src={"/white-logo.png"}
						height={44}
						width={140}
						alt="WireMi Logo"
					/>
				</div>
				<nav className="flex items-center gap-4 text-white font-light">
					{navLinks.map((link) => (
						<React.Fragment key={link}>
							{link !== "Services" ? (
								<Link href={`/${slugify(link)}`}>{link}</Link>
							) : (
								<Button variant={"ghost"} className="!bg-transparent p-0">
									{link}
								</Button>
							)}
						</React.Fragment>
					))}
				</nav>
				<div className="flex items-center gap-4">
					<Button className="rounded-full bg-[#105CE2] backdrop-opacity-45 text-white">
						Sign in
					</Button>
					<Button className="rounded-full bg-white text-[#105CE2] hover:text-white hover:bg-[#105CE2] transition-colors duration-300 px-6">
						Get started
					</Button>
				</div>
			</div>
		</header>
	);
};
export default SiteHeader;
