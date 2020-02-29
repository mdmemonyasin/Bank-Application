const express = require('express');
const path = require('path');

const router = express.Router();
// const rootDir = require('../util/path');
// const adminData = require('./admin');
const shopController = require('../controller/user');


// router.use('/english',shopController.getEnglish);
router.use('/arabic',shopController.getArabic);
router.use('/',shopController.getEnglish);
module.exports = router;