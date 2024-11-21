import Image from "next/image";

export default function Featured() {
	return (
		<section className="py-20 bg-white border-t border-t-transparent rounded-full text-black">
			<div className="container flex flex-col gap-8">
				<h3 className="text-center text-2xl md:text-4xl text-[#00091E] font-recoleta-md  mb-6">
					We offer fast and <span className="text-[#105CE2]">secure</span> money
					transfers
				</h3>
				<div className="flex flex-col md:flex-row gap-4 mx-auto">
					{/* Card 1 */}
					<div className="px-8 pt-8 flex flex-col items-center justify-center bg-gradient-to-b from-[#0149A9] to-[#001D43] rounded-lg text-white max-w-md">
						<div className="flex items-center justify-center mb-4">
							<Image
								src="/star.png"
								alt="User 1"
								width={40}
								height={40}
								className="rounded-full object-cover"
							/>
						</div>
						<h2 className="text-2xl font-recoleta-md font-normal mb-2">
							For Personal
						</h2>
						<p className="text-center mb-12 text-xs">
							Moving overseas? Paying bills or making transfers via currency or
							crypto is fast and secure with{" "}
							<span className="font-semibold">Wiremi</span> personal account.
							You can send money to 100+ countries worldwide.
						</p>
						<div className="relative">
							<Image
								src="/iphone15-mockup.png"
								alt="Mobile app interface"
								width={250}
								height={450}
								className="rounded-lg shadow-lg"
							/>
							<div className="absolute -left-10 top-1/2 transform -translate-y-1/2">
								<Image
									src="/close-up-portrait-handsome-confident-young-man-white-t-shirt-looking-away-blurry-outdoor-nature.png"
									alt="User 1"
									width={70}
									height={70}
									className="rounded-full object-cover"
								/>
							</div>
							<div className="absolute -right-10 top-4 transform -translate-y-1/2">
								<Image
									src="/pretty-woman-white-t-shirt-round-eyeglasses-feeling-shy.png"
									alt="User 2"
									width={70}
									height={70}
									className="rounded-full object-cover"
								/>
							</div>
							<div className="absolute -right-10 -bottom-3 transform -translate-y-1/2">
								<Image
									src="/pretty-woman-white-t-shirt-round-eyeglasses-feeling-shy.png"
									alt="User 2"
									width={70}
									height={70}
									className="rounded-full object-cover"
								/>
							</div>
						</div>
					</div>

					{/* Card 2 */}
					<div className="px-8 pt-8 flex flex-col items-center justify-center bg-gradient-to-b from-[#0149A9] to-[#001D43] rounded-lg text-white max-w-md">
						<div className="flex items-center justify-center mb-4">
							<Image
								src="/star.png"
								alt="User 1"
								width={40}
								height={40}
								className="rounded-full object-cover"
							/>
						</div>
						<h2 className="text-2xl font-recoleta-md font-normal mb-2">
							For Personal
						</h2>
						<p className="text-center mb-12 text-xs">
							Moving overseas? Paying bills or making transfers via currency or
							crypto is fast and secure with{" "}
							<span className="font-semibold">Wiremi</span> personal account.
							You can send money to 100+ countries worldwide.
						</p>
						<div className="relative">
							<Image
								src="/iphone15-mockup.png"
								alt="Mobile app interface"
								width={250}
								height={450}
								className="rounded-lg shadow-lg"
							/>
							<div className="absolute -left-10 top-1/2 transform -translate-y-1/2">
								<Image
									src="/close-up-portrait-handsome-confident-young-man-white-t-shirt-looking-away-blurry-outdoor-nature.png"
									alt="User 1"
									width={70}
									height={70}
									className="rounded-full object-cover"
								/>
							</div>
							<div className="absolute -right-10 top-4 transform -translate-y-1/2">
								<Image
									src="/pretty-woman-white-t-shirt-round-eyeglasses-feeling-shy.png"
									alt="User 2"
									width={70}
									height={70}
									className="rounded-full object-cover"
								/>
							</div>
							<div className="absolute -right-10 -bottom-3 transform -translate-y-1/2">
								<Image
									src="/pretty-woman-white-t-shirt-round-eyeglasses-feeling-shy.png"
									alt="User 2"
									width={70}
									height={70}
									className="rounded-full object-cover"
								/>
							</div>
						</div>
					</div>
					{/* Card 2 END */}
				</div>
			</div>
		</section>
	);
}
