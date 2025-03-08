export default function ChooseUs() {
	return (
		<div className="min-h-screen bg-white">
			<section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
				<h2 className="mb-16 text-left text-4xl font-bold sm:text-5xl">
					Why Choose Us?
				</h2>

				<div className="grid grid-cols-1 gap-12 md:grid-cols-2">
					{/* First Feature */}
					<div className="space-y-6">
						<div className="aspect-[4/3] overflow-hidden rounded-lg bg-gray-100">
							{/* Image placeholder */}
							<div className="flex h-full w-full items-center justify-center text-gray-400">
								Image 1
							</div>
						</div>
						<div>
							<h3 className="mb-3 text-2xl font-semibold">
								High-Quality, Fresh Ingredients
							</h3>
							<p className="text-lg text-gray-600">
								We source only the freshest, organic ingredients
								to ensure the best quality.
							</p>
						</div>
					</div>

					{/* Second Feature */}
					<div className="space-y-6">
						<div className="aspect-[4/3] overflow-hidden rounded-lg bg-gray-100">
							{/* Image placeholder */}
							<div className="flex h-full w-full items-center justify-center text-gray-400">
								Image 2
							</div>
						</div>
						<div>
							<h3 className="mb-3 text-2xl font-semibold">
								A Taste of Luxury & Comfort
							</h3>
							<p className="text-lg text-gray-600">
								Enjoy artisanal, handcrafted baked goods and
								fresh produce, perfect for every occasion.
							</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
