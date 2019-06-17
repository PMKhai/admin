const ObjectId = require('mongodb').ObjectId;
const {
    dbs
} = require('../dbs');
const CUSTOMER = 'users';

const list = async (page) => {
    return results = await dbs.production.collection(CUSTOMER).find({}).skip((page - 1) * 6).limit(6).toArray();
}
exports.list = list;

const count = async () => {
    return result = await dbs.production.collection(CUSTOMER).find({}).count();
}
exports.count = count;

const findOne = async (id) => {
    return await dbs.production.collection(CUSTOMER).findOne({
        _id: ObjectId(id)
    });
}
exports.findOne = findOne;

const updateOne = async (id, customer) => {
    let active = false;
    if (customer.active == 'true')
        active = true;
    return await dbs.production.collection(CUSTOMER).updateOne({
        _id: ObjectId(id)
    }, {
        $set: {
            user_name: customer.username,
            email: customer.email,
            address: customer.address,
            isActivated: active

        }
    })
}
exports.updateOne = updateOne;

const listAll = async () => {
    return await dbs.production.collection(CUSTOMER).find({}).toArray();
}
exports.listAll = listAll;