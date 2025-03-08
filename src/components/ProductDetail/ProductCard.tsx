import React from "react";

interface ProductCardProps {
	image: string;
	title: string;
	description: string;
	price: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({
	image,
	title,
	description,
	price,
}) => {
	return (
		<article className="flex flex-col gap-6 max-sm:gap-4">
			<img
				src={image}
				className="h-[250px] w-full rounded-lg object-cover max-sm:h-[200px]"
				alt={title}
			/>
			<div className="flex flex-col gap-1 max-sm:gap-2">
				<h3 className="text-2xl leading-9 text-black max-md:text-xl max-sm:text-lg">
					{title}
				</h3>
				<p className="text-xl leading-8 text-zinc-500 max-md:text-lg max-sm:text-base">
					{description}
				</p>
				<p className="text-xl leading-8 text-black max-md:text-lg max-sm:text-base">
					{price}
				</p>
			</div>
		</article>
	);
};
