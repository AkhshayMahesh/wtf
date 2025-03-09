import FeatureCard from "./FeatureCard";
import handpicked from "../../assets/handpicked.png";
import beverages from "../../assets/delecious.png";
import gourmet from "../../assets/gourmet.png";

export default function Features() {
	return (
		<section className="w-full max-md:pr-5 sm:px-1 lg:pr-20">
			<h2 className="mt-20 text-3xl font-semibold tracking-tighter text-black sm:mt-36 sm:text-5xl">
				Discover Freshness in Every Bite
			</h2>
			<div className="mt-8 grid grid-cols-1 gap-8 text-xl sm:grid-cols-2 sm:text-2xl lg:grid-cols-3">
				<FeatureCard
					imageSrc={handpicked}
					title="Handpicked Fruits"
					description="Juicy and delicious seasonal picks."
				/>
				<FeatureCard
					imageSrc={beverages}
					title="Delicious Beverages"
					description="Taste the richness of homemade juices and natural drinks."
				/>
				<FeatureCard
					imageSrc={gourmet}
					title="Gourmet & Essentials"
					description="Premium dairy, nuts, and healthy snacks."
				/>
			</div>
		</section>
	);
}
