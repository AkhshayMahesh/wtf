import Footer from "@components/Landing/Footer";
import { AboutHeader } from "./AboutHeader";
import { ContactForm } from "./ContactForm";
import Navigation from "@components/Navigation";
import aboutImage from "../../assets/about.png";

function About() {
	return (
		<main className="w-screen bg-white">
			<Navigation />
			<section className="mb-20 mt-5 h-full w-full px-6 sm:px-24 lg:mt-20">
				<div className="flex h-full w-full flex-col justify-evenly md:flex-row md:gap-5">
					<div className="w-[50%] max-lg:ml-0 max-lg:w-full">
						<div className="pb-5 max-lg:mt-10 max-lg:max-w-full">
							<AboutHeader />
							<h2 className="mt-20 text-3xl font-semibold text-black max-md:mt-10 max-md:max-w-full">
								Contact me
							</h2>
							<ContactForm />
						</div>
					</div>
					<div className="ml-5 hidden h-4/5 w-[50%] items-start justify-end max-md:ml-0 max-md:w-full lg:flex lg:flex-row">
						<img
							src={aboutImage}
							alt="About section image"
							className="aspect-[0.77] max-h-[80vh] rounded-lg object-contain"
						/>
					</div>
				</div>
			</section>
			<Footer />
		</main>
	);
}

export default About;
