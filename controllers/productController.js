const product = require('../models/product');

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
exports.product_detail = (req, res, next) => {
    res.render("product/detail", {
        title: "Thêm mới sản phẩm"
    });
}
exports.product_loading_detail = async (req, res, next) => {
    const productDetail = await product.detail(req.params.id);
    console.log(productDetail);
    res.render('product/detail', {
        title:"Chỉnh sửa sản phẩm",
        productDetail
    });
}

exports.product_edit = async (req, res, next) => {
    await product.editing(req.params.id, req.body);
    res.redirect('./');
}