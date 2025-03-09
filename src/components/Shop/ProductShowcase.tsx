import ProductCard from "./ProductCard";
import handpickedPremiumPears from "../../assets/handpickedPremiumPears.png";
import fruits from "../../assets/fruits.png";
import mushrooms from "../../assets/mushrooms.png";

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
							imageSrc={handpickedPremiumPears}
							title="Featured product"
							description="Handpicked premium pears, rich in flavor and nutrients"
							price="$10.99"
							isLarge
						/>
					</div>
					<div className="col-span-5 max-md:col-span-full">
						<div className="flex h-full flex-col justify-between gap-6 max-md:gap-6">
							<ProductCard
								imageSrc={fruits}
								title="Fruits"
								description="A delicate blend of fresh fruits for a balanced taste"
								price="$10.99"
							/>
							<ProductCard
								imageSrc={mushrooms}
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
