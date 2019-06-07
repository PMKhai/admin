const admin = require('../models/admin');

exports.admin_list = async (req, res, next) => {
    if (!req.user)
        res.redirect('/authen');
    const adminList = await admin.list();
    adminList.forEach(element => {
        if (element._id == req.user._id)
            console.log(element._id)

    });

    //console.log(adminList);
    res.render('admin/index', {
        title: "Quản trị viên",
        adminList,
        admin: req.user
    })
}

exports.changeInfo = async (req, res, next) => {
    if (!req.user)
        res.redirect('/authen');
    const isMe = {}
    console.log(req.params.id);
    const adminDetail = await admin.getByID(req.params.id);
    res.render('admin/detail', {
        title: "Thông tin quản trị viên",
        admin: req.user,
        isMe,
        adminDetail
    })
}

exports.admin_detail = (req, res, next) => {
    if (!req.user)
        res.redirect('/authen');
    console.log(req.params.id);
    const adminDetail = admin.getByID(req.params.id)
    res.render('admin/detail', {
        title: "Thông tin quản trị viên",
        admin: req.user
    })
}

exports.updateInfo = async (req, res, next) => {
    let isVetify = true;

    if (req.body.password != '')
        isVetify = await admin.verify(req.body.email, req.body.password);

    if (!isVetify) {
        const path = '/admin/setting/id=' + req.user._id;
        res.redirect(path);
    }
    if (req.body.newPassword != req.body.repassword) {
        const path = '/admin/setting/id=' + req.user._id;
        res.redirect(path);
    }
    const updatingAdmin = {
        email: req.body.email,
        username: req.body.name,
        newPassword: req.body.newPassword,
    }
    admin.updated(updatingAdmin);
    res.redirect('/');

}