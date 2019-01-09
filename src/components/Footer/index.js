import React, { Component } from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import SocialIcon from "./social-icon";

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: red;
	margin: 100px;
`;

const IconWrapper = styled.div`
	display: grid;
	background-color: blue;
	grid-template-columns: repeat(5, 1fr);
	grid-gap: 1rem;
	align-items: center;
	@media (max-width: 900px) {
		grid-gap: 0.5rem;
	}
`;

const Copyright = styled.div`
	display: flex;
	padding-left: 100px;
	background-color: yellow;
	border-color: green;
`;

export default class Footer extends Component {
	render() {
		return (
			<Wrapper>
				<IconWrapper>
					<a href="https://www.linkedin.com/in/pushpendradream/">
						<SocialIcon
							imageUrl={require("../../assets/social-icon/linkedin.svg")}
						/>
					</a>
					<a href="https://github.com/dreamer01">
						<SocialIcon
							imageUrl={require("../../assets/social-icon/github.svg")}
						/>
					</a>
					<a href="https://www.twitter.com/stud2design">
						<SocialIcon
							imageUrl={require("../../assets/social-icon/twitter.svg")}
						/>
					</a>
					<a href="https://dribbble.com/dreamer01">
						<SocialIcon
							imageUrl={require("../../assets/social-icon/dribbble.svg")}
						/>
					</a>
					<a href="https://www.instagram.com/pushpendra_dream">
						<SocialIcon
							imageUrl={require("../../assets/social-icon/instagram.svg")}
						/>
					</a>
				</IconWrapper>
				<Copyright>
					<p>Copyright &copy; 2019. Pushpendra Singh. All rights reserved.</p>
				</Copyright>
			</Wrapper>
		);
	}
}
