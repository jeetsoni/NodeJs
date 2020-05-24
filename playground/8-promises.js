const doWorkPromises = new Promise((resolve,reject) => {
    setTimeout(() => {
        // resolve([4,7,1])
        reject('Things went wrong')
    },2000)
})


doWorkPromises.then((result) => {
    console.log('Success', result)
}).catch((error) => {
    console.log('Error!', error)
})
