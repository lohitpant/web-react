import React from 'react';
import { Button } from './Button';
import './HeroSection.css';
import '../App.css';

export default function HeroSection(){
    return(
        <div className="hero-container">
            
            <h1>Lohit Pant</h1>
            <p>I am a React Developer</p>
            <div className="hero-btns">
                <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large" toLink="/mywork">See My Work</Button>
                <Button className="btns" buttonStyle="btn--primary" buttonSize="btn--large">Hire Me!</Button>
            </div>
        </div>
    );
}