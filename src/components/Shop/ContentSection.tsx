interface ContentSectionProps {
	title: string;
	description: string;
	imageSrc: string;
	imagePosition: "left" | "right";
}

export default function ContentSection({
	title,
	description,
	imageSrc,
	imagePosition,
}: ContentSectionProps) {
	const content = (
		<div className="flex flex-col justify-center text-2xl text-black max-md:text-xl">
			<h2 className="text-4xl font-semibold leading-tight max-md:text-3xl">
				{title}
			</h2>
			<p className="mt-6 leading-9 text-zinc-500 max-md:leading-8">
				{description}
			</p>
			<div className="mt-6">
				<button className="rounded-lg bg-neutral-200 px-6 py-3 text-lg font-medium shadow-sm transition-colors hover:bg-neutral-300">
					Learn More
				</button>
			</div>
		</div>
	);

	const image = (
		<img
			src={imageSrc}
			alt={title}
			className="aspect-[1.56] w-full rounded-lg object-cover max-md:aspect-[1.2]"
		/>
	);

	return (
		<div className="mb-20 max-md:mb-12">
			<div className="flex gap-8 max-md:flex-col max-md:gap-6">
				{imagePosition === "left" ? (
					<>
						<div className="w-[55%] max-md:w-full">{image}</div>
						<div className="w-[45%] max-md:w-full">{content}</div>
					</>
				) : (
					<>
						<div className="w-[45%] max-md:w-full">{content}</div>
						<div className="w-[55%] max-md:w-full">{image}</div>
					</>
				)}
			</div>
		</div>
	);
}
