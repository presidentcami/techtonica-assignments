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

  const handleSubmit = () => {
    loadCity();
  }


  return (
    <div className="App">
      <WeatherForm city={city} updateCity={setCity} onSubmit={handleSubmit}/>
      {!result ? <p>Please click the button to see Data</p> : <WeatherCard data={result} /> }
      {/* {!city ? <p>Please click the button to see Data</p> : <p>{city}</p>} */}
    </div>
  );
}

export default App;
