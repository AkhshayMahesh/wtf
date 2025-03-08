interface NavMenuItem {
	name: string;
	url: string;
}

interface NavMenuItemMap {
	[key: string]: NavMenuItem[];
}

export const navMenuItemMap: NavMenuItemMap = {
	default: [
		{ name: "Home", url: "/" },
		{ name: "About Us", url: "/about" },
		{ name: "Shop", url: "/shop" },
		{ name: "Learn More", url: "/productDetail" },
	],
	home: [
		{ name: "About Us", url: "/about" },
		{ name: "Shop", url: "/shop" },
	],
	about: [
		{ name: "Home", url: "/" },
		{ name: "Shop", url: "/shop" },
	],
	shop: [
		{ name: "Home", url: "/" },
		{ name: "About Us", url: "/about" },
		{ name: "Learn More", url: "/productDetail" },
	],
	article: [
		{ name: "Home", url: "/" },
		{ name: "About Us", url: "/about" },
		{ name: "Shop", url: "/shop" },
	],
	productdetail: [
		{ name: "Home", url: "/" },
		{ name: "About Us", url: "/about" },
		{ name: "Shop", url: "/shop" },
	],
};
