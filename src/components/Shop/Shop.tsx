import HeroSection from "./HeroSection";
import ContentSection from "./ContentSection";
import ProductShowcase from "./ProductShowcase";
import FeatureList from "./FeatureList";
import Footer from "@components/Landing/Footer";
import seasonalPicks from "../../assets/seasonalPicks.png";
import bestSellers from "../../assets/bestSellers.png";

function Shop() {
	return (
		<>
			<main className="mb-40 overflow-hidden bg-white font-inter">
				<HeroSection />
				<section className="mt-32 flex w-full flex-col px-20 max-md:mt-10 max-md:max-w-full max-md:px-5">
					<ContentSection
						title="Seasional Picks"
						description="A subheading for this section, as long or as short as you like"
						imageSrc={seasonalPicks}
						imagePosition="right"
					/>

					<ContentSection
						title="Best Sellers"
						description="A subheading for this section, as long or as short as you like"
						imageSrc={bestSellers}
						imagePosition="left"
					/>

					<ProductShowcase />
					<FeatureList />
				</section>
			</main>
			<Footer />
		</>
	);
}

export default Shop;
