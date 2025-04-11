import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';

export default function SearchBox({updateWeatherInfo}){
    const API_URL = "https://api.openweathermap.org/data/2.5/weather"; 
    const API_KEY = "122e85c1ac4ad47add919a68f56cbdfc";

    let [city, setCity] = useState('');
    let [err, setErr ] = useState(false);
    

let getWeatherInfo = async () => {
   try{
    let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    let jsonResponse = await response.json();

    let result  = {
        city: city,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feel_like: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,

    }
    console.log(result);
    return result;
   }catch(err){
     throw err;
   }
};


    

    let handleChange = (evt)=>{
        setCity(evt.target.value);   
    };

    let handleSubmit =async (evt)=>{
        try{
            setErr(false);
            evt.preventDefault();
            console.log(city);
            let newInfo = await getWeatherInfo();
        setCity("");
        updateWeatherInfo(newInfo);
        }catch(err){
             setErr(true);
        }
        
    }

    return(
    <div className="search-box">
        <br></br>
        <form onSubmit={handleSubmit}>
        <TextField 
        id="city" 
        label="City_Name" 
        variant="outlined" 
        value={city}
        onChange={handleChange} 
        required 
        />
        <br></br> <br></br>
        <Button variant="contained" type='submit'>
        Search
        </Button>
        {err && <p style={{color: "red"}}>No Such location found!</p>}
        </form>
        
    </div>
    );
}