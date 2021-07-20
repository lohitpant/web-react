import React from 'react';
import CardItem from './CardItem';
import './Cards.css'

export default function Cards() {
    return (
        <div className="cards">
            <h1>Check Out these apps</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem src='/images/Quiz.jpg' text="The Quiz App" label="New" path="/quiz" />
                        <CardItem src='/images/calculator.jpg' text="The Calculator"
                            label="New" path="/calculator" />
                        <CardItem src='/images/recipes.jpg' text="The Recipe App"
                            label="New" path="/recipes" />
                        <CardItem src='/images/weather.jpg' text="Weather in Hindi"
                            label="New" path="/weather" />
                    </ul>
                    <ul className="cards__item">
                    </ul>
                </div>
            </div>
        </div>
    );
}