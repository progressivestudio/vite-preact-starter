import { describe, expect, it } from "vitest";

import { render, screen, userEvent } from "~/modules/shared/utils/test/renderer";

import { Homepage } from "./homepage";

describe("Simple working test", () => {
	it("should render", () => {
		render(<Homepage />);

		expect(screen.getByText(/Garlic bread with cheese: What the science tells us/i)).toBeDefined();
	});

	it("should allow button click", async () => {
		render(<Homepage />);
		userEvent.click(screen.getByRole("button"));

		expect(await screen.findByText(/Loading..../i)).toBeDefined();
	});
});
