import { ProductImage } from "./ProductImage";
import { ProductInfo } from "./ProductInfo";
import { RelatedProducts } from "./RelatedProducts";
import Footer from "../Landing/Footer";
import Navigation from "@components/Navigation";

export default function ProductDetail() {
	return (
		<>
			<Navigation />
			<main className="mx-auto my-0 w-full bg-white">
				<section className="mb-20 flex w-full px-20 pb-1 pt-16 font-inter max-lg:flex-col max-md:gap-5 max-md:px-6 max-md:pb-0 max-sm:gap-8 max-sm:px-4 max-sm:pt-8 md:gap-10 xl:gap-36">
					<ProductImage
						image="https://cdn.builder.io/api/v1/image/assets/TEMP/314ee57e3fca2d7eaafc435b2da54b0ce49d9ff4"
						altText="Organic Gourmet Mushroom"
					/>
					<ProductInfo
						name="Organic Gourmet Mushroom"
						price="$10.99"
						description="A premium selection of farm-fresh mushrooms, perfect for gourmet dishes and healthy meals."
						features="Sustainably grown | Freshly harvested | Packed with nutrients"
					/>
				</section>
				<RelatedProducts />
				<Footer />
			</main>
		</>
	);
}
