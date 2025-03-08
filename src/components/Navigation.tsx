"use client";
import { useEffect, useState } from "react";
import MobileMenu from "./MobileMenu";
import { navMenuItemMap } from "./NavMenuItems";

export default function Navigation() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [currentPage, setCurrentPage] = useState("default");

	useEffect(() => {
		const path = window.location.pathname;
		if (path === "/") setCurrentPage("home");
		const pageMap: { [key: string]: string } = {
			"/": "home",
			"/about": "about",
			"/shop": "shop",
			"/productDetail": "productdetail",
			"/article": "article",
		};
		setCurrentPage(pageMap[path] || "default");
	}, []);

	return (
		<header className="flex w-full flex-wrap items-start justify-between gap-5 overflow-hidden bg-white lg:px-20 lg:py-8 font-medium max-md:px-5 max-md:py-6">
			<h1 className="self-end text-2xl text-black sm:text-3xl">
				FreshHarvest
			</h1>

			{/* Desktop Navigation */}
			<nav className="hidden items-center gap-10 self-start text-xl text-black md:flex">
				{navMenuItemMap[currentPage].map((item, index) => (
					<a
						key={index}
						href={item.url}
						className="my-auto self-stretch hover:text-gray-600"
					>
						{item.name}
					</a>
				))}
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
