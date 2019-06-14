const ObjectId = require('mongodb').ObjectId;
const {
    dbs
} = require('../dbs');
const CATEGORY = 'categories';

const list = async (page) => {
    const results = await dbs.production.collection(CATEGORY).find({}).skip((page - 1) * 6).limit(6).toArray();
    return results;
}

const adding = async (category) => {
    return await dbs.production.collection(CATEGORY).insertOne(category);
}

const detail = async (id) => {
    const results = await dbs.production.collection(CATEGORY).find({
        _id: ObjectId(id)
    }).toArray();
    return results[0];
}

const editing = async (id, category) => {
    return await dbs.production.collection(CATEGORY).updateOne({
        _id: ObjectId(id)
    }, {
        $set: {
            name: category.name
        }
    }, {
        upsert: true
    })
}
const deleting = async (id) => {
    return await dbs.production.collection(CATEGORY).deleteOne({
        _id: ObjectId(id)
    });
}

const count = async () => {
    return result = await dbs.production.collection(CATEGORY).find({}).count();
}
exports.count = count;
exports.list = list;
exports.adding = adding;
exports.detail = detail;
exports.editing = editing;
exports.deleting = deleting;