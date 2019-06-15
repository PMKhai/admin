const customer = require('../models/customer');

exports.customers_list = async (req, res, next) => {
    if (!req.user)
        res.redirect('/authen');

    const sizeOfCustomer = await customer.count();
    const numberOfPge = Math.ceil(sizeOfCustomer / 6);
    const paging = []

    for (let i = 1; i <= numberOfPge; i++) {
        if (i == req.params.pageNumber)
            paging.push({
                pnb: i,
                curentPage: 'disabled'
            })
        else
            paging.push({
                pnb: i
            })
    }

    const customerList = await customer.list(req.params.pageNumber);
    if (!req.user)
        res.redirect('/authen');

    if (req.user.role !== "admin")
        var role = {};

    res.render("customer/index", {
        title: "Khách hàng",
        admin: req.user,
        customerList,
        paging,
        role
    });
}



exports.customers_detail = async (req, res, next) => {
    if (!req.user)
        res.redirect('/authen');
    const customerDetail = await customer.findOne(req.params.id);

    if (req.user.role !== "admin")
        var role = {};

    res.render("customer/detail", {
        title: "Chi Tiết",
        admin: req.user,
        customerDetail,
        role
    });
}

exports.customer_edit = async (req, res, next) => {
    if (!req.user)
        res.redirect('/authen');
    await customer.updateOne(req.params.id, req.body);
    res.redirect('/customer/page=1');

}