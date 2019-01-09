import React from "react";

const SocialIcon = ({ imageUrl }) => {
	return (
		<img
			style={{
				height: 50,
				width: 50,
				backgroundColor: "#fff",
			}}
			src={imageUrl}
			alt="icon"
		/>
	);
};

export default SocialIcon;
