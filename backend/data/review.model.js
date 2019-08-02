const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({

  review: {
    type: String,
    required: false,
    unique: false,
  },
  rating: {
    amount_of_stars: Number;
  }
});

const Review = mongoose.model('Review', reviewSchema);
module.exports = Review;
