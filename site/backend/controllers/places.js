const placesRouter = require('express').Router()
const Place = require('../models/place')

placesRouter.get('/', async (request, response) => {
  const places = await Place.find({})
  response.json(places)
})

placesRouter.post('/', async (request, response) => {
  console.log(request.body, 333)
  const content = request.body
  
  if (!content) response.status(401)
    .json({ error: 'no content was provided' })

  const place = new Place({
    ...content
  })
  
  const result = await place.save()
  response.status(201).json(result)
})

module.exports = placesRouter