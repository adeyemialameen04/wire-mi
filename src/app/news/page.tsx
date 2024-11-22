import PageHero from "@/_components/page-hero";
import NewsAndArticles from "./_components/news-and-articles";

export default function NewsPage() {
	return (
		<>
			<PageHero
				title="News & Articles"
				desc="Explore the latest trends and tips on finance"
			/>
			<NewsAndArticles />
		</>
	);
}
