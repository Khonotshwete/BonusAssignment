let mongoose = require('mongoose');

// create a model class
let bookModel = mongoose.Schema({
    Name:String,
    Trainer:String,
    Date:String,
    Description:String,
    Price: Number
},
{
    collection:"Bio_books"
});
module.exports = mongoose.model('Book',bookModel);
