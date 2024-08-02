import React, { useState } from "react";
import styled from "styled-components";
import RoleDice from "./RoleDice"; // Ensure this path is correct
import Rules from "./Rules";

const ScoreContainer = styled.div`
  max-width: 200px;
  text-align: center;
  background-color: white;
  h1 {
    font-size: 100px;
    line-height: 100px;
  }
  p {
    font-size: 24px;
    font-weight: 500;
  }
`;

const FlexContainer = styled.div`
  padding-top: 70px;
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: space-around;
  flex-direction: column; /* Change to column on smaller screens */

  @media (min-width: 768px) {
    flex-direction: row; /* Change to row on larger screens */
  }
`;

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (!props.isSelected ? "black" : "white")};

  @media (max-width: 768px) {
    height: 50px; /* Adjust height for smaller screens */
    width: 50px; /* Adjust width for smaller screens */
    font-size: 18px; /* Adjust font size for smaller screens */
  }
`;

const DiceImage = styled.img`
  width: 100px;
  height: 100px;

  @media (max-width: 768px) {
    width: 70px; /* Adjust width for smaller screens */
    height: 70px; /* Adjust height for smaller screens */
  }
`;

const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;

  .flex {
    display: flex;
    gap: 24px;
  }

  p {
    font-size: 24px;
    font-weight: 700;
  }
  .error {
    color: red;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 20px;
  justify-content: center;
`;

const Button = styled.button`
  background-color: black;
  color: white;
  padding: 10px 18px;
  width: 220px;
  height: 44px;
  border-radius: 10px;
  font-size: 16px;
  transition: 0.5s background ease-in;

  &:hover {
    background-color: #ffffff;
    color: black;
    border-color: #0a0247;
    transition: 0.3s background ease-in;
  }
`;

const GamePlay = () => {
  const [currentDice, setCurrentDice] = useState(1);
  const [selectedNumber, setSelectedNumber] = useState();
  const [score, setScore] = useState(0);
  const [error, setError] = useState("");
  const [showRules, setShowRules] = useState(false);

  const arrNumber = [1, 2, 3, 4, 5, 6];

  const numberSelectorHandler = (value) => {
    setSelectedNumber(value);
    setError("");
  };

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const roleDice = () => {
    if (!selectedNumber) {
      setError("You have not selected any number");
      return;
    }
    const randomNumber = generateRandomNumber(1, 7);

    setCurrentDice(randomNumber);
    if (selectedNumber === randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }
    setSelectedNumber(undefined);
  };

  const resetGame = () => {
    setCurrentDice(1);
    setSelectedNumber(undefined);
    setScore(0);
    setError("");
  };

  return (
    <>
      <FlexContainer>
        <ScoreContainer>
          <h1>{score}</h1>
          <p>TOTAL SCORE</p>
        </ScoreContainer>

        <NumberSelectorContainer>
          <p className="error">{error}</p>
          <div className="flex">
            {arrNumber.map((value, i) => (
              <Box
                isSelected={value === selectedNumber}
                key={i}
                onClick={() => numberSelectorHandler(value)}
              >
                {value}
              </Box>
            ))}
          </div>
          <p>Select Number</p>
        </NumberSelectorContainer>
      </FlexContainer>
      <div>
        <RoleDice currentDice={currentDice} roleDice={roleDice} />
      </div>
      <ButtonContainer>
        <Button onClick={resetGame}>Reset</Button>
    
      <Button onClick={() => setShowRules(!showRules)}>Rules</Button>
      </ButtonContainer>
      {showRules && <Rules />} 

    </>
  );
};

export default GamePlay;
