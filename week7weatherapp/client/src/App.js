import './App.css';
import { useState } from "react";
import WeatherForm from './components/weatherForm';
import WeatherCard from './components/weatherCard';

function App() {
  const [city, setCity] = useState("");
  const [result, setResult] = useState(null);

  // capture city in a variable

  // A function to do the get request and set the state from the hard code data
  const loadCity = () => {
    console.log(city)
    fetch(`http://localhost:8080/weather?cityName=${city}`)
      .then((response) => response.json())
      .then((result) => {
        console.log(result)
        setResult(result);
      });
  }

  // all handleSubmit needs to do is load the city
  const handleSubmit = () => {
    loadCity();
  }


  return (
    <div className="App">
      {/* send updateCity as props back to child, so we can use the 'setCity' function */}
      <WeatherForm city={city} updateCity={setCity} onSubmit={handleSubmit}/>
      {!result ? <p>Enter a city to see today's weather!</p> : <WeatherCard data={result} /> }
      {/* {!city ? <p>Please click the button to see Data</p> : <p>{city}</p>} */}
    </div>
  );
}

export default App;
