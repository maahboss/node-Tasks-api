//const MongoClient = require('mongodb').MongoClient;

const {MongoClient,ObjectID} = require('mongodb');




MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

//   db.collection('Todos').find({
      
//     _id:new ObjectID('5b6040449fb6d32ddc160c8f')

//   }).toArray().then((docs) => {
     
//     console.log('Tasks');
//     console.log(JSON.stringify(docs,undefined,2));

//   },(err) => {
//       console.log('Unable to fetch tasks',err);
//   });



// db.collection('Todos').find().count().then((count) => {
     
//     console.log(`Tasks count: ${count} `);
    

//   },(err) => {
//       console.log('Unable to fetch tasks',err);
//   });


db.collection('Users').find({name:'Moh'}).toArray().then((docs) => {

    console.log('Name');
    console.log(JSON.stringify(docs,undefined,2));

    },(err) => {
        console.log('Unable to fetch tasks',err); 
  });
  

 // db.close();
});
