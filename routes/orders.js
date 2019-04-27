var express = require('express');
var router = express.Router();

var order_controller = require('../controllers/orderController');

/* GET order listing*/
router.get('/', order_controller.orders_list);

module.exports = router;