import ShopNavbar from "./ShopNavbar";

export default function HeroSection() {
	return (
		<section className="relative flex min-h-[720px] w-full flex-col overflow-hidden max-md:min-h-[500px]">
			<img
				src="https://cdn.builder.io/api/v1/image/assets/TEMP/4fa7d3e8ea8bafdeb58e6611cbbc61ff7bc5d99b9ece147bac691dcff4eb5eed?placeholderIfAbsent=true&apiKey=9570ebf0bdf745e9829d9755060a264b"
				alt="Fresh produce background"
				className="absolute inset-0 size-full object-cover"
			/>
			<div className="relative flex h-full w-full flex-col bg-black bg-opacity-20 px-20 pb-44 pt-14 max-md:px-5 max-md:pb-24 max-md:pt-8">
				<ShopNavbar />
				<div className="mx-auto flex max-w-[844px] flex-grow flex-col items-center justify-center px-4 text-white">
					<div className="text-center">
						<h2 className="text-6xl font-bold tracking-tighter max-md:text-4xl max-sm:text-3xl">
							Shop Fresh & Organic
						</h2>
						<p className="mt-4 text-2xl font-medium max-md:text-xl max-sm:text-lg">
							Explore our selection of premium fresh produce and
							organic food
						</p>
					</div>
					<button className="mt-10 rounded-lg bg-black px-8 py-5 text-2xl font-medium shadow-sm transition-colors hover:bg-opacity-80 max-md:px-6 max-md:py-4 max-md:text-xl">
						Shop
					</button>
				</div>
			</div>
		</section>
	);
}
