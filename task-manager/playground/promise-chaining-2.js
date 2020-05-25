require('../src/db/mongoose')
const Tasks = require('../src/models/task')

Tasks.findByIdAndDelete('5ecb957bbadcb0368c63d8f0').then((task) => {
    console.log(task)
    return Tasks.countDocuments({completed: false})
}).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})
