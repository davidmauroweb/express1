const express = require('express');
const ProductController = require('../controllers/product.controller');
const validatorLogin = require('../middlewares/validator.login');

const router = express.Router();
const Controller = new ProductController();
router.get('/:id?', ProductController.get)
router.post('/', Controller.create)
router.put('/', ProductController.update)
router.patch('/:id', ProductController.state)
router.delete('/:id', ProductController.delete)

module.exports = router;