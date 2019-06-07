var express = require('express');
var router = express.Router();

const adminController = require('../controllers/adminController');

/*Get admin list page. */
router.get('/', adminController.admin_list);

/*Get admin detail page. */
router.get('/add', adminController.admin_detail);

router.get('/setting/id=:id', adminController.changeInfo);

router.post('/setting/id=:id', adminController.updateInfo);


module.exports = router;