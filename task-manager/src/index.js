const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Tasks = require('./models/task')
const userRouter = require('./routers/user.js')
const taskRouter = require('./routers/task')
const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port '+ port)
})

const jwt = require('jsonwebtoken')

const myFunctiion = async () => {
   const token =  jwt.sign({ _id: 'avc123' }, 'thisismynewcourse', {expiresIn: '7 days'})
   console.log(token)

   const data = jwt.verify(token, 'thisismynewcourse')
   console.log(data)
}

myFunctiion()
