import Typography from "typography";

const customTypography = {
	baseFontSize: "16px",
	baseLineHeight: 1.5,
	bodyFontFamily: ["Quicksand", "Oxygen"],
	scaleRatio: 2.25,
	bodyWeight: 400,
	headerWeight: 500,
	googleFonts: [
		{
			name: "Raleway",
			styles: ["700"],
		},
		{
			name: "Quicksand",
			styles: ["400", "400i", "700", "700i"],
		},
	],

	overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => ({
		body: {
			color: "#000",
			//color: "#fff",
		},
		h1: {
			fontFamily: ["Raleway", "Oxygen"].join(","),
			fontSize: scale(4 / 4),
			color: "#00003c",
		},
		h2: {
			fontFamily: ["Raleway", "Oxygen"].join(","),
			fontSize: scale(3 / 4),
			color: "#00003c",
		},
		h3: {
			fontFamily: ["Raleway", "Oxygen"].join(","),
			fontSize: scale(2 / 4),
			color: "#00003c",
		},
		h4: {
			fontFamily: ["Raleway", "Oxygen"].join(","),
			fontSize: scale(1 / 6),
			color: "#00003c",
		},
		h5: {
			fontFamily: ["Raleway", "Oxygen"].join(","),
			fontSize: scale(-1 / 6),
			color: "#00003c",
		},
		h6: {
			fontFamily: ["Raleway", "Oxygen"].join(","),
			fontSize: scale(-2 / 6),
			color: "#00003c",
		},
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
