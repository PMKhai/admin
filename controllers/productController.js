exports.product_list = (req, res, next) => {
    res.render("product/index", {
        title: "Sản phẩm"
    });
}

exports.product_detail = (req, res, next) => {
    res.render("product/addingAndEditing", {
        title: "chi tiết sản phẩm"
    });
}