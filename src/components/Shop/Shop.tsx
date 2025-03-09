import HeroSection from "./HeroSection";
import ContentSection from "./ContentSection";
import ProductShowcase from "./ProductShowcase";
import FeatureList from "./FeatureList";
import Footer from "@components/Landing/Footer";

function Shop() {
	return (
		<>
			<main className="mb-40 overflow-hidden bg-white font-inter">
				<HeroSection />
				<section className="mt-32 flex w-full flex-col px-20 max-md:mt-10 max-md:max-w-full max-md:px-5">
					<ContentSection
						title="Seasional Picks"
						description="A subheading for this section, as long or as short as you like"
						imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/fc0c9ba09539ce4c6edac0cf69a81969056114706932d83ed62740609d5e43e5?placeholderIfAbsent=true&apiKey=9570ebf0bdf745e9829d9755060a264b"
						imagePosition="right"
					/>

					<ContentSection
						title="Best Sellers"
						description="A subheading for this section, as long or as short as you like"
						imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/d45b85d2f1cdb4d541607dfb563da045b2c455279caf229b25618f4177086e56?placeholderIfAbsent=true&apiKey=9570ebf0bdf745e9829d9755060a264b"
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
