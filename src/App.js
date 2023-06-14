import React , {useState} from "react";
import CardGrids from "./component/cardgrids";
import ScoreBoard from "./component/scoreboard";
import "../src/styles/App.css"

const App = () =>{
    const [CurrentScore, setCurrentScore] = useState(0);
    const [BestScore , setBestScore] = useState(0);
    const [clickedBooks, setclickedBooks] = useState([]);

    const handleClick = (e) =>{
        const bookName = e.target.parentNode.lastChild.textContent;
        playRound(bookName);
    }

    const playRound = (bookname) =>{
        if(clickedBooks.includes(bookname)){
            resetGame();
        } else{
            const newscore =CurrentScore + 1;
            setCurrentScore(newscore);
            if(newscore > BestScore) setBestScore(newscore);
            setclickedBooks((prevState)=> [...prevState, bookname]);
        }
    }

    const resetGame = () =>{
        setclickedBooks([]);
        setCurrentScore(0);
    }

    return (
        <> 
            <p className="header">Book-Memory</p>
            <div className="content">
                <CardGrids handleClick = {handleClick} />
                <ScoreBoard CurrentScore = {CurrentScore} BestScore = {BestScore} />
            </div>
        </>
    )
}

export default App;
