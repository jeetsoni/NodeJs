require('../src/db/mongoose')
const Tasks = require('../src/models/task')

// Tasks.findByIdAndDelete('5ecb957bbadcb0368c63d8f0').then((task) => {
//     console.log(task)
//     return Tasks.countDocuments({completed: false})
// }).then((count) => {
//     console.log(count)
// }).catch((e) => {
//     console.log(e)
// })


const deleteTaskAndCount = async (id) => {
    const task = await Tasks.findByIdAndDelete(id)
    const count = await Tasks.countDocuments({completed: false})
    return count
}

deleteTaskAndCount('5ecca7370b03084234e516c6').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})
