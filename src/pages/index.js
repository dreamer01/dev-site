import React from "react";
import { Link } from "gatsby";

import SEO from "../components/SEO";

export default () => (
	<React.Fragment>
		<SEO />
		<div style={{ padding: `2em` }}>
			<Link to="/test/">Blog</Link>
			<h1>Hello Gatsby!</h1>
			<p>What a world.</p>
			<blockquote> Test</blockquote>
		</div>
	</React.Fragment>
);
