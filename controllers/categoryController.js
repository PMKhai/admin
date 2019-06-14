const category = require('../models/category');

exports.category_list = async (req, res, next) => {
    if (!req.user)
        res.redirect('/authen');

    const sizeOfCategory = await category.count();
    const numberOfPge = Math.ceil(sizeOfCategory / 6);
    const paging = []

    for (let i = 1; i <= numberOfPge; i++) {
        if (i == req.params.pageNumber)
            paging.push({
                pnb: i,
                curentPage: 'disabled'
            })
        else
            paging.push({
                pnb: i
            })
    }

    const categoryList = await category.list(req.params.pageNumber);
    console.log(categoryList);

    res.render('category/index', {
        title: " Quản lý loại sản phẩm",
        categoryList,
        admin: req.user,
        paging
    });
}

exports.category_detail = (req, res, next) => {
    if (!req.user)
        res.redirect('/authen');
    const add = "Thêm mới";
    res.render('category/detail', {
        title: "Thêm mới loại sản phẩm",
        add,
        admin: req.user
    });
}
exports.category_adding = async (req, res, next) => {
    if (!req.user)
        res.redirect('/authen');
    await category.adding(req.body);
    res.redirect('./');
}
exports.category_loading_detail = async (req, res, next) => {
    if (!req.user)
        res.redirect('/authen');
    const add = "Cập nhật";
    const categoryDetail = await category.detail(req.params.id);
    console.log(categoryDetail);
    res.render('category/detail', {
        title: "Chỉnh sửa loại sản phẩm",
        categoryDetail,
        add,
        admin: req.user
    });
}

exports.category_edit = async (req, res, next) => {
    if (!req.user)
        res.redirect('/authen');
    await category.editing(req.params.id, req.body);
    res.redirect('./');
}
exports.category_delete = async (req, res, next) => {
    if (!req.user)
        res.redirect('/authen');
    await category.deleting(req.params.id);
    res.redirect('/category');
}