export default function CallToAction() {
	return (
		<section className="mt-20 w-full bg-neutral-100 p-8 sm:p-20">
			<div className="flex flex-col gap-8 lg:flex-row lg:gap-5">
				<div className="w-full lg:w-[68%]">
					<h2 className="text-3xl font-semibold tracking-tighter text-black sm:text-5xl">
						Join Us for a Healthier Lifestyle!
					</h2>
				</div>
				<div className="w-full lg:w-[32%]">
					<div className="flex flex-col gap-4 text-xl font-medium sm:flex-row sm:gap-6 sm:text-2xl">
						<button className="w-full rounded-lg bg-black px-6 py-4 text-white shadow-sm hover:bg-gray-800 sm:w-auto sm:px-8 sm:py-5">
							Shop
						</button>
						<button className="w-full rounded-lg bg-neutral-200 px-6 py-4 text-black shadow-sm hover:bg-neutral-300 sm:w-auto sm:px-8 sm:py-5">
							Learn More
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}
