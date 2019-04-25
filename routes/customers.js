var express = require('express');
var router = express.Router();

var customer_controller = require('../controllers/customerController');

/* GET users listing. */
router.get('/', customer_controller.customers_list);

module.exports = router;