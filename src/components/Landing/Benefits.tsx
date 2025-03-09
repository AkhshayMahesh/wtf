import benefits from "../../assets/benefits.png";
export default function Benefits() {
	return (
		<section className="mt-20 w-full px-5 sm:mt-44 sm:px-1">
			<div className="flex flex-col gap-8 lg:flex-row lg:gap-5">
				<div className="w-full lg:w-[42%]">
					<div className="flex w-full flex-col items-start text-xl sm:text-2xl">
						<h2 className="text-3xl font-semibold tracking-tighter text-black sm:text-5xl">
							Section heading
						</h2>
						<div className="mt-8 space-y-8 sm:mt-12 sm:space-y-12">
							<article className="flex w-full cursor-pointer flex-col justify-center transition-all hover:tracking-wide">
								<h3 className="font-medium text-black">
									Premium Quality
								</h3>
								<p className="mt-2 leading-8 text-zinc-500 sm:leading-9">
									We ensure the highest quality standards with
									farm-to-table freshness
								</p>
							</article>
							<article className="flex w-full cursor-pointer flex-col justify-center transition-all hover:tracking-wide">
								<h3 className="font-medium text-black">
									Sustainably Sourced
								</h3>
								<p className="mt-2 leading-8 text-zinc-500 sm:leading-9">
									Our products come from sustainable farming
									practices for a healthier planet.
								</p>
							</article>
							<article className="flex w-full cursor-pointer flex-col justify-center transition-all hover:tracking-wide">
								<h3 className="font-medium text-black">
									Fast & Reliable Delivery
								</h3>
								<p className="mt-2 leading-8 text-zinc-500 sm:leading-9">
									Get your groceries delivered fresh and on
									time, every time.
								</p>
							</article>
						</div>
						<div className="mt-12 flex w-full flex-col gap-4 sm:mt-20 sm:w-auto sm:flex-row">
							<button
								className="w-full rounded-lg bg-black px-6 py-3 text-white shadow-sm hover:bg-gray-800 sm:w-auto"
								onClick={() => (window.location.href = "/shop")}
							>
								Shop Now
							</button>
							<button
								className="w-full rounded-lg bg-neutral-200 px-6 py-3 text-black shadow-sm hover:bg-neutral-300 sm:w-auto"
								onClick={() =>
									(window.location.href = "/product-detail")
								}
							>
								Learn More
							</button>
						</div>
					</div>
				</div>
				<div className="w-full lg:w-[58%]">
					<img
						src={benefits}
						alt="Benefits illustration"
						className="aspect-square w-full rounded-lg object-cover"
					/>
				</div>
			</div>
		</section>
	);
}
