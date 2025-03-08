"use client";
import { AboutHeader } from "./AboutHeader";
import { ContactForm } from "./ContactForm";
import Navigation from "@components/Navigation";

function About() {
	return (
		<main className="h-screen w-screen bg-white">
			<Navigation />
			<section className="h-full w-full px-6 sm:px-24">
				<div className="flex h-full w-full flex-col justify-evenly md:flex-row md:gap-5">
					<div className="w-[50%] max-lg:ml-0 max-lg:w-full">
						<div className="pb-5 max-lg:mt-10 max-lg:max-w-full">
							<AboutHeader />
							<img
								src="https://cdn.builder.io/api/v1/image/assets/TEMP/c02cfe85607cac9747261a4a95f0b20d72af5ebe74823521d5c3dce05d9fe7f2?placeholderIfAbsent=true&apiKey=9570ebf0bdf745e9829d9755060a264b"
								alt="About section image"
								className="aspect-[0.77] w-2/3 rounded-lg object-contain max-lg:mt-10 lg:hidden"
							/>
							<h2 className="mt-20 text-3xl font-semibold text-black max-md:mt-10 max-md:max-w-full">
								Contact me
							</h2>
							<ContactForm />
						</div>
					</div>
					<div className="ml-5 hidden h-4/5 w-[50%] items-start justify-end max-md:ml-0 max-md:w-full lg:flex lg:flex-row">
						<img
							src="https://cdn.builder.io/api/v1/image/assets/TEMP/c02cfe85607cac9747261a4a95f0b20d72af5ebe74823521d5c3dce05d9fe7f2?placeholderIfAbsent=true&apiKey=9570ebf0bdf745e9829d9755060a264b"
							alt="About section image"
							className="aspect-[0.77] max-h-full rounded-lg object-contain"
						/>
					</div>
				</div>
			</section>
		</main>
	);
}

export default About;
