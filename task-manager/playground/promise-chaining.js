require('../src/db/mongoose')
const User = require('../src/models/user')

User.findByIdAndUpdate('5ecbe3ba97b13c6af07f115c', { age:1 }).then((user) => {
    console.log(user)
    return User.countDocuments({ age:1 })
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})
