const customer = require('../models/customer');

exports.orders_list = async (req, res, next) => {
    if (!req.user)
        res.redirect('/authen');
    if (req.user.role !== "admin")
        var role = {};
    const customerList = await customer.listAll();
    let order = [];

    res.render('order/index', {
        title: 'Đơn đặt hàng',
        admin: req.user,
        role
    });
    x
}