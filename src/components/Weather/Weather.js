import React, { useState } from 'react'
import './Weather.css';

const api={
    key: "261cd393c9e1dce8cab74b91843b7865",
    base:"https://api.openweathermap.org/data/2.5/"
}

function Weather() {

    const[query, setQuery]=useState("");
    const[weather, setWeather]=useState({});

    const search= event=>{
        if(event.key=="Enter" && query){
            if(query){
            fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}&lang=hi`)         
            .then(res=>res.json())
            .then(result=>
                {
                    setQuery("");
                    setWeather(result)
                    console.log(result)
                }    
                );                
        } else{
            alert("Please enter city name")
        }}
    }

    const dateBuilder=(d)=>{
    let months=["जनवरी",'फरवरी', 'मार्च','अप्रैल','मई','जून','जुलाई','अगस्त','सितम्बर','अक्टूबर','नवम्बर','दिसम्बर'];
    let days=["रविवार",'सोमवार','मंगलवार','बुधवार','गुरुवार','शुक्रवार', "शनिवार"]

    let day=days[d.getDay()];
    let date=d.getDate();
    let month=months[d.getMonth()];
    let year=d.getFullYear();

    return `${day} ${date} ${month} ${year}`

    }
    
    return (
        <div className={(typeof weather.main!="undefined")?
        ((weather.main.temp>15)?('app warm'):("app"))
        :('app')
        }>
            <main>
                <div className="search-box">
                    <input type="text" className="search-bar" placeholder="Search..."
                    onChange={e=>setQuery(e.target.value)} value={query} onKeyPress={search}
                    />
                </div>
               {(typeof weather.main!='undefined') ? (
                   <div>
                        <div className="location-box">
                    <div className="location">{weather.name}, {weather.sys.country}</div>
                    <div className="date">{dateBuilder(new Date())}</div>
                </div>
                <div className="weather-box">
                <div className="temp">
                    {Math.round(weather.main.temp)}°C
                </div>                
                <div className="weather">{weather.weather[0].description}</div>
                </div>
                   </div>
               ): ('')}
            </main>
        </div>
    )
}

export default Weather;
