import TestimonialCard from "./TestimonialCard";
import test1 from "../../assets/test1.png";
import test2 from "../../assets/test2.png";
import test3 from "../../assets/test3.png";

export default function Testimonials() {
	return (
		<section className="w-full max-md:pr-5 lg:pr-20">
			<h2 className="text-5xl font-semibold tracking-tighter text-black max-lg:mt-44 max-md:mt-10 max-md:max-w-full max-md:text-4xl">
				What Our Customers Say
			</h2>
			<div className="mt-12 flex flex-wrap gap-8 font-medium max-md:mt-10">
				<TestimonialCard
					quote="Absolutely love the fresh produce and quick delivery!"
					avatarSrc={test1}
					name="Sam W"
				/>
				<TestimonialCard
					quote="Their organic fruits are the best I've ever tasted!"
					avatarSrc={test2}
					name="Liam P."
				/>
				<TestimonialCard
					quote="Highly recommend for anyone looking for quality groceries"
					avatarSrc={test3}
					name="Sophia M."
				/>
			</div>
		</section>
	);
}
