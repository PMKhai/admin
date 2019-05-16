exports.customers_list = (req, res, next) => {
    res.render("customer/index", {
        title: "Khách hàng"
    });
}

exports.customers_detail = (req, res, next) => {
    res.render("customer/addingAndEditing", {
        title: "Chi Tiết"
    });
}