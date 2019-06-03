var express = require('express');
var router = express.Router();

const adminController = require('../controllers/adminController');

/*Get admin list page. */
router.get('/', adminController.admin_list);

/*Get admin detail page. */
router.get('/add', adminController.admin_detail);

module.exports = router;