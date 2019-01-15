import React from "react";
import { graphql } from "gatsby";
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
	const post = data.markdownRemark;
	return (
		<div>
			<Header goto="/" gotoTitle="Home" />
			<Wrapper>
				<h1>{post.frontmatter.title}</h1>
				<div dangerouslySetInnerHTML={{ __html: post.html }} />
			</Wrapper>
		</div>
	);
};

export const query = graphql`
	query($slug: String!) {
		markdownRemark(fields: { slug: { eq: $slug } }) {
			html
			frontmatter {
				title
			}
		}
	}
`;
