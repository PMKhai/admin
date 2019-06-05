const brand = require('../models/brand');

exports.brand_list = async (req, res, next) => {
    if (!req.user)
        res.redirect('/authen');
    const brandList = await brand.list();
    console.log(brandList);
    res.render('brand/index', {
        title: "Thương hiệu",
        brandList,
        admin: req.user
    })
}

exports.brand_detail = (req, res, next) => {
    if (!req.user)
        res.redirect('/authen');
    const display = {
        btn: "Thêm"
    };
    res.render('brand/detail', {
        title: "Chi tiết thương hiệu",
        display,
        admin: req.user
    })
}

exports.brand_adding = async (req, res, next) => {
    if (!req.user)
        res.redirect('/authen');
    await brand.adding(req.body);
    res.redirect('./');
}

exports.brand_loading_detail = async (req, res, next) => {
    if (!req.user)
        res.redirect('/authen');
    const display = {
        btn: "Cập nhật"
    };
    const brandDetail = await brand.detail(req.params.id);
    console.log(brandDetail);
    res.render('brand/detail', {
        brandDetail,
        display,
        admin: req.user
    });
}

exports.brand_edit = async (req, res, next) => {
    if (!req.user)
        res.redirect('/authen');
    await brand.editing(req.params.id, req.body);
    res.redirect('./');
}

exports.brand_delete = async (req, res, next) => {
    if (!req.user)
        res.redirect('/authen');
    await brand.deleting(req.params.id);
    res.redirect('/brand');
}