const usersRouter = require('express').Router()
const User = require('../models/user')

usersRouter.get('/', async (request, response) => {
  const users = await User.find({})
  response.json(users)
})

usersRouter.post('/', async (request, response) => {
  const content = request.body
  
  if (!content) response.status(401)
    .json({ error: 'no content was provided' })

  const user = new User({
    ...content
  })
  
  const result = await user.save()
  response.status(201).json(result)
})

usersRouter.delete('/:id', async (request, response) => {
  const userToDelete = await User.findById(request.params.id)

  if (!userToDelete) response.status(404).end()
  
  await User.findByIdAndDelete(request.params.id)
  response.status(204).end()
})

module.exports = usersRouter