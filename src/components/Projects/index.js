import React, { Component } from "react";

export default class Landing extends Component {
	render() {
		return (
			<div style={styles.wrapper}>
				<h1>Projects</h1>
				<p>Fitter | Mailu | City Tour</p>
			</div>
		);
	}
}

const styles = {
	wrapper: {
		display: "flex",
		flex: 1,
		flexDirection: "column",
		width: "100vw",
		marginLeft: 100,
		justifyContent: "center",
	},
};
