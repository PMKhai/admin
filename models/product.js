const ObjectId = require('mongodb').ObjectId;
const {
    dbs
} = require('../dbs');


const list = async () => {
    const results = await dbs.production.collection('products').find({}).toArray();
    return results;
}

const adding = async (product) => {
    return await dbs.production.collection('products').insertOne(product);
}

const detail = async (id) => {
    const results = await dbs.production.collection('products').find({
        _id: ObjectId(id)
    }).toArray();
    return results[0];
}

const editing = async (id, product) => {
    return await dbs.production.collection('products').updateOne({
        _id: ObjectId(id)
    }, {
        $set: {
            name: product.name,
            category: product.category,
            distributor: product.distributor,
            quantum: product.quantum,
            price: product.price
        }
    }, {
        upsert: true
    })
}

exports.list = list;
exports.adding = adding;
exports.detail = detail;
exports.editing = editing;