import { RouteObject, createBrowserRouter } from "react-router-dom";
import { publicRoutes } from "./publicRoutes";

const routes: RouteObject[] = [];

routes.push(...publicRoutes);

const router = createBrowserRouter(routes);

export default router;
