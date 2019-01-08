import React, { Component } from "react";
import { Link } from "gatsby";

import svg404 from "../assets/images/404.svg";

export default class NotFound extends Component {
	render() {
		return (
			<div style={styles.wrapper}>
				<img src={svg404} alt="Not Found" width={500} />
				<h3>Sorry ! Page Not Found</h3>
				<Link to="/">
					<button style={styles.button}>Go To Home</button>
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
	button: {
		borderRadius: 50,
		backgroundColor: "#f9aaa2",
		borderWidth: 5,
		borderColor: "#ff2d3d",
		color: "#000",
		padding: 20,
		fontSize: 24,
		fontWeight: 800,
	},
};
