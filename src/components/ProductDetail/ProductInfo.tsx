"use client";

import React from "react";

interface ProductInfoProps {
	name: string;
	price: string;
	description: string;
	features: string;
}

export const ProductInfo: React.FC<ProductInfoProps> = ({
	name,
	price,
	description,
	features,
}) => {
	return (
		<article className="flex max-w-[515px] flex-col gap-6 max-md:max-w-full">
			<h1 className="text-4xl font-semibold leading-10 text-black max-md:text-3xl max-sm:text-2xl">
				{name}
			</h1>
			<p className="text-2xl leading-9 text-black max-md:text-xl">
				{price}
			</p>
			<p className="text-xl leading-8 text-zinc-500 max-md:text-lg max-sm:text-base">
				{description}
			</p>
			<button
				className="min-h-[48px] w-full cursor-pointer rounded-lg bg-black px-6 py-3.5 text-center text-base text-white transition-colors hover:bg-gray-800 md:w-auto"
				onClick={() => {
					// Add to cart functionality
				}}
			>
				Add to cart
			</button>
			<p className="text-base leading-6 text-zinc-500">{features}</p>
		</article>
	);
};
