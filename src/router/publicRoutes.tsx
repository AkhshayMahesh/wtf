import About from "@pages/About";
import Home from "@pages/Home";
import NotFound from "@pages/NotFound";
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
];
