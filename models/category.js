const ObjectId = require('mongodb').ObjectId;
const {
    dbs
} = require('../dbs');


const list = async () => {
    const results = await dbs.production.collection('categories').find({}).toArray();
    return results;
}

const adding = async (category) => {
    return await dbs.production.collection('categories').insertOne(category);
}

const detail = async (id) => {
    const results = await dbs.production.collection('categories').find({
        _id: ObjectId(id)
    }).toArray();
    return results[0];
}

const editing = async (id, category) => {
    return await dbs.production.collection('categories').updateOne({
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
    return await dbs.production.collection('categories').deleteOne({
        _id: ObjectId(id)
    });
}
exports.list = list;
exports.adding = adding;
exports.detail = detail;
exports.editing = editing;
exports.deleting = deleting;