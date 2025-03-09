import youtube from "../../assets/youtube.svg";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import linkedin from "../../assets/linkedin.svg";

export default function Footer() {
	return (
		<footer className="w-full bg-white px-5 pb-12 sm:px-20">
			<hr className="h-px border-t border-neutral-200" />
			<div className="mt-12 flex w-full flex-col gap-8 lg:flex-row lg:gap-96">
				<div className="flex flex-col">
					<a href="/">
						<h2 className="text-2xl text-black">FreshHarvest</h2>
					</a>
					<div className="flex gap-4 max-md:mt-5 lg:mt-6">
						<img
							src={facebook}
							alt="Social icon"
							className="h-10 w-10 cursor-pointer rounded hover:opacity-80"
						/>
						<img
							src={linkedin}
							alt="Social icon"
							className="h-10 w-10 cursor-pointer rounded hover:opacity-80"
						/>
						<img
							src={youtube}
							alt="Social icon"
							className="h-10 w-10 cursor-pointer rounded hover:opacity-80"
						/>
						<img
							src={instagram}
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
