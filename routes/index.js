var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Trang chủ' });
});

/*GET User page. */
router.get('/user', (req, res, next) => {
  res.render('user', {title: 'Quản lý người sử dụng'});
});

/*GET User-detail page. */
router.get('/user_detail', (req, res, next) => {
  res.render('user_detail', {title: 'Cập nhật thông tin'});
});

/*GET Product page. */
router.get('/product', (req, res, next) => {
  res.render('product', {title: 'Sản phẩm'});
});


module.exports = router;
