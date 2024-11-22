"use client";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface Testimonial {
	id: number;
	name: string;
	image: string;
	quote: string;
}

const testimonials: Testimonial[] = [
	{
		id: 1,
		name: "Francis Robert",
		image:
			"close-up-handsome-stylish-black-man-wearing-party-blazer-smiling-happy-camera.png",
		quote:
			"Wiremi has revolutionized the way i manage my finances, it's so convenient and user friendly.",
	},
	{
		id: 2,
		name: "Sarah Johnson",
		image:
			"close-up-handsome-stylish-black-man-wearing-party-blazer-smiling-happy-camera.png",
		quote:
			"The platform's intuitive design makes financial management a breeze.",
	},
	{
		id: 3,
		name: "Michael Chen",
		image:
			"close-up-handsome-stylish-black-man-wearing-party-blazer-smiling-happy-camera.png",
		quote:
			"I've never felt more in control of my finances. Highly recommended!",
	},
	{
		id: 4,
		name: "Emma Davis",
		image:
			"close-up-handsome-stylish-black-man-wearing-party-blazer-smiling-happy-camera.png",
		quote:
			"The best financial management platform I've ever used. Simply outstanding.",
	},
];

export default function TestimonialSlider() {
	const [currentSlide, setCurrentSlide] = useState(0);

	const nextSlide = () => {
		setCurrentSlide((prev) => (prev + 1) % testimonials.length);
	};

	const prevSlide = () => {
		setCurrentSlide(
			(prev) => (prev - 1 + testimonials.length) % testimonials.length,
		);
	};
	// close-up-handsome-stylish-black-man-wearing-party-blazer-smiling-happy-camera.png

	return (
		<section>
			<div className="container py-14 flex flex-col">
				<div className="flex sm:items-end flex-col sm:flex-row md:flex-col lg:flex-row xl:flex-row">
					<button
						type="button"
						onClick={prevSlide}
						className="size-[50px] md:size-[150px] xl:size-[223px] aspect-square bg-[#C9EDFF] items-center justify-center hidden md:flex"
					>
						<ChevronLeft className="text-black size-[18px] xl:size-[32px]" />
					</button>
					<div className="flex">
						<div className="relative h-[250px] md:h-[300px] xl:h-[590px] w-[423px]">
							<Image
								className="object-cover"
								fill
								src={`/${testimonials[currentSlide].image}`}
								alt={``}
							/>
						</div>
						<div className="h-[250px] md:h-[300px] w-[200px] flex flex-col gap-1 sm:hidden">
							<button
								type="button"
								onClick={prevSlide}
								className="w-full h-full bg-[#C9EDFF] items-center justify-center flex"
							>
								<ChevronLeft className="text-black size-[18px] xl:size-[32px]" />
							</button>
							<button
								type="button"
								onClick={nextSlide}
								className="w-full h-full bg-[#C9EDFF] items-center justify-center flex"
							>
								<ChevronRight className="text-black size-[18px] xl:size-[32px]" />
							</button>
						</div>
					</div>
					<div className="grid grid-cols-1">
						<div className="text-black py-4 sm:py-8 px-6 sm:px-10 font-semibold md:font-bold text-xl md:text-2xl">
							{testimonials[currentSlide].name}
						</div>
						<div className="bg-black py-10 px-8">
							<Quote size={40} className="text-white" />
							<p className="mt-4">{testimonials[currentSlide].quote}</p>
						</div>
					</div>
					<button
						type="button"
						onClick={nextSlide}
						className="size-[50px] md:size-[150px] xl:size-[223px] aspect-square bg-[#2A94F4] items-center justify-center hidden md:flex"
					>
						<ChevronRight className="text-black size-[18px] xl:size-[32px]" />
					</button>
				</div>
				<div className="font-bold text-black mt-7 text-sm">
					<span className="text-3xl">
						{String(currentSlide + 1).padStart(2, "0")}/
					</span>
					{String(testimonials.length).padStart(2, "0")}
				</div>
			</div>
		</section>
	);
}
