"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Sparkles } from "lucide-react";

export default function AppShowcase() {
	const [rotation, setRotation] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setRotation((prev) => (prev + 1) % 360);
		}, 50);
		return () => clearInterval(interval);
	}, []);

	return (
		<div className="relative w-full md:py-16 min-h-[600px] overflow-hidden hidden md:flex">
			{/* Spiral Animation */}
			<div
				className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[600px] md:w-[800px] md:h-[800px]"
				style={{ transform: `translate(-50%, -50%) rotate(${rotation}deg)` }}
			>
				<svg viewBox="0 0 100 100" className="w-full h-full opacity-20">
					<circle
						cx="50"
						cy="50"
						r="35"
						fill="none"
						stroke="currentColor"
						strokeWidth="0.5"
						className="text-blue-500"
						strokeDasharray="1,3"
					/>
					<circle
						cx="50"
						cy="50"
						r="30"
						fill="none"
						stroke="currentColor"
						strokeWidth="0.5"
						className="text-blue-500"
						strokeDasharray="1,3"
					/>
				</svg>
			</div>

			{/* Decorative Stars */}
			<div className="absolute top-1/4 left-1/4 text-blue-500 animate-pulse">
				<Sparkles className="w-6 h-6" />
			</div>
			<div className="absolute bottom-1/4 right-1/4 text-blue-500 animate-pulse delay-300">
				<Sparkles className="w-6 h-6" />
			</div>

			{/* Phone Mockups */}
			<div className="relative z-10 flex justify-center items-center -bottom-26 sm:-bottom-0">
				<div className="relative transform translate-x-8 md:translate-x-10">
					<Image
						src="/iMockup - iPhone 15 Pro Max1.png"
						alt="App Interface 1"
						width={204}
						height={410}
						className="h-auto drop-shadow-2xl"
					/>
				</div>
				<div className="relative transform -translate-x-8 md:--translate-x-32 top-10">
					<Image
						src="/iMockup - iPhone 15 Pro Max2.png"
						alt="App Interface 2"
						width={204}
						height={410}
						className="h-auto drop-shadow-2xl"
					/>
				</div>
			</div>

			{/* Small Decorative Dots */}
			<div className="absolute top-1/3 left-1/3 w-2 h-2 rounded-full bg-blue-200 animate-ping" />
			<div className="absolute bottom-1/3 right-1/3 w-2 h-2 rounded-full bg-blue-200 animate-ping delay-150" />
			<div className="absolute top-2/3 right-1/3 w-2 h-2 rounded-full bg-blue-200 animate-ping delay-300" />
		</div>
	);
}
