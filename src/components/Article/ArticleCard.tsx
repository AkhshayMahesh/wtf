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
		<article className="min-h-[434px] w-[404px] min-w-60">
			<img
				src={image}
				alt={title}
				className="aspect-[1.17] w-full flex-1 rounded-lg object-contain"
			/>
			<div className="mt-6 flex w-full flex-col justify-center">
				<h3 className="text-xl font-medium text-black">{title}</h3>
				<p className="mt-1 text-xl font-medium text-zinc-500">
					{author}
				</p>
			</div>
		</article>
	);
};
