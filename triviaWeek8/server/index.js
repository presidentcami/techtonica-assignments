import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import fetch from 'node-fetch';

// For testing my API I saving one response in a .js file 
import fakedata  from './fakedata.js';

const app = express();
const PORT = 8000;

// Configuring cors middleware
app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// //creates an endpoint for the route `/`
app.get("/", (req, res) => {
    res.json("Hello Techtonica Server for a Game");
  });

// Make the GET request for the GAME Api for grabbing all the questions 


// hardcode the game response for testing reasons to don't saturate my API call. 
app.get('/api/game', (req, res) =>{
  // const url = "https://opentdb.com/api.php?amount=10&category=10&difficulty=medium&type=multiple";  
  // fetch(url)
  //   .then((res) => res.json())
  //   .then((data) => {
  //     res.send(data); 
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
  res.json(fakedata);
})



app.listen(PORT, () => console.log(`Hello! Camille's server running on Port http://localhost:${PORT}`));