const Book = require('../models/Books');




exports.createBook = async (req, res) => {
    const rand = Math.floor(300 * Math.random())
    const { title, Genre, store, Reviews, Price, author, Description } = req.body;
    try {
        const book = await Book.create({
            title: title,
            bookId: rand,
            Genre: Genre,
            store: store,
            Reviews: Reviews,
            Description: Description,
            Price: Price,
            author: author
        })
        res.status(201).json({
            status: 200,
            data: book
        })
    } catch (err) {
        res.status(404).json({
            status: 404,
            data: err.message
        })
    }
}
exports.findBookId = async (req, res) => {
    try {
        const bookId = await Book.findOne({ bookId: req.params.bookid })
        if (bookId) {
            return res.status(201).json({
                status: 200,
                message: 'found book',
                data: bookId
            })
        } else {
            return res.status(401).json({
                status: 401,
                data: 'not found'
            })
        }
    } catch (err) {
        res.status(404).json({
            status: 404,
            data: err.message
        })
    }
}
exports.findBookAndUpdate = async (req, res) => {
    try {
        const bookId = await Book.findByIdAndUpdate(req.params.bookid, req.body, {
            new: true,
            runValidators: true
        })
        res.status(201).json({
            status: 200,
            message: 'book info updated ',
            bookId
        })

    } catch (err) {
        res.status(404).json({
            status: 404,
            data: err.message
        })
    }
}
exports.findBookAndAuthor = async (req, res) => {
    try {
        const bookId = await Book.findOne({ bookId: req.params.bookid, author: req.params.author })
        if (bookId) {
            return res.status(201).json({
                status: 200,
                message: 'found book',
                data: bookId
            })
        } else {
            return res.status(401).json({
                status: 401,
                data: 'not found  please try again '
            })
        }
    } catch (err) {
        res.status(404).json({
            status: 404,
            data: err.message
        })
    }
}


exports.findBookName = async (req, res) => {
    try {
        const bookId = await Book.findOne({ title: booktitle })
        if (bookId) {
            return res.status(201).json({
                status: 200,
                message: 'found book',
                data: bookId
            })
        } else {
            return res.status(401).json({
                status: 401,
                data: 'not found  please try again '
            })
        }
    } catch (err) {
        res.status(404).json({
            status: 404,
            data: err.message
        })
    }
}

exports.find = async (req, res) => {
    try {
        const bookId = await Book.find()
        res.status(201).json({
            status: 200,
            data: bookId
        })

    } catch (err) {
        res.status(404).json({
            status: 404,
            data: err.message
        })
    }
}
exports.findBookReview = async (req, res) => {
    try {
        const bookId = await Book.findOne({ bookId: req.params.bookid }).select('Reviews')
        if (bookId) {
            return res.status(201).json({
                status: 200,
                data: bookId
            })
        } else {
            return res.status(401).json({
                status: 401,
                data: 'invaid book id '
            })
        }
    } catch (err) {
        res.status(404).json({
            status: 404,
            data: err.message
        })
    }
}