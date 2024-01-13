const locationsRouter = require('express').Router()
const Location = require('../models/location')

locationsRouter.get('/', async (request, response) => {
  const locations = await Location.find({})
  response.json(locations)
})

locationsRouter.post('/', async (request, response) => {
  console.log(request.body)
  const content = request.body
  
  if (!content) response.status(401)
    .json({ error: 'no content was provided' })

  const location = new Location({
    ...content
  })
  
  const result = await location.save()
  response.status(201).json(result)
})

module.exports = locationsRouter