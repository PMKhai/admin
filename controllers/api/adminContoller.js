const admin = require('../../models/admin');

exports.check = async (req, res, next) => {
    const adminExist = await admin.check(req.query.email);
    res.json(adminExist);
}