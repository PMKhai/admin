var express = require('express');
var router = express.Router();
const multer = require('multer');
const upload = multer({
    dest: '/path/to/temporary/directory/to/store/uploaded/files'
})

var product_controller = require('../controllers/productController');

/*Get product page*/
router.get('/', product_controller.product_list);

/*Get adding product page*/
router.get('/add', product_controller.product_detail);

/* Post adding product page*/
router.post('/add', product_controller.product_adding);

/*Get editing product page*/
router.get('/:id', product_controller.product_loading_detail);

/*Post  editing product page*/
router.post('/:id', upload.single('image'), product_controller.product_edit);

/*Post  deleting category page*/
router.get('/delete/:id', product_controller.product_delete);

module.exports = router;