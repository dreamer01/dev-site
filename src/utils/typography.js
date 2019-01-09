import Typography from "typography";

const customTypography = {
	baseFontSize: "16px",
	baseLineHeight: 1.5,
	bodyFontFamily: [
		"-apple-system",
		"BlinkMacSystemFont",
		"Segoe UI",
		"Roboto",
		"Oxygen",
		"Ubuntu",
		"Cantarell",
		"Fira Sans",
		"Droid Sans",
		"Helvetica Neue",
		"sans-serif",
	],
	scaleRatio: 2.25,
	bodyWeight: 400,
	headerWeight: 500,
	boldWeight: "bold",
	overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => ({
		body: {
			color: "#000",
			//color: "#fff",
		},
		h1: scale(4 / 4),
		h2: scale(3 / 4),
		h3: scale(2 / 4),
		h4: scale(1 / 6),
		h5: scale(-1 / 6),
		h6: scale(-2 / 6),
		blockquote: {
			...scale(1 / 4),
			borderLeft: `${rhythm(1 / 6)} solid #eceeef`,
			paddingTop: rhythm(1 / 3),
			paddingBottom: rhythm(1 / 3),
			paddingLeft: rhythm(2 / 3),
			paddingRight: rhythm(2 / 3),
		},
		"blockquote > :last-child": {
			marginBottom: 0,
		},
		"blockquote cite": {
			...adjustFontSizeTo(options.baseFontSize),
			color: "#efefef",
			fontWeight: options.bodyWeight,
			fontStyle: "normal",
		},
	}),
};

const typography = new Typography(customTypography);

export default typography;
