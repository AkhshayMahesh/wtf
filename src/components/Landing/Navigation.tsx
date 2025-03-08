"use client";
import { useState } from "react";
import MobileMenu from "./MobileMenu";

export default function Navigation() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	return (
		<header className="flex w-full flex-wrap items-start justify-between gap-5 overflow-hidden bg-white px-5 py-8 font-medium sm:px-20 sm:py-14">
			<h1 className="self-end text-2xl text-black sm:text-3xl">
				FreshHarvest
			</h1>

			{/* Desktop Navigation */}
			<nav className="hidden items-center gap-10 self-start text-xl text-black md:flex">
				<a
					href="#about"
					className="my-auto self-stretch hover:text-gray-600"
				>
					About Us
				</a>
				<a
					href="#shop"
					className="my-auto self-stretch hover:text-gray-600"
				>
					Shop
				</a>
				<button className="my-auto gap-2 self-stretch whitespace-nowrap rounded-lg bg-black px-6 py-3.5 text-base text-white shadow-sm hover:bg-gray-800">
					Login
				</button>
			</nav>

			{/* Mobile Menu Button */}
			<button
				className="p-2 text-black md:hidden"
				onClick={() => setIsMobileMenuOpen(true)}
				aria-label="Open menu"
			>
				<svg
					className="h-6 w-6"
					fill="none"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path d="M4 6h16M4 12h16M4 18h16"></path>
				</svg>
			</button>

			{/* Mobile Menu */}
			<MobileMenu
				isOpen={isMobileMenuOpen}
				onClose={() => setIsMobileMenuOpen(false)}
			/>
		</header>
	);
}
