import React, { Component } from "react";
import styled from "styled-components";

import { getProjects } from "./helper";
import ProjectCard from "./project-card";

const Wrapper = styled.div`
	display: flex;
	flex: 1;
	flex-direction: column;
	padding-left: 100px;
	padding-right: 100px;
	margin-top: 100px;
`;

const ProjectContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	grid-template-rows: 1fr 1fr;
	grid-column-gap: 2rem;
	grid-row-gap: 3rem;
	justify-items: center;
	@media (max-width: 1200px) {
		grid-template-columns: 1fr 1fr 1fr;
		grid-gap: 1rem;
	}
	@media (max-width: 900px) {
		grid-template-columns: 1fr;
		grid-gap: 0.5rem;
	}
`;

class Projects extends Component {
	renderServices = this.renderServices.bind(this);

	renderServices(item) {
		return <ProjectCard {...item} />;
	}

	render() {
		return (
			<Wrapper>
				<h1>Projects</h1>
				<ProjectContainer>
					{getProjects().map(this.renderServices)}
				</ProjectContainer>
			</Wrapper>
		);
	}
}

export default Projects;
