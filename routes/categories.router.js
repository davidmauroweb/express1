const express = require('express');
const CategoryController = require('../controllers/category.controller');
const CategorySchema = require('../schemas/category.schema');
const validatorHandler = require('../middlewares/validator.handler');
const validatorLogin = require('../middlewares/validator.login');
const { func } = require('joi');

const router = express.Router();
const Controller = new CategoryController();
router.get('/', validatorLogin, function(req, res) { Controller.get(req, res)})
router.post('/nueva/', validatorLogin, Controller.create)
module.exports = router;