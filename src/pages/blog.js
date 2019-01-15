import React from "react";
import { Link, graphql } from "gatsby";
import styled from "styled-components";
import Header from "../components/Header";

const Wrapper = styled.div`
	display: flex;
	flex: 1;
	flex-direction: column;
	padding-left: 300px;
	padding-right: 300px;
`;

export default ({ data }) => {
	return (
		<div>
			<Header goto="/" gotoTitle="Home" />
			<Wrapper>
				<h1>Blog List</h1>
				<div>
					{data.allMarkdownRemark.edges.map(({ node }) => (
						<div key={node.id}>
							<Link
								to={node.fields.slug}
								style={{ textDecoration: "none", color: "inherit" }}
							>
								<h3 style={{ marginBottom: 0 }}>
									{node.frontmatter.title}
									<span>— {node.frontmatter.date}</span>
								</h3>
							</Link>
							<p>{node.frontmatter.subtext}</p>
						</div>
					))}
				</div>
			</Wrapper>
		</div>
	);
};

export const query = graphql`
	query {
		allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
			edges {
				node {
					id
					frontmatter {
						title
						date(formatString: "DD MMMM, YYYY")
						subtext
					}
					fields {
						slug
					}
				}
			}
		}
	}
`;
