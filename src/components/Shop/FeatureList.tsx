import TiltCard from "@components/TiltCard/TiltCard";
import FeatureCard from "./FeatureCard";
import sustainability from "../../assets/sustanibility.svg";
import customer from "../../assets/customer.svg";
import quality from "../../assets/quality.svg";
import calender from "../../assets/calender.svg";

export default function FeatureList() {
	const features = [
		{
			iconSrc: sustainability,
			title: "Sustainability First",
			description:
				"Our products are ethically sourced and environmentally friendly.",
		},
		{
			iconSrc: customer,
			title: "Customer Satisfaction",
			description:
				"We prioritize customer experience with reliable service and fresh produce",
		},
		{
			iconSrc: quality,
			title: "Quality Assurance",
			description:
				"Every product goes through a rigorous quality check before reaching you.",
		},
		{
			iconSrc: calender,
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
						<div
							key={index}
							className="max-w-[515px] cursor-pointer"
						>
							<TiltCard>
								<FeatureCard {...feature} />
							</TiltCard>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
