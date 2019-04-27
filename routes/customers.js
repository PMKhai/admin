var express = require('express');
var router = express.Router();

var customer_controller = require('../controllers/customerController');

/* GET customers listing. */
router.get('/', customer_controller.customers_list);

/* Get customer detail*/
router.get('/detail', customer_controller.customers_detail);

module.exports = router;