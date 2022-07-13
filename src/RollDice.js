import React, { useState } from "react";
import { Die } from "./Die";
import "./RollDice.css";

export const RollDice = () => {
	const sides = ["one", "two", "three", "four", "five", "six"];
	let [dice, setDice] = useState({
		dieOne: "one",
		dieTwo: "one",
		rolling: false,
	});

	const handleRollClick = () => {
		let randomDieOne = sides[Math.floor(Math.random() * sides.length)];
		let randomDieTwo = sides[Math.floor(Math.random() * sides.length)];
		setDice({ dieOne: randomDieOne, dieTwo: randomDieTwo, rolling: true });
		setTimeout(() => {
			setDice({ dieOne: "one", dieTwo: "one", rolling: false });
		}, 1200);
	};

	return (
		<div className="RollDice">
			<div className="RollDice-container">
				<Die face={dice.dieOne} rolling={dice.rolling} />
				<Die face={dice.dieTwo} rolling={dice.rolling} />
			</div>
			<button onClick={handleRollClick}>
				{dice.rolling ? "Rolling..." : "Roll Dice!"}
			</button>
		</div>
	);
	
};
