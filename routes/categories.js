var express = require('express');
var router = express.Router();

var category_controller = require('../controllers/categoryController');

/*Get category listing.*/
router.get('/', category_controller.category_list);

/*Get category detail.*/
router.get('/addingAndEditing', category_controller.category_detail);

module.exports = router;