exports.customers_list = (req, res, next) => {
    if (!req.user)
        res.redirect('/authen');
    res.render("customer/index", {
        title: "Khách hàng",
        admin: req.user
    });
}

exports.customers_detail = (req, res, next) => {
    if (!req.user)
        res.redirect('/authen');
    res.render("customer/detail", {
        title: "Chi Tiết",
        admin: req.user
    });
}