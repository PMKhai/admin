var express = require('express');
var router = express.Router();

var authen_controller = require('../controllers/authenController');

/*Get login page */
router.get("/", authen_controller.authen_login);

module.exports = router;