import React from "react";
import "./Die.css";

export const Die = ({ face, rolling }) => {

	return <i className={`Die fas fa-dice-${face} ${rolling && "shaking"}`} />;
};
