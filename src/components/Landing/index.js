import React, { Component } from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import backgoundImg from "../../assets/images/landing.svg";

const Wrapper = styled.div`
	display: flex;
	flex: 1;
	flex-direction: row;
	padding-left: 100px;
	padding-right: 100px;
	align-items: center;
`;

const Title = styled.h1`
	background: linear-gradient(to right, #ff8a00, #da1b60);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	font-size: 72;
`;

export default class Landing extends Component {
	render() {
		return (
			<Wrapper>
				<div style={styles.description}>
					<Title>Hello, I'm Pushpendra Singh.</Title>
					<p style={{ fontSize: 36 }}>
						I'm creating web and mobile experiences for the next generation
						consumer-facing companies.
					</p>
				</div>
				<img src={backgoundImg} style={styles.bgImgage} />
			</Wrapper>
		);
	}
}

const styles = {
	description: {
		flexDirection: "column",
	},
	bgImgage: {
		width: "60%",
		margin: 50,
	},
};
