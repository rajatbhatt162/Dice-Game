import React from "react";
import styled from "styled-components";

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

const Container = styled.div`
  max-width: 1180px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;

  img {
    width: 300px;
    height: auto;
  }

  .Content {
    text-align: center;
    h1 {
      font-size: 96px;
      white-space: nowrap;
    }
  }
`;

const StartGame = ({ toggle }) => {
  return (
    <Container>
      <div>
        <img src="/Dice-Game\images\dice.png" alt="Dice" />
      </div>
      <div className="Content">
        <h1>Dice-Game</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  );
};

export default StartGame;
