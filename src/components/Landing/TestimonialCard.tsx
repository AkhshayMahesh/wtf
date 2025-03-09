import TiltCard from "@components/TiltCard/TiltCard";

interface TestimonialCardProps {
	quote: string;
	avatarSrc: string;
	name: string;
}

export default function TestimonialCard({
	quote,
	avatarSrc,
	name,
}: TestimonialCardProps) {
	return (
		<article className="min-w-45 flex flex-1 shrink basis-0 flex-col self-start rounded-xl border border-solid border-neutral-200 bg-white p-8 max-md:px-5">
			<TiltCard>
				<p className="text-2xl leading-9 text-black">{quote}</p>
				<div className="mt-12 flex items-center gap-4 self-start text-base max-md:mt-10">
					<img
						src={avatarSrc}
						alt={`${name}'s avatar`}
						className="my-auto aspect-square w-[45px] shrink-0 self-stretch rounded-full object-contain"
					/>
					<div className="my-auto self-stretch">
						<p className="text-black">{name}</p>
						<p className="text-zinc-500">Description</p>
					</div>
				</div>
			</TiltCard>
		</article>
	);
}
