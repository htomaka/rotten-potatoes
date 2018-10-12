var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ReviewSchema = new Schema({
    movieName: { type: String, required: true },
    rating: { type: Number, required: true },
    title: { type: String, required: true },
    body: { type: String, required: true }
});

var Review = mongoose.model('Review', ReviewSchema);
module.exports = Review;