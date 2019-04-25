var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Trang chủ'
  });
});


/*GET User-detail page. */
router.get('/customer_detail', (req, res, next) => {
  res.render('customer_detail', {
    title: 'Cập nhật thông tin'
  });
});

/*Get Order management page. */
router.get('/order_management', (req, res, next) => {
  res.render('order_management', {
    title: 'Quản lý đơn đặt hàng'
  });
});
module.exports = router;