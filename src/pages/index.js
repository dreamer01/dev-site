import React from "react";

import SEO from "../components/SEO";
import Landing from "../components/Landing";
import Services from "../components/Services";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default () => (
	<React.Fragment>
		<SEO />
		<div style={{ backgroundColor: "#16131d" }}>
			<Header />
			<Landing />
			<Services />
			<Projects />
			<Footer />
		</div>
	</React.Fragment>
);
