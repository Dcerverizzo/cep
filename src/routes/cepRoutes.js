const express = require('express');
const CepController = require('../controllers/cepController');
const router = express.Router();

router.get('/:cep', CepController.getCep);

module.exports = router;