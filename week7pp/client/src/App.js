import './App.css';
import { useState } from "react";
import WeatherForm from './components/weatherForm';
// import WeatherCard from './components/weatherCard';

function App() {
  const [city, setCity] = useState("");
  // const [result, setResult] = useState(null);

  // //A function to do the get request and set the state from the hard code data
  // const loadCity = () => {
  //   fetch("http://localhost:8082/api/weather")
  //     .then((response) => response.json())
  //     .then((result) => {
  //       //console.log(result)
  //       setCity(result.weather[0].name);
  //       setResult(result);
  //       console.log(city);
  //     });
  // }

 const handleSubmit = (city) =>{
  // e.preventDefault();
  setCity(city);
  console.log(city);
  // loadCity();
 }


  return (
    <div className="App">
      <WeatherForm city={city} handleSubmit={handleSubmit}/>
      {!city ? <p>Tell us where do you live</p> : <p>Thank you {city} resident </p> }
    </div>
  );
}

export default App;
