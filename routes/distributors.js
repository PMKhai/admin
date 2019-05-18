var express = require('express');
var router = express.Router();

var distributor_controller = require('../controllers/distributoerController');

/* Get distributor list.*/
router.get('/', distributor_controller.distributor_list);

/* Get distributor detail. */
router.get('/detail', distributor_controller.distributor_detail);

module.exports = router;