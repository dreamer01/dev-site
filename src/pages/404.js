import React, { Component } from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import svg404 from "../assets/images/404.svg";

const Button = styled.button`
	border-radius: 50px;
	background-color: #f9aaa2;
	border-width: 5px;
	border-color: #ff2d3d;
	padding: 20px;
	font-size: 24;
	font-weight: 800;
`;

export default class NotFound extends Component {
	render() {
		return (
			<div style={styles.wrapper}>
				<img src={svg404} alt="Not Found" width={500} />
				<h3>Sorry ! Page Not Found</h3>
				<Link to="/">
					<Button>Go To Home</Button>
				</Link>
			</div>
		);
	}
}

const styles = {
	wrapper: {
		display: "flex",
		flex: 1,
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		padding: 100,
	},
	button: {},
};
