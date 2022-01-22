import type { FC } from "react";

interface DefaultLayoutProps {
	children: JSX.Element;
}

export const DefaultLayout: FC<DefaultLayoutProps> = ({ children }) => {
	return (
		<main className="flex flex-col min-h-screen w-full antialised">
			<div className="container mx-auto">{children}</div>
		</main>
	);
};
