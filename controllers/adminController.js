const admin = require('../models/admin');

exports.admin_list = async (req, res, next) => {
    if (!req.user)
        res.redirect('/authen');
    const adminList = await admin.list();
    console.log(adminList);
    res.render('admin/index', {
        title: "Quản trị viên",
        adminList,
        admin: req.user
    })
}

exports.admin_detail = (req, res, next) => {
    if (!req.user)
        res.redirect('/authen');
    res.render('admin/detail', {
        title: "Thông tin quản trị viên",
        admin: req.user
    })
}