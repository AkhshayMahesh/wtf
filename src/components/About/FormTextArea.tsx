import React from "react";

interface FormTextAreaProps {
	label: string;
	value: string;
	placeholder?: string;
	className?: string;
}

export const FormTextArea: React.FC<FormTextAreaProps> = ({
	label,
	value,
	placeholder,
	className = "",
}) => {
	return (
		<div className={`min-h-[160px] w-full sm:min-h-[194px] ${className}`}>
			<label className="text-base font-medium text-black">{label}</label>
			<div
				className="mt-1.5 size-full flex-1 shrink basis-0 gap-2 rounded-lg border border-solid border-neutral-200 bg-white px-3 py-2.5 text-zinc-500 shadow-sm sm:mt-2 sm:px-4 sm:py-3"
				role="textbox"
				aria-label={label}
			>
				{value || placeholder}
			</div>
		</div>
	);
};
