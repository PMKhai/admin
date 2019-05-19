var express = require('express');
var router = express.Router();

var brand_controller = require('../controllers/brandController');

/* Get brand list.*/
router.get('/', brand_controller.brand_list);

/*Get adding brand page*/
router.get('/add', brand_controller.brand_detail);

/* Post adding brand page*/
router.post('/add', brand_controller.brand_adding);

/*Get editing brand page*/
router.get('/:id', brand_controller.brand_loading_detail);

/*Post  editing brand page*/
router.post('/:id', brand_controller.brand_edit);

/*Post  deleting brand page*/
router.get('/delete/:id', brand_controller.brand_delete);

module.exports = router;