export default function Hero() {
	return (
		<section className="mx-auto w-full px-4 max-md:max-md:pr-5 sm:px-6 lg:pr-20">
			<div className="w-full">
				<h2 className="text-4xl font-bold tracking-tighter text-black sm:text-6xl">
					Fresh & Organic Food Delivered to Your Doorstep
				</h2>
				<p className="mt-4 text-xl leading-8 text-black sm:mt-6 sm:text-2xl sm:leading-9">
					Your one-stop destination for farm-fresh produce, exotic
					fruits, and high-quality organic food.
				</p>
			</div>
			<button
				className="mt-8 w-full rounded-lg bg-black px-6 py-4 text-xl font-medium text-white shadow-sm hover:bg-gray-800 sm:mt-10 sm:w-auto sm:px-8 sm:py-5 sm:text-2xl"
				onClick={() => (window.location.href = "/article")}
			>
				Article
			</button>
			<img
				src="https://cdn.builder.io/api/v1/image/assets/TEMP/3b9764922aa4ee8af2886fa74e772618b3cca452360dc160f7e4bb1c0f40ede0?placeholderIfAbsent=true&apiKey=9570ebf0bdf745e9829d9755060a264b"
				alt="Fresh organic produce"
				className="mt-6 aspect-video w-full rounded-lg object-cover"
			/>
		</section>
	);
}
