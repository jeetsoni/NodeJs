// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const {MongoClient, ObjectID} = require('mongodb')


const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if(error) {
        console.log('Unable to connect to database')
    }

    const db = client.db(databaseName)
    

 //CREATE


    // db.collection('users').insertMany([
    //     {
    //         name:'parth',
    //         age:20
    //     }, {
    //         name:'prince',
    //         age:22
    //     }
    // ], (error,result) => {
    //     if(error) {
    //         return console.log('Unable to insert documents!')
    //     }
    //     console.log(result.ops)
    // })

    // db.collection('tasks').insertMany([
    //     {
    //         description: 'clean the house',
    //         completed: true
    //     }, {
    //         description: 'Renew inspection',
    //         completed: false
    //     }, {
    //         description: 'pot plants',
    //         completed: false
    //     }
    // ], (error, result) => {
    //     if(error) {
    //        return console.log("Unable to insert the task")
    //     }
    //     console.log(result.ops)
    // })


 //READ


    // db.collection('users').findOne({ _id: new ObjectID("5eca124ccc0a365a74f45687") }, (error, user)  => {
    //     if(error) {
    //         console.log('Unable to fetch')
    //     }

    //     console.log(user)
    // })

    // db.collection('users').find({ age:"27" }).toArray((error, users) => {
    //     console.log(users)
    // }) 

    // db.collection('users').find({ age:"27" }).count((error, count) => {
    //     console.log(count)
    // }) 


 //UPDATE

   // db.collection('users').updateOne({
   //     _id: new ObjectID("5eca33808086946f5814bfa0")
   //  }, {
   //     $inc: {
   //        age: 1
   //     }
   //  }).then((result) => {
   //    console.log(result)
   //  }).catch((error) => {
   //    console.log(error)
   //  })


   // db.collection('tasks').updateMany({
   //    completed: false
   // }, {
   //    $set: {
   //       completed: true
   //    }
   // }).then((result) => {
   //    console.log(result)
   // }).catch((error) => {
   //     console.log(error)
   // })

//DELETE

   //  db.collection('users').deleteMany({
   //     age: "27"
   //  }).then((result) => {
   //     console.log(result)
   //  }).catch((error) => {
   //     console.log(error)
   //  })

    
})
