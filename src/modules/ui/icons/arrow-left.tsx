import { FC } from "react";

import { cx } from "~/modules/shared/utils/classnames";

interface Props {
	classNames?: string;
}

export const ArrowLeftIcon: FC<Props> = ({ classNames }: Props) => {
	return (
		<svg
			className={cx(classNames, "h-full fill-current w-full")}
			viewBox="-49 141 512 512"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M438 372H36.355l72.822-72.822c9.763-9.763 9.763-25.592 0-35.355-9.763-9.764-25.593-9.762-35.355 0l-115.5 115.5a24.996 24.996 0 000 35.355l115.5 115.5c9.763 9.762 25.593 9.763 35.355 0 9.763-9.763 9.763-25.592 0-35.355L36.355 422H438c13.808 0 25-11.193 25-25s-11.192-25-25-25z" />
		</svg>
	);
};
