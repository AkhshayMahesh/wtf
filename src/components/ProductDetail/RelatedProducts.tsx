import React from "react";
import { ProductCard } from "./ProductCard";
import freshPears from "../../assets/freshPears.png";
import radishGreens from "../../assets/radishGreens.png";
import watermelon from "../../assets/watermelon.png";
import organicMushrooms from "../../assets/organicMushrooms.png";
import seasonalVegetables from "../../assets/seasonalVegetables.png";
import cherryBunch from "../../assets/cherryBunch.png";

const relatedProducts = [
	{
		image: freshPears,
		title: "Fresh Pears",
		description: "Sweet and juicy organic pears",
		price: "$10.99",
	},
	{
		image: radishGreens,
		title: "Radish Greens",
		description: "Crisp and fresh garden radishes.",
		price: "$10.99",
	},
	{
		image: watermelon,
		title: "Watermelon",
		description: "Refreshing, naturally sweet watermelon.",
		price: "$10.99",
	},
	{
		image: organicMushrooms,
		title: "Organic Mushrooms",
		description: "Rich in flavor, perfect for cooking",
		price: "$10.99",
	},
	{
		image: seasonalVegetables,
		title: "Seasonal Vegetables",
		description: "Handpicked for the best quality",
		price: "$10.99",
	},
	{
		image: cherryBunch,
		title: "Cherry Bunch",
		description: "Sun-ripened, sweet and tangy cherries.",
		price: "$10.99",
	},
];

export const RelatedProducts: React.FC = () => {
	return (
		<section className="px-20 py-0 max-md:px-6 max-sm:px-4">
			<h2 className="mb-8 text-3xl font-semibold text-black max-md:text-2xl max-sm:mb-6 max-sm:text-xl">
				Related products
			</h2>
			<div className="mb-20 grid grid-cols-[repeat(3,1fr)] gap-8 max-md:grid-cols-[repeat(2,1fr)] max-sm:grid-cols-[1fr] max-sm:gap-4">
				{relatedProducts.map((product, index) => (
					<div className="cursor-pointer" key={index}>
						<ProductCard
							image={product.image}
							title={product.title}
							description={product.description}
							price={product.price}
						/>
					</div>
				))}
			</div>
		</section>
	);
};
