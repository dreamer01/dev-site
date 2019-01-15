import React, { Component } from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import logoImg from "../../assets/images/programmer.svg";

const Logo = styled.img`
	width: 50%;
	margin-top: 50px;
`;

const Button = styled.button`
	border-radius: 50px;
	background-image: linear-gradient(to left, #ff8a00, #da1b60);
	padding: 10px;
	padding-left: 20px;
	padding-right: 20px;
	font-size: 24;
	font-weight: 800;
	&:hover {
		border-color: #ff2d3d;
	}
`;

export default class Header extends Component {
	render() {
		return (
			<div style={styles.wrapper}>
				<Link to="/" style={styles.link}>
					<Logo src={logoImg} />
				</Link>
				<p style={styles.title} />
				<Link to={this.props.goto}>
					<Button>{this.props.gotoTitle}</Button>
				</Link>
			</div>
		);
	}
}

const styles = {
	wrapper: {
		display: "flex",
		width: "100vw",
		paddingLeft: 100,
		paddingRight: 300,
		alignItems: "center",
	},
	title: {
		flex: 1,
		marginLeft: 20,
		fontSize: 48,
	},
};
