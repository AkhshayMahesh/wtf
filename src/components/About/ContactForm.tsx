"use client";
import React from "react";
import { FormInput } from "./FormInput";
import { FormTextArea } from "./FormTextArea";
import { SubmitButton } from "./SubmitButton";

export const ContactForm: React.FC = () => {
	const handleSubmit = () => {
		// Handle form submission
		console.log("Form submitted");
	};

	return (
		<form
			className="mt-4 flex w-full max-w-full flex-wrap items-start gap-4 text-base font-medium sm:mt-6 sm:w-[626px] sm:gap-6"
			onSubmit={(e) => {
				e.preventDefault();
				handleSubmit();
			}}
		>
			<FormInput
				label="First name"
				value="Jane"
				className="w-full sm:w-[295px]"
			/>
			<FormInput
				label="Last name"
				value="Smitherton"
				className="w-full sm:w-[297px]"
			/>
			<FormInput
				label="Email address"
				value="email@janesfakedomain.net"
				className="w-[626px] max-md:max-w-full"
			/>
			<FormTextArea
				label="Your message"
				value=""
				placeholder="Enter your question or message"
				className="w-[626px] max-md:max-w-full"
			/>
			<SubmitButton onClick={handleSubmit} />
		</form>
	);
};
