import React, { Component } from "react";
import styled from "styled-components";

const Card = styled.div`
	background: linear-gradient(30deg, rgb(90, 189, 255) 0%, #fff 100%);
	box-shadow: rgba(52, 152, 219, 0.4) 0px 20px 20px;
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
