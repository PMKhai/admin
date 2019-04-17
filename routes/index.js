var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Trang chủ' });
});

/*GET User page. */
router.get('/customer', (req, res, next) => {
  res.render('customer', {title: 'Quản lý khách hàng'});
});

/*GET User-detail page. */
router.get('/customer_detail', (req, res, next) => {
  res.render('customer_detail', {title: 'Cập nhật thông tin'});
});

/*GET Product page. */
router.get('/product', (req, res, next) => {
  res.render('product', {title: 'Quản lý sản phẩm'});
});


module.exports = router;
