import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./infoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function InfoBox({info}){

    const cold_url = "https://plus.unsplash.com/premium_photo-1671004292035-1daa72d72fa3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNvbGQlMjB3ZWF0aGVyfGVufDB8fDB8fHww";
    const hot_url = 
    "https://plus.unsplash.com/premium_photo-1689298477872-f030a777d741?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGhvdCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const rain_url = 
    "https://plus.unsplash.com/premium_photo-1670002347718-de1091111728?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHJhaW55JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    return(
    <div className="info-box">
     <div className='cardContainer'>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image= { 
            info.humidity > 80 
            ? rain_url
            : info.temp > 15 
            ? hot_url 
            : cold_url
        } 
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {info.city} {
            info.humidity > 80 
            ? <ThunderstormIcon sx={{ fontSize: 30, color: "blue"}}/>
            : info.temp > 15
            ? <SunnyIcon sx={{ fontSize:30, color: "orange"}}/>
            : <AcUnitIcon sx={{ fontSize: 30, color: "blue"}}/>
        }
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}component={"span"}>
          <p>Temprature: {info.temp}&deg;C</p>
          <p>Maximum Temprature: {info.tempMax}&deg;C</p>
          <p>Minimum Temprature: {info.tempMin}&deg;C</p>
          <p>Humidity: {info.humidity}</p>
          <p>Weather can be described as {info.weather} and it feels like {info.feel_like}&deg;C</p>
        </Typography>
      </CardContent>
      
    </Card>
    </div>
    </div>
    )
}