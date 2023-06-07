import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import path from 'path'

import booksRoute from './routes/books.js'

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = 5001;

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("../client"));

app.use('/books', booksRoute)

app.get('/', (req, res) => {
    res.send('Hello World, from express')
})

app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, "./client/404.html"))
})

app.listen(PORT, () => console.log(`MY hello world app listening on port ${PORT}!`));