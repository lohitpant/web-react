import React from 'react';
import CardItem from './CardItem';
import './Cards.css'
import quiz_Image from '../images/Quiz.jpg'
import calculator_Image from '../images/calculator.jpg'
import recipes_Image from '../images/recipes.jpg'
import weather_Image from '../images/weather.jpg'

export default function MyWork() {
    return (
        <div className="cards">
            <h1>Check Out these apps</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                    <CardItem src={quiz_Image} text="The Quiz App" label="New" path="/quiz" />
                        <CardItem src={calculator_Image} text="The Calculator" 
                        label="New" path="/calculator" />
                        <CardItem src={recipes_Image} text="The Recipe App" 
                        label="New" path="/recipes" />
                        <CardItem src={weather_Image} text="Weather in Hindi" 
                        label="New" path="/weather" />
                    </ul>
                    <ul className="cards__item">
                    </ul>
                </div>
            </div>
        </div>
    );
}