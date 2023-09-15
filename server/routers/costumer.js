const express = require('express');
const router = express.Router();
const costumerController = require('../controllers/costumer.controller');

router.get('/',costumerController.homePage);
router.get('/dummy',costumerController.inserDummyData);
router.get('/add',costumerController.addCostumer);


router.post('/add', costumerController.insertCostumer);
module.exports = router;