import React from "react";

interface FooterColumnProps {
	title: string;
	links: string[];
}

export const FooterColumn: React.FC<FooterColumnProps> = ({ title, links }) => {
	return (
		<div className="flex w-[187px] flex-col gap-6 max-sm:w-full">
			<h3 className="text-base font-medium text-black">{title}</h3>
			{links.map((link, index) => (
				<a
					key={index}
					href="#"
					className="cursor-pointer text-base text-zinc-700 transition-colors hover:text-black"
				>
					{link}
				</a>
			))}
		</div>
	);
};
