import Navigation from "../Navigation";
import Hero from "./Hero";
import Features from "./Features";
import Benefits from "./Benefits";
import Testimonials from "./Testimonials";
import CallToAction from "./CallToAction";
import Footer from "./Footer";
import ChooseUs from "./ChooseUs";

function LandingPage() {
	return (
		<main className="overflow-hidden bg-white">
			<Navigation />
			<div className="mt-12 flex w-full flex-col items-start pl-20 font-inter max-md:mt-10 max-md:max-w-full max-md:pl-5">
				<Hero />
				<Features />
				<Benefits />
				<ChooseUs />
				<Testimonials />
			</div>
			<CallToAction />
			<Footer />
		</main>
	);
}

export default LandingPage;
