import React from "react";
import "../styles/scoreboard.css"

const ScoreBoard = ({ CurrentScore , BestScore }) => {
    return (
        <div className="scoreboard">
            <p> CurrentScore : {CurrentScore}</p>
            <p> BestScore : {BestScore}</p>
        </div>
    )
}
export default ScoreBoard;