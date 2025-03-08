import FeatureCard from "./FeatureCard";

export default function Features() {
	return (
		<section className="w-full lg:pr-20 sm:px-1 ">
			<h2 className="mt-20 text-3xl font-semibold tracking-tighter text-black sm:mt-36 sm:text-5xl">
				Discover Freshness in Every Bite
			</h2>
			<div className="mt-8 grid grid-cols-1 gap-8 text-xl sm:grid-cols-2 sm:text-2xl lg:grid-cols-3">
				<FeatureCard
					imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/4d3cc7c420d1b5d0f7336206e3b24c7eeb4114f5dfc2f0ab545b7c22126d0d1c?placeholderIfAbsent=true&apiKey=9570ebf0bdf745e9829d9755060a264b"
					title="Handpicked Fruits"
					description="Juicy and delicious seasonal picks."
				/>
				<FeatureCard
					imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/dcb51c5d429de0266b8e7f9be06fd9a23efc45f33f0918ef151ae6d086eb81ea?placeholderIfAbsent=true&apiKey=9570ebf0bdf745e9829d9755060a264b"
					title="Delicious Beverages"
					description="Taste the richness of homemade juices and natural drinks."
				/>
				<FeatureCard
					imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/6791abaa17375097d5070b39b743964c57f059d932dc9808c3b10f780e97c66c?placeholderIfAbsent=true&apiKey=9570ebf0bdf745e9829d9755060a264b"
					title="Gourmet & Essentials"
					description="Premium dairy, nuts, and healthy snacks."
				/>
			</div>
		</section>
	);
}
