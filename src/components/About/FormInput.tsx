import React from "react";

interface FormInputProps {
	label: string;
	value: string;
	placeholder?: string;
	className?: string;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	name: string;
}

export const FormInput: React.FC<FormInputProps> = ({
	label,
	value,
	placeholder,
	className = "",
	onChange,
	name,
}) => {
	return (
		<div className={`min-h-[4.5rem] w-full ${className}`}>
			<label className="text-base font-medium text-black">{label}</label>
			<input
				name={name}
				type="text"
				value={value}
				placeholder={placeholder}
				className="mt-1.5 size-full flex-1 shrink basis-0 gap-2 whitespace-nowrap rounded-lg border border-solid border-neutral-200 bg-white px-3 py-2.5 text-zinc-500 shadow-sm sm:mt-2 sm:px-4 sm:py-3"
				aria-label={label}
				onChange={onChange}
			/>
		</div>
	);
};
