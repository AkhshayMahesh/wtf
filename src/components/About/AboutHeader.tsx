import React from "react";
import aboutImage from "../../assets/about.png";

export const AboutHeader: React.FC = () => {
	return (
		<header className="text-black max-md:max-w-full">
			<h1 className="text-4xl font-bold tracking-tighter sm:text-6xl">
				About
			</h1>
			<img
				src={aboutImage}
				alt="About section image"
				className="mt-2 aspect-[0.77] w-2/3 rounded-lg object-contain lg:hidden"
			/>
			<p className="mt-4 text-xl text-zinc-500 sm:mt-6 sm:text-2xl">
				Subheading for description or instructions
			</p>
			<article className="mt-4 text-lg font-medium leading-7 sm:mt-6 sm:text-xl sm:leading-8">
				Body text for your whole article or post. Well put in some lorem
				ipsum to show how a filled-out page might look:
				<br />
				<br />
				Excepteur efficient emerging, minim veniam anim aute carefully
				curated Ginza conversation exquisite perfect nostrud nisi
				intricate Content. Qui international first-class nulla ut.
				Punctual adipisicing, essential lovely queen tempor eiusmod
				irure. Exclusive izakaya charming Scandinavian impeccable aute
				quality of life soft power pariatur Melbourne occaecat
				discerning. Qui wardrobe aliquip, et Porter destination Toto
				remarkable officia Helsinki excepteur Basset hound. Zürich
				sleepy perfect consectetur.
			</article>
		</header>
	);
};
