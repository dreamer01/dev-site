import React, { Component } from "react";
import styled from "styled-components";

import { getServices } from "./utility";
import ServiceCard from "./service-card";

const Wrapper = styled.div`
	display: flex;
	flex: 1;
	flex-direction: column;
	margin-left: 100px;
`;

const ServiceContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	grid-template-rows: 1fr 1fr;
	grid-column-gap: 10px;
	grid-row-gap: 50px;
	@media (max-width: 900px) {
		grid-template-columns: 1fr;
		grid-gap: 0.5rem;
	}
`;

class Services extends Component {
	renderServices = this.renderServices.bind(this);

	renderServices(item) {
		return <ServiceCard {...item} />;
	}

	render() {
		return (
			<Wrapper>
				<h1>Services</h1>
				<ServiceContainer>
					{getServices().map(this.renderServices)}
				</ServiceContainer>
			</Wrapper>
		);
	}
}

export default Services;
