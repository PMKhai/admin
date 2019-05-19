const category = require('../models/category');

exports.category_list = async (req, res, next) => {
    const categoryList = await  category.list();
    console.log(categoryList);
    res.render('category/index', {
        title: " Quản lý loại sản phẩm",
        categoryList
    });
}

exports.category_detail = (req, res, next) => {
    res.render('category/detail', {
        title: "Chi Tiết loại sản phẩm"
    });
}
exports.category_adding = async (req, res, next) => {
    await category.adding(req.body);
    res.redirect('./');
}
exports.category_loading_detail = async (req, res, next) => {
    const categoryDetail = await category.detail(req.params.id);
    console.log(categoryDetail);
    res.render('category/detail', {
        title:"Chỉnh sửa loại sản phẩm",
        categoryDetail
    });
}

exports.category_edit = async (req, res, next) => {
    await category.editing(req.params.id, req.body);
    res.redirect('./');
}