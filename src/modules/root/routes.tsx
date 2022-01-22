import type { ReactNode } from "react";

import { Homepage } from "../home/homepage";
import { NotFoundPage } from "../ui/404";

export interface CustomRouteProps {
	key: string;
	name: string;
	path: string;
	component: ReactNode;
}

export const routes: CustomRouteProps[] = [
	{
		component: Homepage,
		key: "home-page",
		name: "Home",
		path: "/",
	},
	{
		component: NotFoundPage,
		key: "default-page",
		name: "error",
		path: "*",
	},
];
