interface FeatureCardProps {
	iconSrc: string;
	title: string;
	description: string;
}

export default function FeatureCard({
	iconSrc,
	title,
	description,
}: FeatureCardProps) {
	return (
		<article className="flex flex-col gap-2 rounded-lg p-4 transition-colors hover:bg-gray-50">
			<img
				src={iconSrc}
				alt=""
				className="h-8 w-8 object-contain"
				loading="lazy"
			/>
			<h3 className="text-xl font-medium max-md:text-lg">{title}</h3>
			<p className="leading-8 text-zinc-500 max-md:text-base max-md:leading-7">
				{description}
			</p>
		</article>
	);
}
