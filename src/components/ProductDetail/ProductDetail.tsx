"use client";
import { ProductImage } from "./ProductImage";
import { ProductInfo } from "./ProductInfo";
import { RelatedProducts } from "./RelatedProducts";
import { Footer } from "./Footer";

export default function ProductDetail() {
	return (
		<>
			<link
				href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
				rel="stylesheet"
			/>
			<main className="mx-auto my-0 w-full max-w-[1440px] bg-white">
				<section className="mb-20 flex gap-36 px-20 pb-0 pt-40 max-md:flex-col max-md:gap-10 max-md:px-6 max-md:pb-0 max-md:pt-16 max-sm:gap-8 max-sm:px-4 max-sm:pt-8">
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
