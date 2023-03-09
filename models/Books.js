
const mongoose = require('mongoose');


const Book = new mongoose.Schema({
    title: {
        type: String,
        unique: true,
    },
    bookId: {
        type: Number
        
    },
    author: {
        type:String
    },
    store: {
        type: String,
        required: [true, 'please provide a address of the store '],
    },
    Genre: {
        type:String
    },
    Description: {
        type: String,
        required: [true, 'please provide a Description '],
      
    },
    Reviews: {
        type: String,
    },
    Price: {
        type: Number,
        required: [true, 'please provide a price '],
    }
})

module.exports = mongoose.model('Books', Book)