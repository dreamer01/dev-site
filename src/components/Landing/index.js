import React, { Component } from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import backgoundImg from "../../assets/images/landing.svg";

const Wrapper = styled.div`
	display: flex;
	flex: 1;
	padding-left: 100px;
	padding-right: 100px;
	align-items: center;

	@media (max-width: 900px) {
		flex-direction: column;
	}
`;

const Image = styled.img`
	width: 35%;
	justify-self: flex-end;
	margin: 50px;
	@media (max-width: 900px) {
		width: 65%;
	}
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
						I'm a Full Stack Developer based in Gurugram, India. I have passion
						for intutive web and mobile experiences for the next generation
						consumer-facing companies. My jam is JavaScript.
					</p>
				</div>
				<Image src={backgoundImg} style={styles.bgImgage} />
			</Wrapper>
		);
	}
}

const styles = {
	description: {
		flex: 1,
		flexDirection: "column",
	},
};
