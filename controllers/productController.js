const product = require('../models/product');
const category = require('../models/category');
const distributor = require('../models/distributor');

exports.product_list = async (req, res, next) => {
    if (!req.user)
        res.redirect('/authen');
    const productList = await product.list();
    console.log(productList);
    res.render("product/index", {
        title: "Quản lý sản phẩm",
        productList,
        admin: req.user
    });
}



exports.product_adding = async (req, res, next) => {
    if (!req.user)
        res.redirect('/authen');
    await product.adding(req.body);
    res.redirect('./');
}
exports.product_detail = async (req, res, next) => {
    if (!req.user)
        res.redirect('/authen');
    const display = {
        btn: "Thêm"
    };
    const categoryList = await category.list();
    console.log(categoryList);
    const distributorList = await distributor.list();
    console.log(distributorList);
    res.render("product/detail", {
        title: "Thêm mới sản phẩm",
        display,
        categoryList,
        distributorList,
        admin: req.user
    });
}
exports.product_loading_detail = async (req, res, next) => {
    if (!req.user)
        res.redirect('/authen');
    const productDetail = await product.detail(req.params.id);
    console.log(productDetail);
    const categoryList = await category.list();
    const distributorList = await distributor.list();

    distributorList.forEach(element => {
        if (element.name == productDetail.distributor)
            element.selected = 'selected';
    });
    console.log(distributorList);

    categoryList.forEach(element => {
        if (element.name == productDetail.distributor)
            element.selected = 'selected';
    });
    console.log(categoryList);

    const display = {
        btn: "Cập nhật"
    };
    res.render('product/detail', {
        title: "Chỉnh sửa sản phẩm",
        productDetail,
        display,
        categoryList,
        distributorList,
        admin: req.user
    });
}

exports.product_edit = async (req, res, next) => {
    if (!req.user)
        res.redirect('/authen');
    //console.log(req.file.path);
    await product.editing(req.params.id, req.body);
    res.redirect('./');
}

exports.product_delete = async (req, res, next) => {
    if (!req.user)
        res.redirect('/authen');
    await product.deleting(req.params.id);
    res.redirect('/product');
}