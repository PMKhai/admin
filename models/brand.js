const ObjectId = require('mongodb').ObjectId;
const {
    dbs
} = require('../dbs');

const list = async () => {
    const results = await dbs.production.collection('brands').find({}).toArray();
    return results;
}

const adding = async (brand) => {
    return await dbs.production.collection('brands').insertOne(brand);
}

const detail = async (id) => {
    const results = await dbs.production.collection('brands').find({
        _id: ObjectId(id)
    }).toArray();
    return results[0];
}

const editing = async (id, brand) => {
    return await dbs.production.collection('brands').updateOne({
        _id: ObjectId(id)
    }, {
        $set: {
            name: brand.name,
        }
    }, {
        upsert: true
    })
}

const deleting = async (id) => {
    return await dbs.production.collection('brands').deleteOne({
        _id: ObjectId(id)
    });
}

exports.list = list;
exports.adding = adding;
exports.detail = detail;
exports.editing = editing;
exports.deleting = deleting;