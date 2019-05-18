const product = require('../models/product');

exports.product_list = async (req, res, next) => {
    const productList = await product.list();
    console.log(productList);
    res.render("product/index", {
        title: "Quản lý sản phẩm",
        productList
    });
}

exports.product_detail = (req, res, next) => {
    res.render("product/detail", {
        title: "chi tiết sản phẩm"
    });
}