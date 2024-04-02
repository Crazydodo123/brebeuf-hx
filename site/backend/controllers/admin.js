const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const adminRouter = require('express').Router()
const Admin = require('../models/admin')

adminRouter.post('/', async (request, response) => {
  const { password } = request.body
  console.log(request.body)

  const adminUser = await Admin.findOne({})

  if (!(await bcrypt.compare(password, adminUser.passwordHash))) {
    return response.status(401).json({
      error: 'Invalid password'
    })
  } else {
    const adminToken = {
      success: true,
    }
  
    const token = jwt.sign(adminToken, process.env.SECRET)
  
    response.status(200).send({ token })
  }
})

adminRouter.put('/', async (request, response) => {
  const { oldPassword, newPassword } = request.body

  const adminUser = await Admin.findOne({})

  if (!(await bcrypt.compare(oldPassword, adminUser.passwordHash))) {
    return response.status(401).json({
      error: 'Invalid password'
    })
  } else {
    const saltRounds = 10
    const passwordHash = await bcrypt.hash(newPassword, saltRounds)

    const updatedAdmin = await Admin.findByIdAndUpdate(
      adminUser.id,
      { passwordHash },
      { new: true, runValidators: true, context: 'query' }
    )
  
    response.json(updatedAdmin)
  }
})

module.exports = adminRouter