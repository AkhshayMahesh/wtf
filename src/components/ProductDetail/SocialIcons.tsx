import React from "react";

const socialIcons = [
	{ icon: "ti ti-brand-facebook", label: "Facebook" },
	{ icon: "ti ti-brand-linkedin", label: "LinkedIn" },
	{ icon: "ti ti-brand-youtube", label: "YouTube" },
	{ icon: "ti ti-brand-instagram", label: "Instagram" },
];

export const SocialIcons: React.FC = () => {
	return (
		<div className="mt-6 flex gap-2">
			{socialIcons.map((social, index) => (
				<button
					key={index}
					className="flex h-12 w-12 cursor-pointer items-center justify-center rounded text-zinc-500 transition-colors hover:text-black max-sm:h-10 max-sm:w-10"
					aria-label={social.label}
				>
					<i className={social.icon} />
				</button>
			))}
		</div>
	);
};
