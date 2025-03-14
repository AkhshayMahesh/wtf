import Navigation from "./Navigation";
import shopPears from "../../assets/shopPears.png";

export default function HeroSection() {
	return (
		<section className="relative flex min-h-[720px] w-full flex-col overflow-hidden font-inter max-md:min-h-[500px]">
			<div
				className="animate-scroll absolute inset-0 size-full bg-cover bg-bottom"
				style={{ backgroundImage: `url(${shopPears})` }}
			></div>
			<div className="absolute h-full w-full bg-black bg-opacity-20"></div>
			<Navigation />
			<div className="relative flex h-full w-full flex-col px-20 pb-44 pt-14 max-md:px-5 max-md:pb-24 max-md:pt-8">
				<div className="mx-auto flex max-w-[844px] flex-grow flex-col items-center justify-center px-4 text-white">
					<div className="text-center">
						<h2 className="text-6xl font-bold tracking-tight max-md:text-4xl max-sm:text-3xl">
							Shop Fresh & Organic
						</h2>
						<p className="mt-4 text-2xl font-medium max-md:text-xl max-sm:text-lg">
							Explore our selection of premium fresh produce and
							organic food
						</p>
					</div>
					<button
						className="mt-10 rounded-lg bg-black px-8 py-5 text-2xl font-medium shadow-sm transition-colors hover:bg-opacity-80 max-md:px-6 max-md:py-4 max-md:text-xl"
						onClick={() =>
							(window.location.href = "/product-detail")
						}
					>
						Shop
					</button>
				</div>
			</div>
		</section>
	);
}
