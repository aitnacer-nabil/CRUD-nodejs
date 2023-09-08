const express = require('express');
const router = express.Router();
const costumerController = require('../controllers/costumer.controller');

router.get('/',costumerController.homePage);


module.exports = router;