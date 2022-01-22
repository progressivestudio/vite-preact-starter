import "../ui/assets/styles/app.css";

import type { FC } from "react";
import { StrictMode } from "react";
import { SWRConfig } from "swr";
import { Route, Switch } from "wouter";

import { DefaultLayout } from "../ui/layouts/default";
import { routes } from "./routes";

const fetcher = async (input: RequestInfo, init: RequestInit) => {
	// eslint-disable-next-line compat/compat
	const res = await fetch(input, init);
	return res.json();
};

export const App: FC = () => {
	return (
		<StrictMode>
			<DefaultLayout>
				<SWRConfig
					value={{
						fetcher,
						revalidateOnFocus: false,
					}}
				>
					<Switch>
						{routes.map((route) => {
							return (
								<Route key={route.key} path={route.path}>
									{route.component}
								</Route>
							);
						})}
					</Switch>
				</SWRConfig>
			</DefaultLayout>
		</StrictMode>
	);
};
