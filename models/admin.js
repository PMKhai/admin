const ObjectID = require('mongodb').ObjectID;
const bcrypt = require('bcrypt');
const {
    dbs
} = require('../dbs');

const ADMIN = "admins";
const SALT_ROUNDS = 10;

const register = async (username, email, password, role) => {
    const hash = await bcrypt.hash(password, SALT_ROUNDS);
    return await dbs.production.collection(ADMIN).insert({
        username,
        email,
        password: hash,
        role
    })
}

const getByEmail = async (email) => {
    return await dbs.production.collection(ADMIN).findOne({
        email
    });
}

const getByID = async (id) => {
    return await dbs.production.collection(ADMIN).findOne({
        _id: ObjectID(id)
    });
}

const verify = async (email, password) => {
    const admin = await getByEmail(email);
    if (!admin)
        return undefined;
    console.log(admin.password);
    return await bcrypt.compare(password, admin.password);
}

const list = async () => {
    const results = await dbs.production.collection(ADMIN).find({}).toArray();
    return results;
}

const updated = async (admin) => {
    if (admin.newPassword == '') {

        return await dbs.production.collection(ADMIN).updateOne({
            email: admin.email
        }, {
            $set: {
                username: admin.username
            }
        })
    } else {
        const hash = await bcrypt.hash(admin.newPassword, SALT_ROUNDS);

        return await dbs.production.collection(ADMIN).updateOne({
            email: admin.email
        }, {
            $set: {
                username: admin.username,
                password: hash
            }
        })
    }
}

const check = async (email) => {
    const admin = await dbs.production.collection(ADMIN).findOne({
        email
    });
    if (admin) return true;
    return false
}

const edit = async (id, admin) => {
    if (admin.newPassword == "") {
        return await dbs.production.collection(ADMIN).updateOne({
            _id: ObjectID(id)
        }, {
            $set: {
                username: admin.name,
                email: admin.email,
                role: admin.role
            }
        })
    } else {
        const hash = await bcrypt.hash(admin.newPassword, SALT_ROUNDS);
        return await dbs.production.collection(ADMIN).updateOne({
            _id: ObjectID(id)
        }, {
            $set: {
                username: admin.name,
                email: admin.email,
                role: admin.role,
                password: hash
            }
        })
    }
}

exports.register = register;
exports.getByEmail = getByEmail;
exports.getByID = getByID;
exports.verify = verify;
exports.list = list;
exports.updated = updated;
exports.check = check;
exports.edit = edit;