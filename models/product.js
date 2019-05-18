const ObjectId = require('mongodb').ObjectId;
const {
    dbs
} = require('../dbs');


const list = async () => {
    const results = await dbs.production.collection('products').find({}).toArray();
    return results;
}

exports.list = list;