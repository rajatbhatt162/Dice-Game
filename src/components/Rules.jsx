import React from "react";
import styled from "styled-components";

const Rules = () => {
  return (
    <div>
      <RulesContainer>
        <h2>How to Play Dice-Game</h2>
        <div className="text">
          <p>
            Objective The goal is to reach a certain score by rolling dice and
            selecting numbers.
          </p>
          <p>
            Setup Each player selects a number between 1 and 6. A dice is rolled
            to generate a random number between 1 and 6.
          </p>
          <p>
            Game Play Selecting a Number: Before each roll, the player must
            select a number between 1 and 6. The selected number is the player's
            guess for the upcoming roll.
          </p>

          <p>
            Rolling the Dice: The player rolls the dice to generate a random
            number between 1 and 6. The result of the roll is compared to the
            player's selected number.
          </p>
          <p>
            Scoring: If the rolled number matches the player's selected number,
            the player scores points equal to the rolled number. If the rolled
            number does not match the selected number, the player loses 2
            points. The player's total score is updated accordingly.
          </p>
          <p>
            Winning: The game continues until a player reaches a predetermined
            score, which can be decided before the game starts (e.g., 50
            points). The player who reaches the target score first is declared
            the winner.
          </p>
          <p>
            Resetting the Game:Players can reset the game at any time, which
            resets the score to zero and starts a new round.
          </p>
        </div>
      </RulesContainer>
    </div>
  );
};

export default Rules;

const RulesContainer = styled.div`
max-width: 1300px;
margin: 0 auto;
margin-top: 40px;
background-color: whitesmoke;
color: black;
padding: 20px;
h2{
    font-size: 24px;
}
text{
    margin-top: 24px;
}
`;
