export const Navigation = () => {
	return (
		<nav className="flex w-full flex-wrap justify-between gap-5 overflow-hidden bg-white px-20 py-14 font-inter font-medium
 max-md:max-w-full max-md:px-5">
			<h1 className="my-auto text-3xl text-black">FreshHarvest</h1>
			<div className="flex items-center gap-10 text-xl text-black max-md:max-w-full">
				<div className="my-auto flex min-w-60 items-center gap-10 self-stretch max-md:max-w-full">
					<a href="#" className="my-auto self-stretch">
						Home
					</a>
					<a href="#" className="my-auto self-stretch">
						About Us
					</a>
					<a href="#" className="my-auto self-stretch">
						Shop
					</a>
					<button className="my-auto gap-2 self-stretch whitespace-nowrap rounded-lg bg-black px-6 py-3.5 text-base text-white shadow-sm max-md:px-5">
						Login
					</button>
				</div>
			</div>
		</nav>
	);
};
