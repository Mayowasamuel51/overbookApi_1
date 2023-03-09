const express = require('express')
const router = express.Router();

const BookController = require('../controllers/BookController')



router.post('/books', BookController.createBook);
router.get('/books', BookController.find);
router.get('/books/:name', BookController.findBookName);
router.get('/books/:bookid', BookController.findBookId);
router.patch('/books/:bookid', BookController.findBookAndUpdate);
router.get('/books/:bookid/reviews', BookController.findBookReview);
router.get('/books/:bookid/:author', BookController.findBookAndAuthor);

module.exports = router;