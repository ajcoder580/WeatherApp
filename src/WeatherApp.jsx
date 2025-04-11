import { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./infoBox";

export default function WeatherApp() {
    let [weatherInfo, setWeatherInfo] = useState(
        {
            city: "Smastipur",
            feel_like: 34.72,
            humidity: 36,
            temp: 34.16,
            tempMax: 35.16,
            tempMin: 33.19,
            weather: "Clear",
         }
    );

    let updateWeatherInfo = (info) =>{
        setWeatherInfo(info);
    }
    return(
        <div style={{textAlign: "center"}}>
            <h1> Weather App by Rahul</h1>
            <SearchBox updateWeatherInfo={updateWeatherInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    );
}