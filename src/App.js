import React , {useState} from "react";
import CardGrids from "./component/cardgrids";

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
            <CardGrids handleClick = {handleClick} />
        </>
    )
}

export default App;
