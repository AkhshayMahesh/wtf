import { useEffect } from "react";

interface MobileMenuProps {
	isOpen: boolean;
	onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "unset";
		}
		return () => {
			document.body.style.overflow = "unset";
		};
	}, [isOpen]);

	if (!isOpen) return null;

	return (
		<div
			className="fixed inset-0 z-50 bg-black bg-opacity-50"
			onClick={onClose}
		>
			<div
				className="fixed right-0 top-0 h-full w-64 bg-white p-6 shadow-lg"
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
					<a
						href="#about"
						className="text-xl text-black hover:text-gray-600"
					>
						About Us
					</a>
					<a
						href="#shop"
						className="text-xl text-black hover:text-gray-600"
					>
						Shop
					</a>
					<button className="w-full rounded-lg bg-black px-6 py-3.5 text-base text-white shadow-sm hover:bg-gray-800">
						Login
					</button>
				</nav>
			</div>
		</div>
	);
}
