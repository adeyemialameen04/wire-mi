import SectionHeader from "@/_components/section-header";
import { news } from "@/data/mock/news";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function NewsDetailPage({
	params,
}: { params: { id: string } }) {
	const newsId = await params.id;
	const newsItem = news[0];

	return (
		<div className="container py-14 flex flex-col gap-8 md:gap-10">
			<div className="flex flex-col gap-4">
				<div className="flex items-center gap-3">
					<Link href={"/news"}>
						<ArrowLeft className="h-4 w-4 text-black" />
					</Link>
					<SectionHeader className="text-[#105CE2] text-sm">
						News & Articles
					</SectionHeader>
				</div>
				<div className="sm:pl-6">
					<h5 className="text-[#00091E] font-bold text-[30px]">
						Top 10 must have features of a payment app.
					</h5>
					<p className="text-[#57686F] font-semibold text-xl">12th Jan, 2024</p>
				</div>
			</div>
			<div className="gap-4 flex flex-col md:grid news-content-grid">
				<div className="flex items-center flex-col gap-2 w-full h-full">
					<Image
						src={`/${newsItem.poster}`}
						alt="News Poster image"
						height={445}
						width={350}
						className="object-cover"
					/>
					<Image src="/logo-sm.png" height={18} width={70} alt="Wiremi Logo" />
				</div>
				<div className="flex flex-col gap-4">
					{newsItem.content.map((paragraph, index) => (
						<p key={index} className="text-[#57686F]">
							{paragraph}
						</p>
					))}
				</div>
				<div></div>
			</div>
		</div>
	);
}
