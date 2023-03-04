const express = require('express');
const cors = require('cors');
require('dotenv').config();
// console.log(process.env.API_KEY) -- logged this because it wasn't fetching my apikey at first, and wanted to see what was going on. this seemed to jumpstart it
const dataWeather = require("./data")

const app = express();

const PORT = 8080;
app.use(cors());
app.use(express.json());

// creates an endpoint for the route /api
app.get('/', (req, res) => {
    res.json({ message: 'Hello from My template ExpressJS' });
  });

// creates an endpoint for the route /api/weather
app.get('/weather', (req, res) => {
  const city = req.query.cityName;
  // console.log(req.query); -- ran some tests
  const apiKey = process.env.API_KEY;
  // console.log(apiKey) 
  // console.log("city", req.query.cityName, "apiKey", apiKey)
  const params = new URLSearchParams ({
    q: city,
    appid: apiKey,
    units: "imperial"
  });
  const url = `https://api.openweathermap.org/data/2.5/weather?${params}`;
  console.log(url);

  fetch(url)
  .then((res) => res.json())
  .then((data) => {
    res.send(data); // had copied this fetch request and originally data was in {}, so deleted that to help my weathercard easily access the data
  })
  .catch((err) => {
    console.log(err);
  });
});

// console.log that your server is up and running
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });