const admin = require('../models/admin');

exports.authen_login = (req, res, next) => {
    res.render('authen/login', {
        title: "Đăng nhập",
        layout: false
    })
}

exports.registerPost = async (req, res, next) => {
    console.log(req.body);
    await admin.register(req.body.username, req.body.email, req.body.password);
    res.redirect('/authen');
}