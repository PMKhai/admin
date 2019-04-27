exports.orders_list = (req, res, next) => {
    res.render('order_management', {
        title: 'Đơn đặt hàng'
    });
}