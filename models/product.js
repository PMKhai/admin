const ObjectId = require('mongodb').ObjectId;
const {
    dbs
} = require('../dbs');


const list = async () => {
    const results = await dbs.production.collection('products').find({}).toArray();
    return results;
}

const adding = async (product) => {
    return dbs.production.collection('products').insertOne(product);
}

exports.list = list;
exports.adding = adding;