
const WeatherCard = (props) => {
console.log(props.data)
// add data from API

  let sunrise = props.data.sys.sunrise;
  let sunset = props.data.sys.sunset;

  let rise = new Date(sunrise * 1000);
  let sunrise1 = rise.toLocaleTimeString();

  let set = new Date(sunset * 1000)
  let sunrise2 = set.toLocaleTimeString();


// had to update props to get data from the live API, not my hardcode
    return (
        <div className="weather-card">
            <div className="result">
                <p>City: <span className="data">
                    {props.data.name}, {props.data.sys.country}
                </span>
                </p>
                <p>Description: <span className="data">
                {props.data.weather[0].description}
              </span>
            </p>
            <img src={`http://openweathermap.org/img/wn/${props.data.weather[0].icon}@4x.png`} alt={"Icon from Open Weather Api"}/>
            <p>
              Temperature: <span className="data">
                {props.data.main.temp} <sup>o</sup>F
              </span>
            </p>
            <p>
              Feels Like: <span className="data">
                {props.data.main.feels_like} <sup>o</sup>F
              </span>
            </p>
          <p>
            Humidity: <span className="data">
              {props.data.main.humidity}%
            </span>
          </p>
          <p>
            Wind Speed: <span className="data">
              {props.data.wind.speed} mph
            </span>
          </p>
          <p>
            Sunrise: <span className="data">
              {sunrise1}
            </span> Sunset <span className="data">
              {sunrise2}
            </span>
          </p>
            </div>

        </div>
    )
}

export default WeatherCard;