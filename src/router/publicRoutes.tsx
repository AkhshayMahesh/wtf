import Article from "@components/Article/Article";
import About from "@pages/About";
import Home from "@pages/Home";
import LoginPage from "@pages/Login";
import NotFound from "@pages/NotFound";
import ProductDetail from "@pages/ProductDetail";
import Shop from "@pages/Shop";
import { RouteObject } from "react-router-dom";

export const publicRoutes: RouteObject[] = [
	{
		path: "/",
		element: <Home />,
		errorElement: <NotFound />,
	},
	{
		path: "/about",
		element: <About />,
	},
	{
		path: "/login",
		element: <LoginPage />,
	},
	{
		path: "/article",
		element: <Article />,
	},
	{
		path: "/productDetail",
		element: <ProductDetail />,
	},
	{
		path: "/shop",
		element: <Shop />,
	},
];
