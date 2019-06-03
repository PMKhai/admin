var express = require('express');
var router = express.Router();

var authen_controller = require('../controllers/authenController');
const passport = require('passport');



router.get('/', authen_controller.authen_login);

router.post('/', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/authen'
}));

router.get('/logout', authen_controller.logout);

module.exports = router;