import React from "react";

interface SubmitButtonProps {
	onClick?: () => void;
	className?: string;
}

export const SubmitButton: React.FC<SubmitButtonProps> = ({
	onClick,
	className = "",
}) => {
	return (
		<button
			onClick={onClick}
			className={`w-full shrink gap-2 self-stretch whitespace-nowrap rounded-lg bg-black px-5 py-3 text-lg text-white shadow-sm sm:flex-1 sm:px-8 sm:py-4 sm:text-xl ${className}`}
		>
			Submit
		</button>
	);
};
