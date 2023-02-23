import express from 'express';

const router = express.Router();

const books = [ {
    "isbn" : 12345,
    "title" : "Who Fears Death",
    "author" : "Nnedi Okorafor",
    "format" : "Paperback"
}

]

//all routes in here are starting with /books
router.get('/', (req, res) => {
    console.log(books)
    res.send(books)
})

export default router;