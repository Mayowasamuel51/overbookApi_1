const express = require('express')
const router = express.Router();
const AuthorController = require('../controllers/AuthorController')




router.post('/author',AuthorController.createAuthor);
router.patch('/author/:authorid', AuthorController.AuthorBookAndUpdate);


// router.get('/author/:bookid/books', BookController.findBookId); 
// router.get('/author/:bookid/reviews', BookController.findBookReview);
// router.get('/author/:bookid/:author', BookController.findBookAndAuthor);
module.exports = router;