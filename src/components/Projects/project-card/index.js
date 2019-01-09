import React, { Component } from "react";
import styled from "styled-components";

const Card = styled.div`
	background: linear-gradient(330deg, rgb(255, 175, 96) 0%, #fff 100%);
	box-shadow: rgba(219, 136, 52, 0.4) 0px 20px 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 25px;
	width: 350px;
	border-radius: 10px;
`;

export default class ProjectCard extends Component {
	render() {
		return (
			<a
				href={`${this.props.link}`}
				style={{ textDecoration: "none", color: "inherit" }}
			>
				<Card>
					<h3>{this.props.title}</h3>
					<p>{this.props.content}</p>
				</Card>
			</a>
		);
	}
}
