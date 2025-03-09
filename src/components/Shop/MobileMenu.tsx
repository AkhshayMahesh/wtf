import { useEffect, useState } from "react";
import { navMenuItemMap } from "./NavMenuItems";

interface MobileMenuProps {
	isOpen: boolean;
	onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
	const [currentPage, setCurrentPage] = useState("default");
	useEffect(() => {
		const path = window.location.pathname;
		const pageMap: { [key: string]: string } = {
			"/": "home",
			"/about": "about",
			"/shop": "shop",
			"/product-detail": "productdetail",
			"/article": "article",
		};
		setCurrentPage(pageMap[path] || "default");
	}, []);

	// useEffect(() => {
	// 	if (isOpen) {
	// 		document.body.style.overflow = "hidden";
	// 	} else {
	// 		document.body.style.overflow = "unset";
	// 	}
	// 	return () => {
	// 		document.body.style.overflow = "unset";
	// 	};
	// }, [isOpen]);

	return (
		<div
			className={`fixed inset-0 z-50 bg-black bg-opacity-50 transition-all ${
				isOpen ? "opacity-100" : "pointer-events-none opacity-0"
			}`}
			onClick={onClose}
		>
			<div
				className={`fixed right-0 top-0 h-full w-64 transform bg-white p-6 shadow-lg transition-all duration-300 ${
					isOpen ? "translate-x-0" : "translate-x-full"
				}`}
				onClick={(e) => e.stopPropagation()}
			>
				<button
					onClick={onClose}
					className="absolute right-4 top-4 text-2xl"
					aria-label="Close menu"
				>
					×
				</button>
				<nav className="mt-12 flex flex-col gap-6">
					{navMenuItemMap[currentPage]?.map((item, index) => (
						<a
							key={index}
							href={item.url}
							className="text-xl text-black hover:text-gray-600"
						>
							{item.name}
						</a>
					))}
					<button
						className="w-full rounded-lg bg-black px-6 py-3.5 text-base text-white shadow-sm hover:bg-gray-800"
						onClick={() => (window.location.href = "/login")}
					>
						Login
					</button>
				</nav>
			</div>
		</div>
	);
}
