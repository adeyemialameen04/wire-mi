import SectionHeader from "@/_components/section-header";
import { Button } from "@/components/ui/button";
import { news } from "@/data/mock/news";
import { News } from "@/types/news";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function NewsAndArticles() {
	return (
		<section className="container flex flex-col md:px-12 py-20 gap-5">
			<div className="flex flex-col gap-2">
				<SectionHeader className="text-[#105CE2]">
					News & Articles
				</SectionHeader>
				<h5 className="font-recoleta-alt-sb font-semibold text-2xl text-[#00091E]">
					Our news and <span className="text-[#105CE2]">articles</span> section
					is dedicated to keeping our users informed
				</h5>
				<p className="text-[#57686F]">
					Explore the latest insights, trends, and tips on finance, investments,
					and technology with Wiremi&apos;s blog.&quot;
				</p>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
				{news.map((item, index) => (
					<NewsItem key={item.id + index} item={item} />
				))}
			</div>
		</section>
	);
}

const NewsItem = ({ item }: { item: News }) => {
	return (
		<div className="flex flex-col gap-5">
			<div className="relative h-[280px] w-full">
				<Image
					src={`/${item.poster}`}
					fill
					alt="News image"
					className="object-cover"
				/>
				<div className="absolute right-0 left-0 bottom-0 py-5 px-7 flex flex-col border-t border-t-[#FFFFFF33] backdrop-blur supports-[backdrop-filter]:bg-[#00000000]">
					<Image src="/logo-sm.png" height={18} width={70} alt="Wiremi Logo" />
					<p className="text-sm font-medium text-white">{item.createdAt}</p>
				</div>
			</div>
			<div className="flex flex-col gap-4">
				<h5 className="text-[#00091E] font-semibold text-2xl">
					Top 10 must have features of a payment app
				</h5>
				<p className="text-[#57686F]">
					Discover the benefits of investing in the digital age and how to make
					the most of your investments.
				</p>
			</div>
			<Button
				variant={"link"}
				className="text-[#105CE2] self-start p-0"
				asChild
			>
				<Link href={`/news/${item.id}`}>
					Read post <ArrowUpRight className="h-4 w-4" />
				</Link>
			</Button>
		</div>
	);
};
