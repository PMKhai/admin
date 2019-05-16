exports.orders_list = (req, res, next) => {
    res.render('order/index', {
        title: 'Đơn đặt hàng'
    });
}