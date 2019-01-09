module.exports = {
	siteMetadata: {
		title: `Pushpendra Singh`,
		author: `Pushpendra Singh`,
		description: `Personal website of Pushpendra Singh. I learn to code and code to dvelop.`,
		siteUrl: `https://pushpendra.netlify.com`,
		social: {
			twitter: `@stud2design`,
		},
	},
	plugins: [
		{
			resolve: `gatsby-plugin-typography`,
			options: {
				pathToConfigModule: `src/utils/typography.js`,
			},
		},
		`gatsby-plugin-styled-components`,
		`gatsby-plugin-netlify`,
	],
};
