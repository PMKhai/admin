const distributor = require('../models/distributor');

exports.distributor_list = async (req, res, next) => {
    if (!req.user)
        res.redirect('/authen');
    const distributorList = await distributor.list();
    console.log(distributorList);
    res.render('distributor/index', {
        title: "Nhà phân phối",
        distributorList,
        admin: req.user
    })
}

exports.distributor_detail = (req, res, next) => {
    if (!req.user)
        res.redirect('/authen');
    const display = {
        btn: "Thêm"
    };
    res.render('distributor/detail', {
        title: "Chi tiết nhà phân phối",
        display,
        admin: req.user
    })
}

exports.distributor_adding = async (req, res, next) => {
    if (!req.user)
        res.redirect('/authen');
    await distributor.adding(req.body);
    res.redirect('./');
}

exports.distributor_loading_detail = async (req, res, next) => {
    if (!req.user)
        res.redirect('/authen');
    const display = {
        btn: "Cập nhật"
    };
    const distributorDetail = await distributor.detail(req.params.id);
    console.log(distributorDetail);
    res.render('distributor/detail', {
        distributorDetail,
        display,
        admin: req.user
    });
}

exports.distributor_edit = async (req, res, next) => {
    if (!req.user)
        res.redirect('/authen');
    await distributor.editing(req.params.id, req.body);
    res.redirect('./');
}

exports.distributor_delete = async (req, res, next) => {
    if (!req.user)
        res.redirect('/authen');
    await distributor.deleting(req.params.id);
    res.redirect('/distributor');
}