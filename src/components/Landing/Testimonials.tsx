import TestimonialCard from "./TestimonialCard";

export default function Testimonials() {
	return (
		<section className="w-full">
			<h2 className="mt-44 text-5xl font-semibold tracking-tighter text-black max-md:mt-10 max-md:max-w-full max-md:text-4xl">
				What Our Customers Say
			</h2>
			<div className="mt-12 flex flex-wrap gap-8 font-medium max-md:mt-10">
				<TestimonialCard
					quote="Absolutely love the fresh produce and quick delivery!"
					avatarSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/9cf3bffa3d0aa7033992089f2962d65a9f1ce5bce6bc260b84cf5b5a307e73b2?placeholderIfAbsent=true&apiKey=9570ebf0bdf745e9829d9755060a264b"
					name="Sam W"
				/>
				<TestimonialCard
					quote="Their organic fruits are the best I've ever tasted!"
					avatarSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/21a2e7bf316911ef6d4dbe5dd23988637b7df7802a9d968fc1b2abc04b2c720c?placeholderIfAbsent=true&apiKey=9570ebf0bdf745e9829d9755060a264b"
					name="Liam P."
				/>
				<TestimonialCard
					quote="Highly recommend for anyone looking for quality groceries"
					avatarSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/d4cbd29aba05d77fcad5fc6527b43a7e937cbca39d21f40bdc362fea94d7b09d?placeholderIfAbsent=true&apiKey=9570ebf0bdf745e9829d9755060a264b"
					name="Sophia M."
				/>
			</div>
		</section>
	);
}
