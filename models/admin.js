const ObjectID = require('mongodb').ObjectID;
const bcrypt = require('bcrypt');
const {
    dbs
} = require('../dbs');

const ADMIN = "admins";
const SALT_ROUNDS = 10;

const register = async (username, email, password) => {
    const hash = await bcrypt.hash(password, SALT_ROUNDS);
    return await dbs.production.collection(ADMIN).insert({
        username,
        email,
        password: hash
    })
}

const get = async (email) => {
    return await dbs.production.collection(ADMIN).findOne({
        email
    });
}

const verify = async (email, password) => {
    const admin = await get(email);
    if (!admin)
        return undefined;
    console.log(admin.password);
    return await bcrypt.compare(password, admin.password);
}

const list = async () => {
    const results = await dbs.production.collection(ADMIN).find({}).toArray();
    return results;
}

exports.register = register;
exports.get = get;
exports.verify = verify;
exports.list = list;