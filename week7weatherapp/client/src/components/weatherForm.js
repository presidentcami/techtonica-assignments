// import { useState } from 'react';

const WeatherForm = (props) =>{

  // const [city, setCity] = useState('');

  const onChange = (ev) => {
  props.updateCity(ev.target.value);
 }

 const handleSubmit = (event) => {
  event.preventDefault()
  props.onSubmit()
 }

 
    return (
        <div className="weather">
        <h1 className="App-header">Techtonica Weather Forecast App</h1>
        <form onSubmit={handleSubmit}>
          <input
            id="city-name"
            type="text"
            placeholder="Please enter the city name"
            name="city"
            // value=""
            onChange={onChange}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
}

export default WeatherForm;