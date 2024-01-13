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
    .json({ error: 'no token was provided' })

  const message = new Message({
    ...content
  })
  
  const result = await message.save()
  response.status(201).json(result)
})

module.exports = messagesRouter