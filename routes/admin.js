var express = require('express');
var router = express.Router();

const adminController = require('../controllers/adminController');

/*Get admin list page. */
router.get('/page=:pageNumber', adminController.admin_list);

/*Get admin adding page. */
router.get('/add', adminController.admin_detail);

/*Post admin adding page. */
router.post('/add', adminController.addAdmin);

/*Get admin page of myself. */
router.get('/setting/id=:id', adminController.changeInfo);

/*Post admin page of myself. */
router.post('/setting/id=:id', adminController.updateInfo);

/*Get admin detail page. */
router.get('/id=:id', adminController.loadAdminDetail);

/*Post admin detail page. */
router.post('/id=:id', adminController.editAdmin);

module.exports = router;