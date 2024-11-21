import { cn } from "@/lib/utils";
import { Sparkles } from "lucide-react";
import React from "react";

export default function SectionHeader({
	className,
	children,
}: { className?: string; children: React.ReactNode }) {
	return (
		<p
			className={cn(
				"font-be-vietnam-pro italic font-semibold text-lg flex items-center gap-1",
				className,
			)}
		>
			{" "}
			<Sparkles className="h-4 w-4" />
			{children}
		</p>
	);
}
