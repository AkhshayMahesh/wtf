import ChooseUsCard from "./ChooseUsCard";

export default function ChooseUs() {
	return (
		<section className="w-full sm:px-1">
			<h2 className="mt-20 text-3xl font-semibold tracking-tighter text-black sm:mt-36 sm:text-5xl">
				Why Choose Us?
			</h2>
			<div className="mt-10 flex h-[50vh] flex-wrap md:mr-20">
				<div className="w-full md:mr-20 md:w-[45%]">
					<ChooseUsCard
						imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/4d3cc7c420d1b5d0f7336206e3b24c7eeb4114f5dfc2f0ab545b7c22126d0d1c?placeholderIfAbsent=true&apiKey=9570ebf0bdf745e9829d9755060a264b"
						title="Handpicked Fruits"
						description="Juicy and delicious seasonal picks."
					/>
				</div>
				<div className="w-full md:w-[45%]">
					<ChooseUsCard
						imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/dcb51c5d429de0266b8e7f9be06fd9a23efc45f33f0918ef151ae6d086eb81ea?placeholderIfAbsent=true&apiKey=9570ebf0bdf745e9829d9755060a264b"
						title="Delicious Beverages"
						description="Taste the richness of homemade juices and natural drinks."
					/>
				</div>
			</div>
		</section>
	);
}
