const url = 'mongodb://mykola:1111@cluster0-shard-00-00-rwhsn.mongodb.net:27017,cluster0-shard-00-01-rwhsn.mongodb.net:27017,cluster0-shard-00-02-rwhsn.mongodb.net:27017/admin?replicaSet=Cluster0-shard-0&ssl=true';
const { MongoClient } = require('mongodb');

let connection;

async function createConnection() {
    if (!connection)
        connection = await MongoClient.connect(url);    

    return connection;
}

module.exports = createConnection;
