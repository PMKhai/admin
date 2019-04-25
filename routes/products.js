var express = require('express');
var router = express.Router();

var product_controller = require('../controllers/productController');

/*Get product page*/
router.get('/', product_controller.product_list);

module.exports = router;