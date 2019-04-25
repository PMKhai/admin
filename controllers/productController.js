exports.product_list = (req, res, next) => {
    res.render("product", {
        title: "Sản phẩm"
    });
}