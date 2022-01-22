/* eslint-disable import/export */
import { render } from "@testing-library/react";

const customRender = (ui: JSX.Element, options = {}) =>
	render(ui, {
		wrapper: ({ children }) => children,
		...options,
	});

export * from "@testing-library/react";
export { default as userEvent } from "@testing-library/user-event";
// override render export
export { customRender as render };
