exports.orders_list = (req, res, next) => {
    if (!req.user)
        res.redirect('/authen');
    res.render('order/index', {
        title: 'Đơn đặt hàng',
        admin: req.user
    });
}