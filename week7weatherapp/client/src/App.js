import './App.css';
import { useState } from "react";
import WeatherForm from './components/weatherForm';
// import WeatherCard from './components/weatherCard';

function App() {
  const [city, setCity] = useState("");
  // const [result, setResult] = useState(null);

  //A function to do the get request and set the state from the hard code data
  // const loadCity = () => {
  //   fetch("http://localhost:8080/weather")
  //     .then((response) => response.json())
  //     .then((result) => {
  //       //console.log(result)
  //       setCity(result.weather[0].name);
  //       setResult(result);
  //     });
  // }

  const handleSubmit = (city) => {
    setCity(city)
    console.log(city)
  }

//  const handleSubmit = (city) =>{
//   // e.preventDefault();
//   setCity(city);
//   loadCity();
//  }


  return (
    <div className="App">
      <WeatherForm city={city} onSubmit={handleSubmit}/>
      {/* {!result ? <p>Please click the button to see Data</p> : <WeatherCard data={result} /> } */}
      {!city ? <p>Please click the button to see Data</p> : <p>{city}</p>}
    </div>
  );
}

export default App;
