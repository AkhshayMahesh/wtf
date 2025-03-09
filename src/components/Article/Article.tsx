import Navigation from "../Navigation";
import { ArticleHeader } from "./ArticleHeader";
import { ArticleContent } from "./ArticleContent";
import { RelatedArticles } from "./RelatedArticle";
import Footer from "@components/Landing/Footer";
import fiveBenefits from "../../assets/5benefits.png";
import storeFruits from "../../assets/storeFruits.png";
import superFood from "../../assets/superfood.png";
import mainImageArticle from "../../assets/mainImageArticle.png";
import additional1 from "../../assets/additional1.png";
import additional2 from "../../assets/additional2.png";

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
			image: fiveBenefits,
			title: "5 Benefits of Organic Food",
			author: "Author",
		},
		{
			image: storeFruits,
			title: "How to Store Fruits Properly",
			author: "Author",
		},
		{
			image: superFood,
			title: "Best Superfoods for Your Diet",
			author: "Author",
		},
	];

	return (
		<div className="overflow-hidden bg-white">
			<Navigation />
			<main className="mb-[20vh] mt-20 flex w-full flex-col px-20 max-md:mt-10 max-md:max-w-full max-md:px-5">
				<ArticleHeader
					title="The Secret to Eating Healthy & Fresh"
					subtitle="Learn how organic food benefits your health and the environment."
				/>
				<ArticleContent
					mainImage={mainImageArticle}
					content={articleContent}
					additionalImages={[additional1, additional2]}
				/>
				<RelatedArticles articles={relatedArticles} />
			</main>
			<Footer />
		</div>
	);
};

export default Article;
