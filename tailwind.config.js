const colors = {
	black: "#121c25",
	brand: "#63B4B8",
	gray: {
		200: "#e2e8f0",
		400: "#9ca3af",
		500: "#6b7280",
		600: "#4b5563",
	},
	white: "#fafafa",
};

module.exports = {
	content: ["./index.html", "./src/modules/**/*.tsx"],
	plugins: [require("@tailwindcss/aspect-ratio"), require("@tailwindcss/typography"), require("@tailwindcss/forms")],
	theme: {
		colors: {
			...colors,
			inherit: "inherit",
			muted: colors.gray[400],
			primary: colors.black,
			secondary: colors.gray[600],
			tertiary: colors.gray[500],
			transparent: "transparent",
		},
		container: {
			screens: {
				lg: "1024px",
				md: "100%",
				sm: "100%",
				xl: "1196px",
			},
		},
	},
};
