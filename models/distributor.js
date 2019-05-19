const ObjectId = require('mongodb').ObjectId;
const {
    dbs
} = require('../dbs');

const list = async () => {
    const results = await dbs.production.collection('distributors').find({}).toArray();
    return results;
}

const adding = async (distributor) => {
    return await dbs.production.collection('distributors').insertOne(distributor);
}

const detail = async (id) => {
    const results = await dbs.production.collection('distributors').find({
        _id: ObjectId(id)
    }).toArray();
    return results[0];
}

const editing = async (id, distributor) => {
    return await dbs.production.collection('distributors').updateOne({
        _id: ObjectId(id)
    }, {
        $set: {
            name: distributor.name,
        }
    }, {
        upsert: true
    })
}

exports.list = list;
exports.adding = adding;
exports.detail = detail;
exports.editing = editing;