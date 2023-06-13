import React from "react";

const CardGrids = () =>{
    const Cards = [
        <div className="cardbox">
            <img src = {require('../book1.jpg')} alt=""></img>
            <p>Crime & Punishment</p>
        </div>,
        <div className="cardbox">
            <img src = {require('../book2.jpg')} alt=""></img>
            <p>1984</p>
        </div>,
        <div className="cardbox">
            <img src = {require('../book3.jpg')} alt=""></img>
            <p>The Noise of Time</p>
        </div>,
        <div className="cardbox">
            <img src = {require('../book4.jpg')} alt=""></img>
            <p>The Brothers Karamazov</p>
        </div>,
        <div className="cardbox">
            <img src = {require('../book5.jpg')} alt=""></img>
            <p>To Kill A Monkingbird</p>
        </div>,
        <div className="cardbox">
            <img src = {require('../book6.jpg')} alt=""></img>
            <p>Fahrenheit 451</p>
        </div>,
        <div className="cardbox">
            <img src = {require('../book7.jpg')} alt=""></img>
            <p>Lord of The Flies</p>
        </div>,
        <div className="cardbox">
            <img src = {require('../book8.jpg')} alt=""></img>
            <p>War and Peace</p>
        </div>,
        <div className="cardbox">
            <img src = {require('../book9.jpg')} alt=""></img>
            <p>The Old Man and The Sea</p>
        </div>,
        <div className="cardbox">
            <img src = {require('../book10.jpg')} alt=""></img>
            <p>Metamorphosis</p>
        </div>,
        <div className="cardbox">
            <img src = {require('../book11.jpg')} alt=""></img>
            <p>Man's Search For Meaning</p>
        </div>,
        <div className="cardbox">
            <img src = {require('../book12.jpg')} alt=""></img>
            <p>Great Expectation</p>
        </div>,

    ]
}

export default CardGrids;