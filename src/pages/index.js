import * as React from "react";
import {graphql} from "gatsby";
import {RecipePreview} from "../components/RecipePreview";
import {FormattedMessage, useIntl} from "react-intl";
import {Helmet} from "react-helmet";

const IndexPage = ({data}) => {
	const intl = useIntl();

	const recipes = data.allMarkdownRemark.nodes;

	return (
		<main>
			<Helmet>
				<title>{intl.messages.index_page_title}</title>
			</Helmet>
			<h1>
				<FormattedMessage id="index_page_title" />
			</h1>
			<h2>
				<FormattedMessage id="index_page_subtitle" />
			</h2>
			{recipes.map(({frontmatter}) => {
				return <RecipePreview key={frontmatter.slug} data={frontmatter} />;
			})}
		</main>
	);
};

export const indexQuery = graphql`
	query IndexQuery($locale: String) {
		allMarkdownRemark(filter: {frontmatter: {locale: {eq: $locale}}}) {
			nodes {
				frontmatter {
					slug
					title
					date
					cover_image {
						image {
							childImageSharp {
								gatsbyImageData
							}
						}
						alt
					}
				}
			}
		}
	}
`;

export default IndexPage;
