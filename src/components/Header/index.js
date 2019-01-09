import React, { Component } from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import logoImg from "../../assets/images/programmer.svg";

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
					<img src={logoImg} style={styles.logo} />
				</Link>
				<p style={styles.title} />
				<Link to="/blog">
					<Button>Blogs</Button>
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
	logo: {
		width: 100,
		marginTop: 50,
	},
	title: {
		flex: 1,
		marginLeft: 20,
		fontSize: 48,
	},
};
