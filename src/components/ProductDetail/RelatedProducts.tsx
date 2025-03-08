import React from "react";
import { ProductCard } from "./ProductCard";

const relatedProducts = [
	{
		image: "https://cdn.builder.io/api/v1/image/assets/TEMP/5720f4694271c394a3877c4bf78e57962b5bd998",
		title: "Fresh Pears",
		description: "Sweet and juicy organic pears",
		price: "$10.99",
	},
	{
		image: "https://cdn.builder.io/api/v1/image/assets/TEMP/9edab28dca67c4b95692fa4fba1a150ddb201261",
		title: "Radish Greens",
		description: "Crisp and fresh garden radishes.",
		price: "$10.99",
	},
	{
		image: "https://cdn.builder.io/api/v1/image/assets/TEMP/b594383ec5ddac92a5f35adc625d2ff3fb973a75",
		title: "Watermelon",
		description: "Refreshing, naturally sweet watermelon.",
		price: "$10.99",
	},
	{
		image: "https://cdn.builder.io/api/v1/image/assets/TEMP/c101eb0c763c61ce7eac7ba5299ce90297e571ee",
		title: "Organic Mushrooms",
		description: "Rich in flavor, perfect for cooking",
		price: "$10.99",
	},
	{
		image: "https://cdn.builder.io/api/v1/image/assets/TEMP/575522ea56d17dbdad815095aa398a051232802e",
		title: "Seasonal Vegetables",
		description: "Handpicked for the best quality",
		price: "$10.99",
	},
	{
		image: "https://cdn.builder.io/api/v1/image/assets/TEMP/e69f0676e007670dfd96d41a418cc3f5a4b194cd",
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
					<ProductCard
						key={index}
						image={product.image}
						title={product.title}
						description={product.description}
						price={product.price}
					/>
				))}
			</div>
		</section>
	);
};
