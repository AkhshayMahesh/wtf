import Hero from "@components/Home/Hero";

export default function Home() {
	return (
		<div className="flex h-screen w-full flex-col items-center justify-center">
			<span className="text-3xl font-medium">
				Hello World! Welcome to Festember 2024!
			</span>
			<Hero />
		</div>
	);
}
