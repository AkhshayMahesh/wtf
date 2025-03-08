export default function Footer() {
	return (
		<footer className="w-full bg-white px-5 pb-12 sm:px-20">
			<hr className="h-px border-t border-neutral-200" />
			<div className="mt-12 flex flex-col lg:gap-96 gap-8 lg:flex-row w-full">
				<div className="flex flex-col">
					<h2 className="text-2xl text-black">FreshHarvest</h2>
					<div className="lg:mt-6 flex gap-4 max-md:mt-5">
						<img
							src="https://cdn.builder.io/api/v1/image/assets/TEMP/199c9a3c64fa87237dabe74b1aff1fe617935141f37a07ba364b7012e90e628c?placeholderIfAbsent=true&apiKey=9570ebf0bdf745e9829d9755060a264b"
							alt="Social icon"
							className="h-10 w-10 cursor-pointer rounded hover:opacity-80"
						/>
						<img
							src="https://cdn.builder.io/api/v1/image/assets/TEMP/b1bac3668b19309ab1c82835d154f9962b24bad9c262723d53374e3173c3e762?placeholderIfAbsent=true&apiKey=9570ebf0bdf745e9829d9755060a264b"
							alt="Social icon"
							className="h-10 w-10 cursor-pointer rounded hover:opacity-80"
						/>
						<img
							src="https://cdn.builder.io/api/v1/image/assets/TEMP/c9c8d64becb556072cf4288b2dadd32d18a3ce8e19d5cc15f298f66d1125313b?placeholderIfAbsent=true&apiKey=9570ebf0bdf745e9829d9755060a264b"
							alt="Social icon"
							className="h-10 w-10 cursor-pointer rounded hover:opacity-80"
						/>
						<img
							src="https://cdn.builder.io/api/v1/image/assets/TEMP/0828515f09127d365461d17e1036e88788811bd5c0258116139d171a870fbe56?placeholderIfAbsent=true&apiKey=9570ebf0bdf745e9829d9755060a264b"
							alt="Social icon"
							className="h-10 w-10 cursor-pointer rounded hover:opacity-80"
						/>
					</div>
				</div>
				<nav className="flex-1">
					<div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
						<div>
							<h3 className="mb-6 font-medium text-black">
								Support
							</h3>
							<div className="flex flex-col gap-4 text-base font-medium text-zinc-700">
								<a href="#faq" className="hover:text-black">
									FAQ
								</a>
								<a href="#contact" className="hover:text-black">
									Contact Us
								</a>
								<a href="#returns" className="hover:text-black">
									Returns
								</a>
							</div>
						</div>
						<div>
							<h3 className="mb-6 font-medium text-black">
								Company
							</h3>
							<div className="flex flex-col gap-4 text-base font-medium text-zinc-700">
								<a href="#about" className="hover:text-black">
									About Us
								</a>
								<a href="#careers" className="hover:text-black">
									Careers
								</a>
								<a href="#blog" className="hover:text-black">
									Blog
								</a>
							</div>
						</div>
						<div>
							<h3 className="mb-6 font-medium text-black">
								Legal
							</h3>
							<div className="flex flex-col gap-4 text-base font-medium text-zinc-700">
								<a href="#privacy" className="hover:text-black">
									Privacy Policy
								</a>
								<a href="#terms" className="hover:text-black">
									Terms of Service
								</a>
							</div>
						</div>
					</div>
				</nav>
			</div>
		</footer>
	);
}
