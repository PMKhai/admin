exports.customers_list = (req, res, next) => {
    res.render("customer", {
        title: "Khách hàng"
    });
}

exports.customers_detail = (req, res, next) => {
    res.render("customer_detail", {
        title: "Chi Tiết"
    });
}