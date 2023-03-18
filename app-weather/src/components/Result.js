import React from "react";
import './Result.css'

const Result = props => {

    const {error, city, temp, date, sunrise, sunset, pressure, wind, zone} = props.pogoda;

    let content = null;

    if(!error && city) {

        const sunriseTime = new Date((sunrise + zone - 3600) * 1000).toLocaleTimeString();
        const sunsetTime = new Date((sunset + zone - 3600) * 1000).toLocaleTimeString();
        content = (
            <div>
                <h3>Wyświetlanie wyników wyszukiwania dla miasta: <strong>{city}</strong></h3>
                <h4>Dane pogodowe aktualne na dzień i godzinę: {date} </h4>
                <h4>Bieżąca temperatura: {temp} &#176;C</h4>
                <h4>Wschód słońca w dzisiejszym dniu jest o godzinie: {sunriseTime}</h4>
                <h4>Zachód słońca w dzisiejszym dniu jest o godzinie: {sunsetTime}</h4>
                <h4>Bieżąca prędkość wiatru wynosi: {wind} m/s</h4>
                <h4>Aktualne ciśnienie atmosferyczne wynosi: {pressure} hPa</h4>
            </div>
        )
    }

    return (
        <div className="result">
            {error ? `Nie mamy w bazie danych miasta: ${city}` : content}
        </div>
    );
}

export default Result;