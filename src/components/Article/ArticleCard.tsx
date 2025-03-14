import * as React from "react";

interface ArticleCardProps {
	image: string;
	title: string;
	author: string;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({
	image,
	title,
	author,
}) => {
	return (
		<article className="w-full pr-6 transition-transform hover:scale-105 hover:cursor-pointer md:pr-10 lg:pr-0">
			<img
				src={image}
				alt={title}
				className="aspect-[1.17] w-full flex-1 rounded-lg object-contain"
			/>
			<div className="mt-6 flex w-full flex-col justify-center">
				<h3 className="font-inter text-xl font-medium text-black">
					{title}
				</h3>
				<p className="mt-1 font-inter text-xl font-medium text-zinc-500">
					{author}
				</p>
			</div>
		</article>
	);
};
