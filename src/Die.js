import React from "react";
import "./Die.css";

// class Die extends Component {
export const Die = ({ face, rolling }) => {
	console.log("face", face, rolling);

	return <i className={`Die fas fa-dice-${face} ${rolling && "shaking"}`} />;
};
