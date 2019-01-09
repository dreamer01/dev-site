import React, { Component } from "react";
import styled from "styled-components";

import { getServices } from "./helper";
import ServiceCard from "./service-card";

const Wrapper = styled.div`
	display: flex;
	flex: 1;
	flex-direction: column;
	padding-left: 100px;
	padding-right: 100px;
`;

const ServiceContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	grid-template-rows: 1fr 1fr;
	grid-column-gap: 2rem;
	grid-row-gap: 3rem;
	justify-items: center;
	@media (max-width: 1200px) {
		grid-template-columns: 1fr 1fr 1fr;
		grid-gap: 0.5rem;
	}
	@media (max-width: 900px) {
		grid-template-columns: 1fr;
		grid-gap: 0.5rem;
	}
`;

const Heading = styled.h1``;

class Services extends Component {
	renderServices = this.renderServices.bind(this);

	renderServices(item) {
		return <ServiceCard {...item} />;
	}

	render() {
		return (
			<Wrapper>
				<Heading>Services</Heading>
				<ServiceContainer>
					{getServices().map(this.renderServices)}
				</ServiceContainer>
			</Wrapper>
		);
	}
}

export default Services;
