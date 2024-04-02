const messagesRouter = require('express').Router()
const Message = require('../models/message')

messagesRouter.get('/', async (request, response) => {
  const messages = await Message.find({})
  response.json(messages)
})


messagesRouter.post('/', async (request, response) => {
  console.log(request.body)
  const content = request.body
  
  if (!content) response.status(401)
    .json({ error: 'no content was provided' })

  const message = new Message({
    ...content
  })
  
  const result = await message.save()
  response.status(201).json(result)
})

messagesRouter.delete('/:id', async (request, response) => {
  const messageToDelete = await Message.findById(request.params.id)

  if (!messageToDelete) response.status(404).end()
  
  await Message.findByIdAndDelete(request.params.id)
  response.status(204).end()
})

module.exports = messagesRouter