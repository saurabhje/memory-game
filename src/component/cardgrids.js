import React , {useState , useEffect}from "react";
import style from "../styles/cardgrid.css";

const CardGrids = ({handleClick}) =>{
    const [Cards, setCards] = useState([]);
    
    useEffect(()=>{
        setCards(bookcards);
    },[])

    const bookcards = [
        <div className="cardbox">
            <img src = {require('../images/book1.jpg')} alt=""></img>
            <p>Crime & Punishment</p>
        </div>,
        <div className="cardbox">
            <img src = {require('../images/book2.jpg')} alt=""></img>
            <p>1984</p>
        </div>,
        <div className="cardbox">
            <img src = {require('../images/book3.jpg')} alt=""></img>
            <p>The Noise of Time</p>
        </div>,
        <div className="cardbox">
            <img src = {require('../images/book4.jpg')} alt=""></img>
            <p>The Brothers Karamazov</p>
        </div>,
        <div className="cardbox">
            <img src = {require('../images/book5.jpg')} alt=""></img>
            <p>To Kill A Monkingbird</p>
        </div>,
        <div className="cardbox">
            <img src = {require('../images/book6.jpg')} alt=""></img>
            <p>Fahrenheit 451</p>
        </div>,
        <div className="cardbox">
            <img src = {require('../images/book7.jpg')} alt=""></img>
            <p>Lord of The Flies</p>
        </div>,
        <div className="cardbox">
            <img src = {require('../images/book8.jpg')} alt=""></img>
            <p>War and Peace</p>
        </div>,
        <div className="cardbox">
            <img src = {require('../images/book9.jpg')} alt=""></img>
            <p>The Old Man and The Sea</p>
        </div>,
        <div className="cardbox">
            <img src = {require('../images/book10.jpg')} alt=""></img>
            <p>Metamorphosis</p>
        </div>,
        <div className="cardbox">
            <img src = {require('../images/book11.jpg')} alt=""></img>
            <p>Man's Search For Meaning</p>
        </div>,
        <div className="cardbox">
            <img src = {require('../images/book12.jpg')} alt=""></img>
            <p>Great Expectation</p>
        </div>,
    ];

    const shuffleArray = (array) => {
        return [...array].sort(() => Math.random() - 0.5)
    }

    const handleCardClick = (e) =>{
        setCards(shuffleArray(bookcards));
        handleClick(e);
    }

    return (
        <>
        <div className="card-container">
            {Cards.map((card) => (
             <div onClick={handleCardClick}>
                 {card}
             </div>
            ))}
        </div>
        </>
    )
}

export default CardGrids;