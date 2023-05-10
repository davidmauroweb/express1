const express = require('express');
const AuthController = require('./../controllers/auth.controller');
const AuthSchema = require('./../schemas/auth.schema');
const validatorHandler = require('./../middlewares/validator.handler');

const router = express.Router();

router.post('/', AuthController.auth)
module.exports = router;