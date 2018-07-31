// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // deleteMany
  //  db.collection('Todos').deleteMany({task: 'Some'}).then((result) => {
  //    console.log(result);
  //  });


  //delete One

  // db.collection('Todos').deleteOne({task: 'Some'}).then((result) => {
  //   console.log(result);
  // });


  //Find and Delete

  // db.collection('Todos').findOneAndDelete({completed:false}).then((result) => {
  //   console.log(result);
  // });


   db.collection('Users').deleteMany({name: 'Moh'});

  // db.collection('Users').findOneAndDelete({
  //   _id: new ObjectID("5b604678c615d825fcf91003")
  // }).then((results) => {
  //   console.log(JSON.stringify(results, undefined, 2));
  // });

  

  // db.close();
});
