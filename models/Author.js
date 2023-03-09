const mongoose = require('mongoose');
const Author = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: [true, 'please provide a name  '],
    },
    website: {
        required: [true, 'please provide a webiste '],
        type:String
    },
    authorId: {
        type: Number
        
    },
    Description: {
        type:String
    },
    image: {
        type: String,
        contentType:String
    },
})

module.exports = mongoose.model('authors',Author)