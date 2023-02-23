import express from 'express';

const router = express.Router();

const books = [ 
        {
            "isbn" : 12345,
            "title" : "Who Fears Death",
            "author" : "Nnedi Okorafor",
            "format" : "Paperback"
        },
        {
            "isbn": 23456,
            "title": "The Name of the Wind",
            "author": "Patrick Rothfuss",
            "format": "Paperback"
        },
        {
            "isbn": 34567,
            "title": "The City We Became",
            "author": "N.K. Jemisin",
            "format": "Hardcover"
        }

]

//all routes in here are starting with /books
router.get('/', (req, res) => {
    console.log(books)
    res.send(books)
})

export default router;