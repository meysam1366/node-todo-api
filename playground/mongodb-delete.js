const { MongoClient,ObjectID } = require('mongodb')

var obj = new ObjectID();
console.log(obj);

MongoClient.connect("mongodb://localhost:27017/TodoApp",(err,client) => {
    if(err) {
        return console.log("Unable Connect To MongoDB");
    }
    console.log('Connected To MongoDB');
    const db = client.db('TodoApp');

    // db.collection('Todos').deleteMany({text: 'Eat Lanch'}).then((result) => {
    //     console.log(result);
    // });

    // db.collection('Todos').deleteOne({text: 'Eat Lanch'}).then((result) => {
    //     console.log(result);
    // });

    // db.collection('Users').deleteMany({name: "Meysam"}).then((result) => {
    //     console.log(result);
    // });

    db.collection("Users").findOneAndDelete({"_id" : new ObjectID("5c212652946e58f945ceb9b0")})
    .then((result) => {
        console.log(result);
    });

    client.close();
});