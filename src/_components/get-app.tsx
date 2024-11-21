import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function GetApp({ className }: { className?: string }) {
	return (
		<div className={cn("flex gap-2 flex-col", className)}>
			<Button className="bg-black py-8">
				<Image width={34} height={40} alt="Apple logo" src={"/apple.png"} />
				<div className="flex-col flex">
					<p>Download on the </p>
					<h5 className="text-2xl font-semibold">App Store</h5>
				</div>
			</Button>
			<Button className="bg-black py-8">
				<Image
					width={34}
					height={40}
					alt="Play store logo"
					src={"/play-store.png"}
				/>
				<div className="flex-col flex items-start">
					<p className="font-light text-sm uppercase">Get it on</p>
					<h5 className="text-2xl font-semibold">Google Play</h5>
				</div>
			</Button>
		</div>
	);
}
