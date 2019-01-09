import React from "react";

const SocialIcon = ({ imageUrl }) => {
	return (
		<img
			style={{
				height: 50,
				width: 50,
				backgroundColor: "#fff",
			}}
			className="social-icon"
			src={imageUrl}
			alt="icon"
		/>
	);
};

export default SocialIcon;
