import * as React from "react";

interface ArticleHeaderProps {
	title: string;
	subtitle: string;
}

export const ArticleHeader: React.FC<ArticleHeaderProps> = ({
	title,
	subtitle,
}) => {
	return (
		<header className="flex w-[733px] max-w-full flex-col justify-center">
			<h1 className="text-6xl font-bold tracking-tighter text-black max-md:max-w-full max-md:text-4xl">
				{title}
			</h1>
			<p className="mt-6 text-2xl leading-9 text-black max-md:max-w-full">
				{subtitle}
			</p>
		</header>
	);
};
