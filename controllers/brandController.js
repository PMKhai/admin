const brand = require('../models/brand');

exports.brand_list = async (req, res, next) => {
    const brandList = await brand.list();
    console.log(brandList);
    res.render('brand/index', {
        title: "Thương hiệu",
        brandList
    })
}

exports.brand_detail = (req, res, next) => {
    const display = {
        btn: "Thêm"
    };
    res.render('brand/detail', {
        title: "Chi tiết thương hiệu",
        display
    })
}

exports.brand_adding = async (req, res, next) => {
    await brand.adding(req.body);
    res.redirect('./');
}

exports.brand_loading_detail = async (req, res, next) => {
    const display = {
        btn: "Cập nhật"
    };
    const brandDetail = await brand.detail(req.params.id);
    console.log(brandDetail);
    res.render('brand/detail', {
        brandDetail,
        display
    });
}

exports.brand_edit = async (req, res, next) => {
    await brand.editing(req.params.id, req.body);
    res.redirect('./');
}

exports.brand_delete = async (req, res, next) => {
    await brand.deleting(req.params.id);
    res.redirect('/brand');
}