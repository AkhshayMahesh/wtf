import * as React from "react";

interface ArticleContentProps {
	mainImage: string;
	content: string[];
	additionalImages: string[];
}

export const ArticleContent: React.FC<ArticleContentProps> = ({
	mainImage,
	content,
	additionalImages,
}) => {
	return (
		<article className="flex flex-col">
			<img
				src={mainImage}
				alt="Article main image"
				className="mt-6 aspect-[1.97] w-full rounded-lg object-contain max-md:max-w-full"
			/>
			<p className="mt-14 w-[842px] self-center font-inter text-xl font-medium leading-8 text-black max-md:mt-10 max-md:max-w-full">
				{content.map((paragraph, index) => (
					<React.Fragment key={index}>
						{paragraph}
						<br />
						<br />
					</React.Fragment>
				))}
			</p>
			<div className="mt-20 flex flex-wrap items-start justify-center gap-8 max-md:mt-10 max-md:max-w-full">
				{additionalImages.map((image, index) => (
					<img
						key={index}
						src={image}
						alt={`Article image ${index + 1}`}
						className="aspect-[1.43] w-full min-w-60 rounded-lg object-contain px-5 max-md:max-w-full md:px-0 lg:w-[40vw]"
					/>
				))}
			</div>
		</article>
	);
};
