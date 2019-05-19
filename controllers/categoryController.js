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
    const add = "Thêm mới";
    res.render('category/detail', {
        title: "Thêm mới loại sản phẩm",add
    });
}
exports.category_adding = async (req, res, next) => {
    await category.adding(req.body);
    res.redirect('./');
}
exports.category_loading_detail = async (req, res, next) => {
    const add = "Cập nhật";
    const categoryDetail = await category.detail(req.params.id);
    console.log(categoryDetail);
    res.render('category/detail', {
        title:"Chỉnh sửa loại sản phẩm",
        categoryDetail,add
    });
}

exports.category_edit = async (req, res, next) => {
    await category.editing(req.params.id, req.body);
    res.redirect('./');
}
exports.category_delete = async (req, res, next) => {
    await category.deleting(req.params.id);
    res.redirect('/category');
}
