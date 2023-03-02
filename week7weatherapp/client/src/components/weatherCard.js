const WeatherCard = (props) => {
console.log(props.data)
// add data from API

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
              {props.data.wind.speed} <sup>mph</sup>
            </span>
          </p>
            </div>

        </div>
    )
}

export default WeatherCard;