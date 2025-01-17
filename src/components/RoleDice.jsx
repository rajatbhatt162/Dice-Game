import React from "react";
import styled from "styled-components";

const DiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const DiceImage = styled.img`
  width: 100px;
  height: 100px;
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
  @media (max-width: 768px) {
    width: 180px; /* Adjust width for smaller screens */
    height: 36px; /* Adjust height for smaller screens */
    font-size: 14px; /* Adjust font size for smaller screens */
  }
`;

const RoleDice = ({ currentDice, roleDice }) => {
  return (
    <DiceContainer>
      <DiceImage src={`/Dice-Game/images/RoleDice/Dice${currentDice}.png`} alt={`Dice ${currentDice}`} />
      <Button onClick={roleDice}>Roll Dice</Button>
    </DiceContainer>
  );
};


export default RoleDice;
