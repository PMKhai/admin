const ObjectId = require('mongodb').ObjectId;
const {
    dbs
} = require('../dbs');

const PRODUCT = 'products';

const list = async (page) => {
    return results = await dbs.production.collection(PRODUCT).find({}).skip((page - 1) * 6).limit(6).toArray();
}

const adding = async (product) => {
    return await dbs.production.collection(PRODUCT).insertOne(product);
}

const detail = async (id) => {
    const results = await dbs.production.collection(PRODUCT).find({
        _id: ObjectId(id)
    }).toArray();
    return results[0];
}

const editing = async (id, product) => {
    return await dbs.production.collection(PRODUCT).updateOne({
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

const deleting = async (id) => {
    return await dbs.production.collection(PRODUCT).deleteOne({
        _id: ObjectId(id)
    });
}

const count = async () => {
    const result = await dbs.production.collection(PRODUCT).find({}).count();
    return result;
}

exports.list = list;
exports.adding = adding;
exports.detail = detail;
exports.editing = editing;
exports.deleting = deleting;
exports.count = count;