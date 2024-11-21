export default function Hero() {
	return (
		<div>
			<div className="h-[60dvh] w-full overflow-hidden border bg-gradient-to-r from-[#014a9a] to-[#2a9a4f] shadow md:rounded-lg lg:h-[55dvh]">
				<div
					style={{
						backgroundImage: "url(/curly-bg.jpg)",
						backgroundSize: "cover",
						backgroundPosition: "center",
						backgroundRepeat: "no-repeat",
					}}
					className="h-full w-full"
					data-testid="banner"
				/>
			</div>
		</div>
	);
}
