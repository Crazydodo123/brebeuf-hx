const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  nom: {
    type: String,
    required: true
  } ,
  age: {
    type: Number,
    required: true
  } ,
  education: {
    type: String,
    required: true
  } ,
  participation: {
    type: String,
    required: true
  } ,
  recurrence: {
    type: String,
    required: true
  } ,
  weekend: {
    type: String,
    required: true
  } ,
  holiday: {
    type: String,
    required: true
  } ,
  experience: {
    type: String,
    required: true
  } ,
  formation: {
    type: String,
    required: true
  } ,
  misc: {
    type: String,
    required: true
  } ,
  casier: {
    type: String,
    required: true
  } ,
})

userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('User', userSchema)