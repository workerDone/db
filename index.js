const { MongoClient } = require('mongodb');
const url = 'mongodb://mykola:1111@cluster0-shard-00-00-rwhsn.mongodb.net:27017,cluster0-shard-00-01-rwhsn.mongodb.net:27017,cluster0-shard-00-02-rwhsn.mongodb.net:27017/admin?replicaSet=Cluster0-shard-0&ssl=true';
const createConnection = require('./lib/mongo');

async function createData() {
    const res = await Promise.all([
        createConnection(),
        createConnection(),
        createConnection(),
        createConnection(),
        createConnection()
    ])

    return res[0]
}


MongoClient.connect(url, (err, connection) => {
    if (err) {
        console.log(err)
    }

    connection
        .db('somedb').collection('someCollection').insert({
            someData: 'someData'
        })
        .then(() => {
            console.log('ok')
        })
        .catch(ex => {
            console.log(ex)
        })
});

// const createConnection = require('./lib/mongo');

// async function createData() {
//     const res = await createConnection();

//     return res[0];
// }

// createData();