var express = require('express');
var router = express.Router();

var product_controller = require('../controllers/productController');

/*Get product page*/
router.get('/', product_controller.product_list);

/*Get product detail page*/
router.get('/addingAndEditing', product_controller.product_detail);

module.exports = router;