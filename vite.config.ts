import reactPlugin from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import compressPlugin from "vite-plugin-compress";

export default defineConfig({
	plugins: [reactPlugin(), compressPlugin({ verbose: true })],
	preview: {
		open: true,
		port: 3000,
	},
	resolve: {
		alias: {
			// eslint-disable-next-line @typescript-eslint/no-var-requires
			"~": require("path").resolve(__dirname, "src"),
		},
	},
	test: {
		environment: "jsdom",
		globals: true,
		setupFiles: "src/modules/shared/utils/test/setup.ts",
	},
});
