import React from 'react';
import style from './recipe.module.css'

const Recipe=(props)=>{
    return(
        <div className={style.recipe}>
            <h1>Recipe Name: {props.label}</h1>
            <p>Calories: {props.calories}</p>
            <img src={props.image} />
        </div>
    );
}

export default Recipe;