import FeatureCard from "./FeatureCard";

export default function FeatureList() {
	const features = [
		{
			iconSrc:
				"https://cdn.builder.io/api/v1/image/assets/TEMP/0ca2e8a0673b3f96a568d5703a477721349b05cf8bb33dd9b4e02a4f8eef8c31?placeholderIfAbsent=true&apiKey=9570ebf0bdf745e9829d9755060a264b",
			title: "Sustainability First",
			description:
				"Our products are ethically sourced and environmentally friendly.",
		},
		{
			iconSrc:
				"https://cdn.builder.io/api/v1/image/assets/TEMP/e265bbb943e10171a106fa3b940cbff4a7ae4ddf99da41552c31670a5e8765c5?placeholderIfAbsent=true&apiKey=9570ebf0bdf745e9829d9755060a264b",
			title: "Customer Satisfaction",
			description:
				"We prioritize customer experience with reliable service and fresh produce",
		},
		{
			iconSrc:
				"https://cdn.builder.io/api/v1/image/assets/TEMP/17934cd0e2360b01da287d4d1cfc105feb1d9d80b5d5833a8ccdf98282cf6bd7?placeholderIfAbsent=true&apiKey=9570ebf0bdf745e9829d9755060a264b",
			title: "Quality Assurance",
			description:
				"Every product goes through a rigorous quality check before reaching you.",
		},
		{
			iconSrc:
				"https://cdn.builder.io/api/v1/image/assets/TEMP/0d6c1c47f4b2555b556f480c9b8286f312a5451ed3c0c6ce36e43d0df17b94a6?placeholderIfAbsent=true&apiKey=9570ebf0bdf745e9829d9755060a264b",
			title: "Fresh, Every Day",
			description:
				"We ensure daily restocking for the best and freshest selection.",
		},
	];

	return (
		<section className="w-full">
			<h2 className="mt-36 text-5xl font-semibold tracking-tighter text-black max-md:mt-20 max-md:text-4xl max-sm:mt-16 max-sm:text-3xl">
				Why Shop With Us?
			</h2>
			<div className="mt-12 max-md:mt-8">
				<div className="grid grid-cols-2 gap-8 max-md:grid-cols-1 max-md:gap-6">
					{features.map((feature, index) => (
						<div key={index} className="max-w-[515px]">
							<FeatureCard {...feature} />
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
