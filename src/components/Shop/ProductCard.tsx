interface ProductCardProps {
	imageSrc: string;
	title: string;
	description: string;
	price: string;
	isLarge?: boolean;
}

export default function ProductCard({
	imageSrc,
	title,
	description,
	price,
	isLarge = false,
}: ProductCardProps) {
	return (
		<a href="">
			<article className="grow text-xl font-medium text-black hover:cursor-pointer max-md:mt-8 max-md:max-w-full">
				<img
					src={imageSrc}
					alt={title}
					className={`w-full rounded-lg object-contain ${isLarge ? "aspect-[1]" : "aspect-[]"} max-md:max-w-full`}
				/>
				<div className="mt-6 flex w-full flex-col justify-center max-md:max-w-full">
					<h3 className="text-2xl max-md:max-w-full">{title}</h3>
					<p className="mt-1 text-lg font-normal text-zinc-500 max-md:max-w-full">
						{description}
					</p>
					<p className="mt-1 max-md:max-w-full">{price}</p>
				</div>
			</article>
		</a>
	);
}
