const express = require('express');
const router = express.Router();
const controller = require('./product.controller');

router.get('/:id', controller.getProductById);
router.get('/', controller.getProduct);
router.post('/', controller.saveProduct);
router.put('/:id', controller.updateProduct);
router.delete('/:id', controller.deleteProduct);

module.exports = router;
