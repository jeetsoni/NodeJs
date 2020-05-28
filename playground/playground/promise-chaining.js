require('../src/db/mongoose')
const User = require('../src/models/user')

// User.findByIdAndUpdate('5ecbe3ba97b13c6af07f115c', { age:1 }).then((user) => {
//     console.log(user)
//     return User.countDocuments({ age:1 })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })


const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, {age: age})
    const count = await User.countDocuments({ age })
    return count
}
updateAgeAndCount('5ecb8f241e8e08018878867f', 2).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})   
