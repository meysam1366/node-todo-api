const { MongoClient,ObjectID } = require('mongodb')

var obj = new ObjectID();
console.log(obj);

MongoClient.connect("mongodb://localhost:27017/TodoApp",(err,client) => {
    if(err) {
        return console.log("Unable Connect To MongoDB");
    }
    console.log('Connected To MongoDB');
    const db = client.db('TodoApp');

    // db.collection('Todos').find({_id: new ObjectID('5c1bd7d50470fb0b2d8794ad')}).toArray().then((docs) => {
    //     console.log("Todos");
    //     console.log(JSON.stringify(docs, undefined,2));
    // },(err) => {
    //     console.log("Unable to fetch todos",err);
    // });

    // db.collection('Users').find().count().then((docs) => {
    //     console.log(`Users Count ${docs}`);
    // },(err) => {
    //     console.log("Unable to fetch todos",err);
    // });

    db.collection('Users').find({name: 'Meysam'}).toArray().then((docs) => {
        console.log('Users');
        console.log(JSON.stringify(docs,undefined,2));
    },(err) => {
        console.log("Unable to fetch Users",err);
    })

    client.close();
});