const mongoose = require('mongoose')

const placeSchema = new mongoose.Schema({
  name: {
    type: String
  },
  type: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String
  },
  email: {
    type: String
  },
  website: {
    type: String
  },
  address: {
    type: String
  },
  description: {
    type: String
  },
  lat: {
    type: Number,
    required: true,
  },
  lon: {
    type: Number,
    required: true,
  },
  time: {
    type: Number,
    required: true,
  }
})

placeSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Place', placeSchema)