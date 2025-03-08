"use client";
import { useState } from "react";

export default function ShopNavbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<nav className="relative w-full font-medium">
			<div className="flex w-full flex-wrap items-center justify-between">
				<h1 className="text-3xl text-white">FreshHarvest</h1>

				<button
					className="p-2 text-white md:hidden"
					onClick={() => setIsMenuOpen(!isMenuOpen)}
					aria-label="Toggle menu"
				>
					<svg
						className="h-6 w-6"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						{isMenuOpen ? (
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M6 18L18 6M6 6l12 12"
							/>
						) : (
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M4 6h16M4 12h16M4 18h16"
							/>
						)}
					</svg>
				</button>

				<div
					className={`md:static md:flex md:flex-wrap md:items-center md:gap-10 ${isMenuOpen ? "flex" : "hidden"} absolute left-0 right-0 top-full z-50 w-full flex-col items-start space-y-4 bg-black bg-opacity-90 p-4 text-xl text-white md:w-auto md:space-y-0 md:bg-transparent md:p-0`}
				>
					<a
						href="#"
						className="transition-colors hover:text-gray-300"
					>
						Home
					</a>
					<a
						href="#"
						className="transition-colors hover:text-gray-300"
					>
						About Us
					</a>
					<a
						href="#"
						className="transition-colors hover:text-gray-300"
					>
						Learn More
					</a>
					<button className="w-full whitespace-nowrap rounded-lg border-2 border-solid border-white px-6 py-3.5 text-base shadow-sm transition-colors hover:bg-white hover:text-black md:w-auto">
						Login
					</button>
				</div>
			</div>
		</nav>
	);
}
