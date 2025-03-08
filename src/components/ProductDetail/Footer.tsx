import React from "react";
import { FooterColumn } from "./FooterColumn";
import { SocialIcons } from "./SocialIcons";

export const Footer: React.FC = () => {
	const footerColumns = [
		{
			title: "Support",
			links: ["FAQ", "Contact Us", "Returns"],
		},
		{
			title: "Company",
			links: ["About Us", "Careers", "Blog"],
		},
		{
			title: "Legal",
			links: ["Privacy Policy", "Terms of Service"],
		},
	];

	return (
		<footer className="border-t border-solid border-t-neutral-200 px-20 py-12 max-md:px-6 max-sm:px-4 max-sm:py-8">
			<div className="flex justify-between max-md:flex-col max-md:gap-12">
				<div className="flex flex-col">
					<h2 className="text-2xl text-black">FreshHarvest</h2>
					<SocialIcons />
				</div>
				<nav className="flex gap-8 max-md:flex-wrap max-sm:flex-col max-sm:gap-8">
					{footerColumns.map((column, index) => (
						<FooterColumn
							key={index}
							title={column.title}
							links={column.links}
						/>
					))}
				</nav>
			</div>
		</footer>
	);
};
