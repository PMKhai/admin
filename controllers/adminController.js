const admin = require('../models/admin');

exports.admin_list = async (req, res, next) => {
    const adminList = await admin.list();
    console.log(adminList);
    res.render('admin/index', {
        title: "Quản trị viên",
        adminList
    })
}

exports.admin_detail = (req, res, next) => {
    res.render('admin/detail', {
        title: "Thông tin quản trị viên"
    })
}