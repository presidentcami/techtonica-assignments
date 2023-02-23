import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import booksRoute from './routes/books.js'

const app = express();
const PORT = 5001;

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/books', booksRoute)

app.get('/', (req, res) => {
    res.send('Hello World, from express')
})

app.listen(PORT, () => console.log(`MY hello world app listening on port ${PORT}!`));