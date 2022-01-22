import { FC } from "react";
import { Link } from "wouter";

import { ArrowLeftIcon } from "./icons/arrow-left";

export const NotFoundPage: FC = () => {
	return (
		<div className="flex pt-48 items-center">
			<div className="flex flex-col px-5 text-gray-700 items-center justify-center md:flex-row">
				<div className="max-w-lg">
					<div className="font-bold leading-normal tracking-wide text-6xl">404</div>
					<p className="font-light leading-normal text-3xl md:text-4xl">Sorry we couldn't find this page. </p>
					<p className="mb-6">But dont worry, you can find plenty of other things on our homepage.</p>

					<Link tabIndex={0} to="/">
						<div className="border border-transparent flex font-semibold py-4 pr-6 transition-colors text-green-600 items-center group hover:cursor-pointer hover:text-green-700 focus:border-teal-500">
							<div className="h-5 mr-2 transform transition-transform w-5 -translate-x-0 group-hover:-translate-x-2">
								<ArrowLeftIcon />
							</div>
							Back to homepage
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
};
