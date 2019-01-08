import React, { Component } from "react";
import styled from "styled-components";

const Card = styled.div`
	background-image: linear-gradient(to top, #191970, #c4fff9);
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 25px;
	width: 350px;
	border-radius: 10px;
`;

export default class ServicesCard extends Component {
	render() {
		return (
			<Card>
				<img src={this.props.imageUrl} style={styles.serviceIcon} />
				<p>{this.props.title}</p>
				<p>{this.props.details}</p>
			</Card>
		);
	}
}

const styles = {
	serviceIcon: {
		width: 150,
	},
};
