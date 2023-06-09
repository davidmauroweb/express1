const express = require('express');
const ProductController = require('../controllers/product.controller');
const ProductSchema = require('../schemas/product.schema');
const validatorLogin = require('../middlewares/validator.login');
const validatorHandler = require('../middlewares/validator.handler');

const router = express.Router();
const Controller = new ProductController();
router.get('/:id?', ProductController.get)
router.post('/', [validatorLogin, validatorHandler(ProductSchema)],Controller.create)
router.put('/', validatorLogin, ProductController.update)
router.patch('/:id', validatorLogin, ProductController.state)
//router.patch('/:id', [validatorLogin, validatorHandler(ProductSchema)], ProductController.state)
router.delete('/:id', validatorLogin, ProductController.delete)

module.exports = router;