const MongoClient = require('mongodb').MongoClient;

// connection string
const PROD_URI = "mongodb+srv://khaipham:123456789a@cluster0-lwsla.mongodb.net/LTW-data?retryWrites=true";

var dbs = {
    production: {}
};

function connect(uri) {
    return MongoClient.connect(uri, {
        useNewUrlParser: true
    }).then(client => client.db())
}

exports.initdb = async function () {
    let database = await connect(PROD_URI);
    dbs.production = database;
}

exports.dbs = dbs;