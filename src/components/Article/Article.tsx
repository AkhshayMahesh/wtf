"use client";
import { Navigation } from "../Navigation";
import { ArticleHeader } from "./ArticleHeader";
import { ArticleContent } from "./ArticleContent";
import { RelatedArticles } from "./RelatedArticle";

const Article = () => {
	const articleContent = [
		"Body text for your whole article or post. We'll put in some lorem ipsum to show how a filled-out page might look:",
		"Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi intricate Content. Qui international first-class nulla ut. Punctual adipisicing, essential lovely queen tempor eiusmod irure. Exclusive izakaya charming Scandinavian impeccable aute quality of life soft power pariatur Melbourne occaecat discerning. Qui wardrobe aliquip, et Porter destination Toto remarkable officia Helsinki excepteur Basset hound. Zürich sleepy perfect consectetur.",
		"Exquisite sophisticated iconic cutting-edge laborum deserunt Addis Ababa esse bureaux cupidatat id minim. Sharp classic the best commodo nostrud delightful. Conversation aute Rochester id. Qui sunt remarkable deserunt intricate airport handsome K-pop excepteur classic esse Asia-Pacific laboris.",
		"Excepteur efficient emerging, minim veniam anim cloying aute carefully curated gauche. Espresso exquisite perfect nostrud nisi intricate. Punctual adipisicing Borzoi, essential lovely tempor eiusmod irure. Exclusive izakaya charming Quezon City impeccable aute quality of life soft power pariatur occaecat discerning. Qui wardrobe aliquip, et Amadeus rock opera.",
		"Exquisite sophisticated iconic cutting-edge laborum deserunt esse bureaux cupidatat id minim. Sharp classic the best commodo nostrud delightful. Conversation aute wifey id. Qui sunt remarkable deserunt intricate airport excepteur classic esse riot girl.",
	];

	const relatedArticles = [
		{
			image: "https://cdn.builder.io/api/v1/image/assets/TEMP/4d1ce415db32ee91ec22e2b34f32999013cf0022e2fbc7999bd41f7f4da2dd0f?placeholderIfAbsent=true",
			title: "5 Benefits of Organic Food",
			author: "Author",
		},
		{
			image: "https://cdn.builder.io/api/v1/image/assets/TEMP/7c82b42e8a00da4f09aeb800a7887e701db3aecf1113a8eef35250d3fd3627a8?placeholderIfAbsent=true",
			title: "How to Store Fruits Properly",
			author: "Author",
		},
		{
			image: "https://cdn.builder.io/api/v1/image/assets/TEMP/f0bae1a8de90101b7185a135c4d6589419847980612ae26bc1333435d000248d?placeholderIfAbsent=true",
			title: "Best Superfoods for Your Diet",
			author: "Author",
		},
	];

	return (
		<div className="overflow-hidden bg-white pb-96 max-md:pb-24">
			<Navigation />
			<main className="mt-20 flex w-full flex-col px-20 max-md:mt-10 max-md:max-w-full max-md:px-5">
				<ArticleHeader
					title="The Secret to Eating Healthy & Fresh"
					subtitle="Learn how organic food benefits your health and the environment."
				/>
				<ArticleContent
					mainImage="https://cdn.builder.io/api/v1/image/assets/TEMP/7ef4668f74e1510e428bc0c88ac3fd8fbb9572cb6ce52ae12272ab0def5f05a5?placeholderIfAbsent=true"
					content={articleContent}
					additionalImages={[
						"https://cdn.builder.io/api/v1/image/assets/TEMP/5f481bea44b42d18c039ecd3104085634dd7a3a1594523060b5832659bb1aec0?placeholderIfAbsent=true",
						"https://cdn.builder.io/api/v1/image/assets/TEMP/3274c6e4b4cc572e28628b6e1995c9b5132ef6f0914b1d98183d25e82fc50248?placeholderIfAbsent=true",
					]}
				/>
				<RelatedArticles articles={relatedArticles} />
			</main>
		</div>
	);
};

export default Article;
