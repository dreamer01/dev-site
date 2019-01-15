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
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `src`,
				path: `${__dirname}/src/`,
			},
		},
		`gatsby-transformer-remark`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Pushpendra Dev Site`,
				short_name: `Pushpendra`,
				start_url: `/`,
				background_color: `#ffffff`,
				theme_color: `#00003c`,
				display: `standalone`,
				icon: `src/assets/images/programmer.svg`,
			},
		},
		`gatsby-plugin-styled-components`,
		"gatsby-plugin-offline",
		`gatsby-plugin-netlify`,
	],
};
