const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5001;

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World, from express')
})

app.listen(PORT, () => console.log(`MY hello world app listening on port ${PORT}!`));