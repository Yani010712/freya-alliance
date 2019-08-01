const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Cup = new Schema({
  brand: {
    type: String
  },
  image: {
    type: String
  },
  url: {
    type: String
  },
  size: {
    type: String
  },
  length: {
    type: Number
  },
  stem_length: {
    type: Number
  },
  total_length: {
    type: Number
  },
  stem_style: {
    type: String
  },
  diameter: {
    type: Number
  },
  capacity: {
    type: Number
  },
  firmness: {
    type: String
  },
  price: {
    type: Number
  },
  featured: {
    type: Boolean
  },
  medical_grade: {
    type: Boolean
  },
  fda: {
    type: Boolean
  }
});

Cup.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) { delete ret._id }
});

module.exports = mongoose.model('Cup', Cup);