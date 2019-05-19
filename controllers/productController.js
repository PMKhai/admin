const product = require('../models/product');
const category = require('../models/category');
const distributor = require('../models/distributor');

exports.product_list = async (req, res, next) => {
    const productList = await product.list();
    console.log(productList);
    res.render("product/index", {
        title: "Quản lý sản phẩm",
        productList
    });
}



exports.product_adding = async (req, res, next) => {
    await product.adding(req.body);
    res.redirect('./');
}
exports.product_detail = async (req, res, next) => {
    const display = {
        btn: "Thêm"
    };
    const categoryList = await category.list();
    console.log(categoryList);
    const distributorList = await distributor.list();
    res.render("product/detail", {
        title: "Thêm mới sản phẩm",
        display,
        categoryList,
        distributorList
    });
}
exports.product_loading_detail = async (req, res, next) => {
    const productDetail = await product.detail(req.params.id);
    console.log(productDetail);
    const display = {
        btn: "Cập nhật"
    };
    res.render('product/detail', {
        title: "Chỉnh sửa sản phẩm",
        productDetail,
        display
    });
}

exports.product_edit = async (req, res, next) => {
    await product.editing(req.params.id, req.body);
    res.redirect('./');
}

exports.product_delete = async (req, res, next) => {
    await product.deleting(req.params.id);
    res.redirect('/product');
}