import React, { useState, useEffect } from 'react';

const API = "d8fcc970a35cd3edbfaa3ed073fe34dd";


function WeatherApp() {
  const [weather, setWeather] = useState({});
  const [city, setCity] = useState('San Francisco');

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}`)
      .then(response => response.json())
      .then(data => setWeather(data));
  }, [city]);

  return (
    <div>
      <form className='weatherBg'>
      <heading className='heading'>
        <input value={city} onChange={event => setCity(event.target.value)} />
     
      {weather.main && (
        <div className='weatherResultBox'>
       
          <h1>{weather.name}</h1>
          {/* <div className='weatherIcon'> */}
          <p>Temperature: {weather.main?.temp}</p>
          <p>Humidity: {weather.main?.humidity}</p>
          <p>Description: {weather.weather[0].description}</p>
          {/* </div> */}
        </div>
      )}
      </heading>
      </form>
    </div>
  );
}

export default WeatherApp;
