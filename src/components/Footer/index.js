import React, { Component } from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 100px;
`;

const IconWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	grid-gap: 1rem;
	align-items: center;
	@media (max-width: 900px) {
		grid-gap: 0.5rem;
	}
`;

const Copyright = styled.div`
	margin-left: 100px;
	padding-left: 20px;
	border-left: 4px solid #da1b60;
	background: linear-gradient(to right, #ff8a00, #da1b60);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	font-size: 32px;
`;

const SocialIcon = styled.a`
	width: 50px;
	height: 50px;
`;

export default class Footer extends Component {
	render() {
		return (
			<Wrapper>
				<IconWrapper>
					<SocialIcon
						className="link"
						href="https://www.linkedin.com/in/pushpendradream/"
					>
						<img src={require("../../assets/social-icon/linkedin.svg")} />
					</SocialIcon>
					<SocialIcon className="link" href="https://github.com/dreamer01">
						<img src={require("../../assets/social-icon/github.svg")} />
					</SocialIcon>
					<SocialIcon
						className="link"
						href="https://www.twitter.com/stud2design"
					>
						<img src={require("../../assets/social-icon/twitter.svg")} />
					</SocialIcon>
					<SocialIcon className="link" href="https://dribbble.com/dreamer01">
						<img src={require("../../assets/social-icon/dribbble.svg")} />
					</SocialIcon>
					<SocialIcon href="https://www.instagram.com/pushpendra_dream">
						<img src={require("../../assets/social-icon/instagram.svg")} />
					</SocialIcon>
				</IconWrapper>
				<Copyright>
					Copyright &copy; 2019. Pushpendra Singh. All rights reserved.
				</Copyright>
			</Wrapper>
		);
	}
}
