/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
	siteMetadata: {
		siteUrl: `https://www.yourdomain.tld`,
	},
	plugins: [
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `content`,
				path: `${__dirname}/src/content`,
			},
		},
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`,
		`gatsby-transformer-remark`,
		`gatsby-plugin-image`,
		{
			resolve: `gatsby-theme-i18n`,
			options: {
				defaultLang: `en`,
				prefixDefault: true,
				configPath: require.resolve(`./i18n/config.json`),
			},
		},
	],
};
