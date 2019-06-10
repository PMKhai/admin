const express = require('express');
const router = express.Router();
const apiAdmin = require('../../controllers/api/adminContoller');

router.get('/check', apiAdmin.check)

module.exports = router;