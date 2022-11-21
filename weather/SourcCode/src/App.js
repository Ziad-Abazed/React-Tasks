import './App.css';
import React, { useState } from 'react'
import axios from 'axios'
function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('');

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=895284fb2d2c50a520ea537456963d9c`

  // for entering location
  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')    //setting location to empty after entering location
    }
  }

  return (
    
 <div className="container-fluid px-1 px-sm-3 py-5 mx-auto">
  <div className="row d-flex justify-content-center">
    <div className="row card0">
      <div className="card1 col-lg-8 col-md-7">
        <small>{data.sys ? <h1>{(data.sys.country).toFixed()}°C</h1> : null}</small>
        <div className="text-center">
          <img className="image mt-5" src="https://i.imgur.com/M8VyA2h.png" />
        </div>
        <div className="row px-3 mt-3 mb-3">
          <h1 className="large-font mr-3"> {data.main ? <h1>{(data.main.temp).toFixed()}°C</h1> : null}</h1>
          <div className="d-flex flex-column mr-3">
            <h2 className="mt-3 mb-0">{data.name ? <h1>{(data.name).toFixed()}°C</h1> : null}</h2>
          </div>
          <p> {data.weather ? <p>{data.weather[0].main}</p> : null}</p>
          <div className="d-flex flex-column text-center">
           
           
          </div>
        </div>
      </div>
      <div className="card2 col-lg-4 col-md-5">
        <div className="row px-3">
          <input type="text" 
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder='Enter Location'
       
          className="mb-5" />
         
        </div>
        <div className="mr-5">
         
          <div className="line my-5" />
          <p>Weather Details</p>
          <div className="row px-3">
            <p className="light-text">temp min</p>
            <p className="ml-auto">{data.main ? <h3>{(data.main.temp_min).toFixed()}°C</h3> : null}</p>
          </div>
          <div className="row px-3">
            <p className="light-text">Humidity</p>
            <p className="ml-auto">  {data.main ? <h3 className='bold'>{data.main.humidity}%</h3> : null}</p>
          </div>
          <div className="row px-3">
            <p className="light-text">Speed Wind</p>
            <p className="ml-auto"> {data.wind ? <h3 className='bold'>{data.wind.speed*1.60934.toFixed()} km/h</h3> : null}</p>
          </div>
          <div className="row px-3">
            <p className="light-text">Rain</p>
            <p className="ml-auto">0mm</p>
          </div>
          <div className="line mt-3" />
        </div>
      </div>
    </div>
  </div>
</div>


  );
}

export default App;
