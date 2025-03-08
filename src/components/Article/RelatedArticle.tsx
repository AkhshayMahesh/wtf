import * as React from "react";
import { ArticleCard } from "./ArticleCard";

interface RelatedArticle {
	image: string;
	title: string;
	author: string;
}

interface RelatedArticlesProps {
	articles: RelatedArticle[];
}

export const RelatedArticles: React.FC<RelatedArticlesProps> = ({
	articles,
}) => {
	return (
		<section className="mt-32 max-md:mt-10">
			<h2 className="text-4xl font-inter font-semibold leading-none text-black max-md:max-w-full">
				Related articles or posts
			</h2>
			<div className="mt-12 grid grid-cols-3 gap-8 text-xl font-inter font-medium max-lg:grid-cols-2 max-sm:grid-cols-1">
				{articles.map((article, index) => (
					<ArticleCard
						key={index}
						image={article.image}
						title={article.title}
						author={article.author}
					/>
				))}
			</div>
		</section>
	);
};
