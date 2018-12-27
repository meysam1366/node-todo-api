const { MongoClient,ObjectID } = require('mongodb')

var obj = new ObjectID();
console.log(obj);

MongoClient.connect("mongodb://localhost:27017/TodoApp",(err,client) => {
    if(err) {
        return console.log("Unable Connect To MongoDB");
    }
    console.log('Connected To MongoDB');
    const db = client.db('TodoApp');

    // db.collection('Todos').findOneAndUpdate({_id: new ObjectID('5c211b2c946e58f945ceb825')},{
    //     $set: {
    //         completed: false
    //     }
    // },{returnOriginal: false})
    // .then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID("5c21265c946e58f945ceb9b4")
    },{
        $inc: {
            age: 2
        }
    },{
        returnOriginal: false
    })
    .then((result) => {
        console.log(result);
    });

    client.close();
});