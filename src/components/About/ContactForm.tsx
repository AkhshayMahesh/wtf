"use client";
import React, { useState } from "react";
import { FormInput } from "./FormInput";
import { FormTextArea } from "./FormTextArea";
import { SubmitButton } from "./SubmitButton";

export const ContactForm: React.FC = () => {
	const [formData, setFormData] = useState({
		firstName: "Jane",
		lastName: "Smitherton",
		email: "email@janesfakedomain.net",
		message: "",
	});

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleTextAreaChange = (
		e: React.ChangeEvent<HTMLTextAreaElement>,
	) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleSubmit = () => {
		// Handle form submission
		console.log("Form submitted", formData);
	};

	return (
		<form
			className="mt-4 flex w-full max-w-full flex-wrap items-start gap-4 text-base font-medium sm:mt-6 sm:w-[626px]"
			onSubmit={(e) => {
				e.preventDefault();
				handleSubmit();
			}}
		>
			<FormInput
				label="First name"
				value={formData.firstName}
				className="w-full sm:w-[295px]"
				onChange={handleChange}
				name="firstName"
			/>
			<FormInput
				label="Last name"
				value={formData.lastName}
				className="w-full sm:w-[297px]"
				onChange={handleChange}
				name="lastName"
			/>
			<FormInput
				label="Email address"
				value={formData.email}
				className="w-[626px] max-md:max-w-full"
				onChange={handleChange}
				name="email"
			/>
			<FormTextArea
				label="Your message"
				value={formData.message}
				placeholder="Enter your question or message"
				className="w-[626px] max-md:max-w-full"
				onChange={handleTextAreaChange}
				name="message"
			/>
			<SubmitButton onClick={handleSubmit} />
		</form>
	);
};
