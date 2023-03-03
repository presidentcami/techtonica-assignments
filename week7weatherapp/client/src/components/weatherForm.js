
const WeatherForm = (props) =>{

  // onChange, we setCity in App.js by using props to update the city with w/e the user types in
const onChange = (ev) => {
  props.updateCity(ev.target.value);
 }

 // this function is ensuring that the loadCity function from the handleSubmit in the parent happens when we submit in the child
 const handleSubmit = (event) => {
  event.preventDefault()
  props.onSubmit()
 }

    return (
        <div className="weather">
        <h1 className="App-header">Camille's Weather Forecast</h1>
        <form onSubmit={handleSubmit}>
          <input
            id="city-name"
            type="text"
            placeholder="Please enter the city name"
            name="city"
            onChange={onChange}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
}

export default WeatherForm;