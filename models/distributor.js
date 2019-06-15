const ObjectId = require('mongodb').ObjectId;
const {
    dbs
} = require('../dbs');

const DISTRIBUTOR = 'distributors';

const list = async (page) => {
    return results = await dbs.production.collection(DISTRIBUTOR).find({}).skip((page - 1) * 6).limit(6).toArray();
}

const adding = async (distributor) => {
    return await dbs.production.collection(DISTRIBUTOR).insertOne(distributor);
}

const detail = async (id) => {
    const results = await dbs.production.collection(DISTRIBUTOR).find({
        _id: ObjectId(id)
    }).toArray();
    return results[0];
}

const editing = async (id, distributor) => {
    return await dbs.production.collection(DISTRIBUTOR).updateOne({
        _id: ObjectId(id)
    }, {
        $set: {
            name: distributor.name,
        }
    }, {
        upsert: true
    })
}

const deleting = async (id) => {
    return await dbs.production.collection(DISTRIBUTOR).deleteOne({
        _id: ObjectId(id)
    });
}

const count = async () => {
    return result = await dbs.production.collection(DISTRIBUTOR).find({}).count();
}

exports.list = list;
exports.adding = adding;
exports.detail = detail;
exports.editing = editing;
exports.deleting = deleting;
exports.count = count;