var express = require('express');
var router = express.Router();

var distributor_controller = require('../controllers/distributorController');

/* Get distributor list.*/
router.get('/', distributor_controller.distributor_list);

/*Get adding distributor page*/
router.get('/add', distributor_controller.distributor_detail);

/* Post adding distributor page*/
router.post('/add', distributor_controller.distributor_adding);

/*Get editing distributor page*/
router.get('/:id', distributor_controller.distributor_loading_detail);

/*Post  editing distributor page*/
router.post('/:id', distributor_controller.distributor_edit);

/*Post  deleting distributor page*/
router.get('/delete/:id', distributor_controller.distributor_delete);

module.exports = router;