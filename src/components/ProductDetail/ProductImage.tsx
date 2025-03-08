import React from "react";

interface ProductImageProps {
	image: string;
	altText: string;
}

export const ProductImage: React.FC<ProductImageProps> = ({
	image,
	altText,
}) => {
	return (
		<img
			src={image}
			className="h-[613px] w-[625px] rounded-xl object-cover max-md:h-auto max-md:w-full"
			alt={altText}
		/>
	);
};
