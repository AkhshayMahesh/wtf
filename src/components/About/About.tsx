"use client";
import { AboutHeader } from "./AboutHeader";
import { ContactForm } from "./ContactForm";
import Navigation from "@components/Navigation";

function About() {
	return (
		<main className="overflow-hidden bg-white px-6 py-16 sm:px-20 sm:py-80">
			<Navigation />
			<section className="mx-auto w-full max-w-7xl">
				<div className="flex flex-col gap-8 sm:flex-row sm:gap-5">
					<div className="w-[55%] max-md:ml-0 max-md:w-full">
						<div className="max-md:mt-10 max-md:max-w-full">
							<AboutHeader />
							<h2 className="mt-20 text-3xl font-semibold text-black max-md:mt-10 max-md:max-w-full">
								Contact me
							</h2>
						</div>
					</div>
					<div className="ml-5 w-[45%] max-md:ml-0 max-md:w-full">
						<img
							src="https://cdn.builder.io/api/v1/image/assets/TEMP/c02cfe85607cac9747261a4a95f0b20d72af5ebe74823521d5c3dce05d9fe7f2?placeholderIfAbsent=true&apiKey=9570ebf0bdf745e9829d9755060a264b"
							alt="About section image"
							className="aspect-[0.77] w-full grow rounded-lg object-contain max-md:mt-10 max-md:max-w-full"
						/>
					</div>
				</div>
			</section>
			<ContactForm />
		</main>
	);
}

export default About;
