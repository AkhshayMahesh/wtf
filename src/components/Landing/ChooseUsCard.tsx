interface FeatureCardProps {
	imageSrc: string;
	title: string;
	description: string;
}

export default function ChooseUsCard({
	imageSrc,
	title,
	description,
}: FeatureCardProps) {
	return (
		<article className="my-auto min-w-60 flex-1 shrink basis-0 self-stretch overflow-hidden">
			<img
				src={imageSrc}
				alt={title}
				className="max-h-96 w-full rounded-lg object-cover"
			/>
			<div className="mt-6 flex w-[381px] max-w-full flex-col justify-center">
				<h3 className="text-2xl font-medium text-black">{title}</h3>
				<p className="mt-1 text-2xl leading-9 text-zinc-500">
					{description}
				</p>
			</div>
		</article>
	);
}
