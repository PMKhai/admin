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

exports.register = register;