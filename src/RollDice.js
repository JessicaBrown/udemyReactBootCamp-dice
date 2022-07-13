import React, { useState } from "react";
import { Die } from "./Die";
import "./RollDice.css";

export const RollDice = () => {
	const [die1, setDie1] = useState("one");
	const [die2, setDie2] = useState("one");
	const [rolling, setRolling] = useState(false);

	const sides = ["one", "two", "three", "four", "five", "six"];

	const roll = () => {
		let die1 = Math.floor(Math.random() * sides.length);
		switch (die1) {
			case 0:
				die1 = "one";
				break;
			case 1:
				die1 = "two";
				break;
			case 2:
				die1 = "three";
				break;
			case 3:
				die1 = "four";
				break;
			case 4:
				die1 = "five";
				break;
			case 5:
				die1 = "six";
				break;
			default:
				die1 = "one";
				break;
		}

		let die2 = Math.floor(Math.random() * sides.length);
		switch (die2) {
			case 0:
				die2 = "one";
				break;
			case 1:
				die2 = "two";
				break;
			case 2:
				die2 = "three";
				break;
			case 3:
				die2 = "four";
				break;
			case 4:
				die2 = "five";
				break;
			case 5:
				die2 = "six";
				break;
			default:
				die2 = "one";
				break;
		}

		setDie1(die1);
		setDie2(die2);
		setRolling(true);

		setTimeout(() => {
			setRolling(false);
		}, 1000);
	};

	return (
		<div className="RollDice">
			<div className="RollDice-container">
				<Die face={die1} rolling={rolling} />
				<Die face={die2} rolling={rolling} />
			</div>
			<button onClick={roll}>{rolling ? "Rolling..." : "Roll Dice!"}</button>
		</div>
	);
};
