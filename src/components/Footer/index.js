import React, { Component } from "react";
import { Link } from "gatsby";

export default class Footer extends Component {
	render() {
		return (
			<div style={styles.wrapper}>
				<h1>Hello,I'm Pushpendra Singh.</h1>
				<p>
					I'm creating web and mobile experiences for the next generation
					consumer-facing companies.
				</p>
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
		padding: "2em",
	},
};
