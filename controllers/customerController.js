exports.customers_list = (req, res, next) => {
    res.render("customer", {
        title: "Khách hàng"
    });
}