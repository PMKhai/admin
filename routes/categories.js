var express = require('express');
var router = express.Router();

var category_controller = require('../controllers/categoryController');

/*Get category listing.*/
router.get('/', category_controller.category_list);

/*Get category detail.*/
router.get('/add', category_controller.category_detail);
/* Post adding category page*/
router.post('/add', category_controller.category_adding);

/*Get editing category page*/
router.get('/:id', category_controller.category_loading_detail);

/*Post  editing category page*/
router.post('/:id', category_controller.category_edit);
/*Post  deleting category page*/
router.get('/delete/:id', category_controller.category_delete);
module.exports = router;