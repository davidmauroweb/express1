const express = require('express');

const CategoryController = require('../controllers/category.controller');
const validatorLogin = require('../middlewares/validator.login');

const router = express.Router();

router.get('/', validatorLogin, function(req, res) { CategoryController.get(req, res) })
module.exports = router;