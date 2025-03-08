import ProductCard from "./ProductCard";

export default function ProductShowcase() {
	return (
		<section className="w-full">
			<h2 className="mt-36 text-5xl font-semibold tracking-tighter text-black max-md:mt-20 max-md:text-4xl max-sm:mt-16 max-sm:text-3xl">
				Fresh & Organic Selection
			</h2>
			<div className="mt-12 max-md:mt-8">
				<div className="grid grid-cols-12 gap-5 max-md:grid-cols-1">
					<div className="col-span-7 max-md:col-span-full">
						<ProductCard
							imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/c44e14c308fd1bc41f9f6a3122dbfbaed4e780fdbba4f9d0399ae5c31a996e28?placeholderIfAbsent=true&apiKey=9570ebf0bdf745e9829d9755060a264b"
							title="Featured product"
							description="Handpicked premium pears, rich in flavor and nutrients"
							price="$10.99"
							isLarge
						/>
					</div>
					<div className="col-span-5 max-md:col-span-full">
						<div className="flex h-full flex-col justify-between gap-6 max-md:gap-6">
							<ProductCard
								imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/fa96e7c24ebb3f2881fc8560f8551fb493ecc0d3daafc494543c2ce5bf7f20a3?placeholderIfAbsent=true&apiKey=9570ebf0bdf745e9829d9755060a264b"
								title="Fruits"
								description="A delicate blend of fresh fruits for a balanced taste"
								price="$10.99"
							/>
							<ProductCard
								imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/cb92e77edd60d87d3c7b84658aee12b82c1c3ed6aa60be753ea95077c36e5dcc?placeholderIfAbsent=true&apiKey=9570ebf0bdf745e9829d9755060a264b"
								title="Mushrooms"
								description="Organic mushrooms, perfect for gourmet dishes"
								price="$10.99"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
